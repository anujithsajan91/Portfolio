import { useCallback, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import MagicBento from '../components/MagicBento'

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export function Contact() {
  const contactCardRef = useRef(null);
  const setContactCardNode = useCallback((node) => {
    contactCardRef.current = node;
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const [statusMessage, setStatusMessage] = useState('');

  const emailConfig = useMemo(() => {
    // Vite exposes env vars with VITE_ prefix
    return {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      // fallback destination if EmailJS isn't configured
      fallbackTo: 'anujithsajan005@gmail.com'
    };
  }, []);

  const validate = useCallback((values) => {
    const next = {};
    const name = values.name?.trim() ?? '';
    const email = values.email?.trim() ?? '';
    const message = values.message?.trim() ?? '';

    if (!name) next.name = 'Name is required.';
    if (!email) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email.';
    if (!message) next.message = 'Message is required.';

    return next;
  }, []);

  const triggerSuccessEffect = useCallback(() => {
    const el = contactCardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const evt = new MouseEvent('click', {
      bubbles: true,
      clientX: rect.left + rect.width / 2,
      clientY: rect.top + rect.height / 2
    });
    el.dispatchEvent(evt);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev?.[name]) return prev;
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Honeypot filled → silently succeed (bot)
    if (form.website) {
      setStatus('sent');
      setStatusMessage('Sent!');
      setForm({ name: '', email: '', message: '', website: '' });
      triggerSuccessEffect();
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending…');

    try {
      const { serviceId, templateId, publicKey, fallbackTo } = emailConfig;
      const payload = {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        message: form.message.trim(),
        reply_to: form.email.trim(),
      };

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, payload, { publicKey });
      } else {
        // mailto fallback (still static-site friendly)
        const subject = encodeURIComponent(`Portfolio contact from ${payload.from_name}`);
        const body = encodeURIComponent(
          `Name: ${payload.from_name}\nEmail: ${payload.from_email}\n\n${payload.message}`
        );
        window.location.href = `mailto:${fallbackTo}?subject=${subject}&body=${body}`;
      }

      setStatus('sent');
      setStatusMessage('Sent!');
      setForm({ name: '', email: '', message: '', website: '' });
      triggerSuccessEffect();
    } catch (err) {
      console.error('Contact send failed', err);
      setStatus('failed');
      setStatusMessage('Failed. Please try again.');
    }
  }, [emailConfig, form, status, triggerSuccessEffect, validate]);

  return (
    <section className="mx-auto max-w-5xl py-10 sm:px-0 sm:py-12" style={{ width: '100%' }}>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
      <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        contactForm={form}
        contactErrors={errors}
        contactStatus={status}
        contactStatusMessage={statusMessage}
        onContactChange={handleChange}
        onContactSubmit={handleSubmit}
        contactCardRef={setContactCardNode}
      />
      
      </motion.div>
    </section>
  );
}

export default Contact;



