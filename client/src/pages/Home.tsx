import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

const phonePrimary = "0797489868";
const phoneSecondary = "0768 943 599";
const whatsappPrimary = "https://wa.me/254797489868";
const whatsappSecondary = "https://wa.me/254768943599";
const instagramUrl = "https://www.instagram.com/_cashmere_events/";

const services = [
  {
    number: "01",
    title: "Full-service weddings",
    copy: "From the first moodboard to the last candle, we style the full celebration around the feeling you want to leave behind.",
  },
  {
    number: "02",
    title: "Intimate celebrations",
    copy: "Thoughtful tablescapes, considered florals, and the small details that make a gathering feel entirely yours.",
  },
  {
    number: "03",
    title: "Corporate & social",
    copy: "Brand dinners, launches, and milestone moments designed with polish, personality, and a clear point of view.",
  },
];

const gallery = [
  {
    src: "/assets/cashmere-gallery-table.jpg",
    alt: "Ivory florals, candles, and glassware set for an elegant dinner table",
    label: "The quiet details",
    className: "gallery-tall",
  },
  {
    src: "/assets/cashmere-gallery-ceremony.jpg",
    alt: "Geometric fabric canopy prepared for an outdoor wedding ceremony",
    label: "A ceremony in shape",
    className: "gallery-mid",
  },
  {
    src: "/assets/cashmere-gallery-dinner.jpg",
    alt: "Candlelit dinner table surrounded by deep green foliage",
    label: "After golden hour",
    className: "gallery-tall gallery-offset",
  },
];

const process = [
  ["01", "Tell us the feeling", "We start with a conversation about your people, your place, and the atmosphere you want to remember."],
  ["02", "Shape the story", "Your ideas become a considered visual direction: palette, textures, florals, furniture, and the details in between."],
  ["03", "Bring it to life", "On the day, our team takes care of the choreography so you can be completely present for the moment."],
];

const testimonials = [
  {
    quote: "They understood the brief before we had the words for it. Every corner felt like us — soft, elevated, and completely effortless.",
    name: "M + K",
    detail: "Garden celebration · Nairobi",
  },
  {
    quote: "Cashmere gave our dinner a point of view. The room felt intimate, memorable, and beautifully considered from start to finish.",
    name: "A. Wanjiku",
    detail: "Private dinner · Karen",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const date = String(formData.get("date") || "Not set yet");
    const message = String(formData.get("message") || "");
    const whatsappMessage = `Hello Cashmere Events, I would love to request a consultation.\n\nName: ${name}\nEmail: ${email}\nCelebration date: ${date}\nAbout the day: ${message}`;
    window.open(`${whatsappPrimary}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const motionProps = shouldReduceMotion
    ? { initial: false, whileInView: undefined, viewport: undefined }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.18 } };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" aria-label="Cashmere Events home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true"><Sparkles size={15} strokeWidth={1.5} /></span>
            <span className="brand-name">Cashmere<span>Events</span></span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#contact" onClick={closeMenu}>Enquire</a>
            <a className="nav-instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Cashmere Events on Instagram"><Instagram size={16} /></a>
          </nav>
          <a className="header-cta" href={whatsappPrimary} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <motion.div className="hero-copy" initial={shouldReduceMotion ? false : "hidden"} animate={shouldReduceMotion ? undefined : "visible"} variants={stagger}>
              <motion.div className="eyebrow" variants={reveal}><span className="eyebrow-line" /> Nairobi · Kenya</motion.div>
              <motion.h1 variants={reveal}>A softer way<br /><em>to celebrate.</em></motion.h1>
              <motion.p className="hero-intro" variants={reveal}>Luxury wedding and event styling for the moments you want to feel long after the last guest has gone.</motion.p>
              <motion.div className="hero-actions" variants={reveal}>
                <a className="button button-dark" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
                <a className="text-link" href="#work">See the work <ArrowDownRight size={16} /></a>
              </motion.div>
              <motion.div className="booking-note" variants={reveal}><span className="booking-dot" /> Now booking 2026 dates</motion.div>
            </motion.div>
            <motion.div className="hero-visual" initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }} animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}>
              <div className="hero-image-wrap">
                <img src="/assets/cashmere-hero.jpg" alt="Warm outdoor wedding reception styled with ivory florals, candlelight, and terracotta accents" />
                <div className="hero-image-caption"><span>01 / 04</span><span>Styled in full colour</span></div>
              </div>
              <div className="hero-stamp" aria-hidden="true"><span>Made for<br />the in-between<br />moments</span></div>
            </motion.div>
          </div>
          <div className="hero-footer container"><span>Soft · Rustic · Elegant</span><span className="scroll-cue">Scroll to explore <ChevronDown size={15} /></span><span>Trusted by couples across Kenya</span></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="container intro-grid">
            <motion.div {...motionProps} variants={reveal} className="section-kicker"><span>About Cashmere</span><span className="kicker-rule" /></motion.div>
            <motion.div {...motionProps} variants={reveal} className="intro-statement">We believe the most beautiful celebrations are the ones that feel <em>unmistakably yours.</em></motion.div>
            <motion.div {...motionProps} variants={reveal} className="intro-support"><p>Cashmere Events brings a gentle, intentional eye to weddings, dinners, and gatherings across Kenya. We mix tactile detail with a clear, calm point of view — so the atmosphere feels effortless, not overdone.</p><a className="text-link dark-link" href="#approach">How we work <ArrowDownRight size={16} /></a></motion.div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <motion.div {...motionProps} variants={reveal} className="section-heading"><div><span className="section-index">01 — What we do</span><h2>Designed around<br /><em>your kind of magic.</em></h2></div><p>From intimate garden dinners to full-scale wedding weekends, we make space for the story underneath the styling.</p></motion.div>
            <div className="services-list">
              {services.map((service) => <motion.article {...motionProps} variants={reveal} className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><ArrowUpRight className="service-arrow" size={19} /></motion.article>)}
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <motion.div {...motionProps} variants={reveal} className="work-topline"><span className="section-index">02 — Selected work</span><span>Recent notes from the studio</span></motion.div>
            <motion.div {...motionProps} variants={reveal} className="work-heading"><h2>Scenes worth<br /><em>remembering.</em></h2><p>Every setup starts with a feeling. Here are a few ways we have translated it into place, light, and texture.</p></motion.div>
            <div className="gallery-grid">
              {gallery.map((item, index) => <motion.figure {...motionProps} variants={reveal} className={`gallery-item ${item.className}`} key={item.src}><div className="gallery-image"><img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} /><span className="gallery-index">0{index + 1}</span></div><figcaption>{item.label}<ArrowUpRight size={15} /></figcaption></motion.figure>)}
            </div>
            <div className="gallery-foot"><span>More moments on Instagram</span><a className="text-link dark-link" href={instagramUrl} target="_blank" rel="noreferrer">@_cashmere_events <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container approach-grid">
            <motion.div {...motionProps} variants={reveal} className="approach-title"><span className="section-index">03 — Our approach</span><h2>A calm process<br />for a <em>big feeling.</em></h2><p>Good styling should make room for the people, not compete with them. We keep the process close, clear, and genuinely collaborative.</p></motion.div>
            <div className="process-list">{process.map(([number, title, copy]) => <motion.div {...motionProps} variants={reveal} className="process-item" key={number}><span className="process-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowDownRight size={18} /></motion.div>)}</div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-inner"><span className="quote-mark">“</span><motion.blockquote {...motionProps} variants={reveal}>The room should feel like a deep breath — beautiful, considered, and completely <em>alive.</em></motion.blockquote><div className="quote-meta"><span>— The Cashmere philosophy</span><span className="quote-rule" /></div></div>
        </section>

        <section className="testimonial-section section-pad" id="notes">
          <div className="container"><div className="testimonial-header"><span className="section-index">04 — Kind words</span><span>From the people in the room</span></div><div className="testimonial-grid">{testimonials.map((testimonial) => <motion.figure {...motionProps} variants={reveal} className="testimonial" key={testimonial.name}><blockquote>“{testimonial.quote}”</blockquote><figcaption><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></figcaption></motion.figure>)}</div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <motion.div {...motionProps} variants={reveal} className="contact-copy"><span className="section-index">05 — Let’s make a start</span><h2>Your story,<br /><em>styled in full colour.</em></h2><p>Tell us a little about what you are planning. We will come back with thoughtful next steps, a little inspiration, and a time to talk.</p><div className="contact-details"><a href={`tel:${phonePrimary}`}><Phone size={16} /> {phonePrimary}</a><a href={`tel:${phoneSecondary.replace(/\s/g, "")}`}><Phone size={16} /> {phoneSecondary}</a><a href={whatsappSecondary} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp {phoneSecondary}</a><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> @_cashmere_events</a></div></motion.div>
            <motion.div {...motionProps} variants={reveal} className="contact-form-wrap">{submitted ? <div className="form-success"><span className="success-icon"><Check size={19} /></span><span className="eyebrow">WhatsApp draft ready</span><h3>Your note is ready to send.</h3><p>We’ve prepared a WhatsApp message with your details. Tap below to review it and send when you’re ready.</p><a className="button button-light" href={whatsappPrimary} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Open WhatsApp</a></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label htmlFor="name">Your name<input required id="name" name="name" placeholder="e.g. Wanjiku & Brian" /></label><label htmlFor="email">Email address<input required type="email" id="email" name="email" placeholder="you@example.com" /></label></div><label htmlFor="date">Celebration date <span>(if known)<input id="date" name="date" placeholder="DD / MM / YYYY" /></span></label><label htmlFor="message">A little about the day<textarea required id="message" name="message" rows={4} placeholder="Tell us where you are in the planning process…" /></label><button className="button button-light form-submit" type="submit">Request a consultation <ArrowUpRight size={16} /></button><p className="form-note">Prefer WhatsApp? <a href={whatsappPrimary} target="_blank" rel="noreferrer">Message us directly <ArrowUpRight size={13} /></a></p></form>}</motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand-lockup footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><Sparkles size={15} strokeWidth={1.5} /></span><span className="brand-name">Cashmere<span>Events</span></span></a><p>Luxury wedding & event styling<br />Nairobi · Kenya</p><div className="footer-links"><a href="#top">Back to top <ArrowUpRight size={14} /></a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Cashmere Events</span><span>Made for the in-between moments.</span></div></footer>
    </div>
  );
}
