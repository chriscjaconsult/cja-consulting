/* CJA Consulting — section components
   Each section reads from TweaksContext to apply runtime overrides.
*/

// ─────────────────────────────────────────────────────────────
// Headline variants — three takes on the lead position
// ─────────────────────────────────────────────────────────────
const HEADLINES = [
{
  eyebrow: 'Professional services advisory',
  title:
  <>
        Decision clarity.<br />
        Commercial direction.<br />
        <span className="accent">A credible path forward.</span>
      </>,

  lede: 'Senior, judgement-led strategic advisory for professional services leaders and founder- or partner-led businesses where growth has stalled or become harder.'
},
{
  eyebrow: 'Senior strategic advisory',
  title:
  <>
        <span className="accent">Senior judgement,</span><br />
        for the moments when<br />
        growth has become harder.
      </>,

  lede: 'A structured, decision-led practice for law firms, accountancy and tax practices, consultancies and other expert-led businesses. The work sits upstream of execution — direction first, document second.'
},
{
  eyebrow: 'A practice, not a pitch deck',
  title:
  <>
        Decisions, not decks.<br />
        <span className="accent">The path forward,</span><br />
        decided here.
      </>,

  lede: 'The businesses I work with are not failing. They are capable, credible and busy. CJA Consulting creates the protected thinking space, structure and senior challenge that turns overloaded judgement into commercial direction.'
}];


// ─────────────────────────────────────────────────────────────
// CTA labels — primary action destinations
// ─────────────────────────────────────────────────────────────
const CTA_LABELS = {
  gfd: { label: 'Request a Growth Focus Day', sub: '1 day · concentrated decisions', short: 'Growth Focus Day' },
  clarity: { label: 'Book a Clarity Session', sub: '2 hours · structured diagnostic', short: 'Clarity Session' },
  call: { label: 'Schedule an introductory call', sub: '30 minutes · no obligation', short: 'Intro call' }
};

// ─────────────────────────────────────────────────────────────
// SiteHeader
// ─────────────────────────────────────────────────────────────
const SiteHeader = () => {
  const t = useT();
  const cta = CTA_LABELS[t.primaryCta];
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#top">
          <img src={window.__resources.logoWide} alt="CJA Consulting" />
        </a>
        <nav>
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cta">
          <a className="btn btn-ghost btn-sm" href="#contact">Get in touch</a>
          <a className="btn btn-primary btn-sm" href="#contact">{cta.short}<span className="arrow">→</span></a>
        </div>
      </div>
    </header>);

};

// ─────────────────────────────────────────────────────────────
// Hero — variant- and tweak-driven layout
// ─────────────────────────────────────────────────────────────
const Hero = ({ variant }) => {
  const t = useT();
  const layout = t.heroLayout === 'auto' ?
  variant === 'B' ? 'split' : 'typographic' :
  t.heroLayout;
  const h = HEADLINES[t.headlineVariant] || HEADLINES[0];
  const cta = CTA_LABELS[t.primaryCta];
  const isDark = layout === 'dark';

  return (
    <section
      id="top"
      className={`hero section hero--${layout}`}>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{h.eyebrow}</div>
            <h1 className="h-display">{h.title}</h1>
            <p className="lede" style={{ marginTop: 28, marginBottom: 0, maxWidth: '58ch' }}>
              {h.lede}
            </p>
            <div className="hero-actions">
              <a className={`btn ${isDark ? 'btn-on-dark' : 'btn-primary'} btn-lg`} href="#contact">
                {cta.label}<span className="arrow">→</span>
              </a>
              <a className={`btn ${isDark ? 'btn-on-dark btn-ghost' : 'btn-ghost'} btn-lg`} href="#approach">
                Read the approach
              </a>
            </div>
            <div className="meta-bar">
              <div>
                <strong>Founder-led</strong>
                <span>Chris Adams · 20+ years</span>
              </div>
              <div>
                <strong>Focused on Decisions</strong>
                <span>Strategic and Decision-led</span>
              </div>
              <div>
                <strong>UAE · Middle East · UK USA · International</strong>
                <span>Including Middle East market entry</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            {layout === 'split' ?
            <div className="portrait-wrap">
                <div className="hero-portrait">
                  <img src={window.__resources.heroPortrait} alt="Chris Adams" />
                </div>
              </div> :

            <div className="hero-mark">
                <img src={window.__resources.iconMark} alt="" />
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

};

// ─────────────────────────────────────────────────────────────
// Problem
// ─────────────────────────────────────────────────────────────
const Problem = ({ variant }) => {
  const lean = [
  'you’re deeply involved in the day-to-day',
  'decision-making is overloaded at the top',
  'you have no protected space to think clearly',
  'you carry most of the strategic thinking yourself',
  'too many initiatives are running in parallel',
  'your BD and marketing activity does not reliably convert'];

  const full = [
  ...lean,
  'your team’s bandwidth does not match your ambition',
  'your plan has quietly drifted from reality'];

  const points = variant === 'B' ? full : lean;
  return (
    <section id="problem" className="section section--paper">
      <div className="container">
        <div className="problem-grid">
          <div>
            <div className="eyebrow">The core problem</div>
            <h2 className="h-section">The businesses we work with are not failing. They are capable, credible and busy.

            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 28, color: 'var(--fg-2)', maxWidth: 'none' }}>
              Growth has stalled, or become harder, because:
            </p>
            <ul className="prob-list" data-comment-anchor="2f90eeb459-ul-180-13">
              {points.map((p, i) =>
              <li key={i}><span className="dot"></span><span>{p}</span></li>
              )}
            </ul>
            <p className="problem-summary">This is not a motivation problem. It is a focus, decision-load and structural overload problem. It responds to senior, structured advisory work.

            </p>
          </div>
        </div>
      </div>
    </section>);

};

// ─────────────────────────────────────────────────────────────
// Approach
// ─────────────────────────────────────────────────────────────
const Approach = () => {
  const steps = [
  { n: '01', icon: 'search', title: 'Diagnose the constraint', body: 'Identify what is actually preventing growth and the cost of that constraint.' },
  { n: '02', icon: 'scale', title: 'Surface trade-offs', body: 'Make explicit decisions about what matters now, and what does not.' },
  { n: '03', icon: 'compass', title: 'Define direction', body: 'Clarify where growth will come from: target relationships, partners and offers.' },
  { n: '04', icon: 'route', title: 'Sequence the work', body: 'Translate decisions into a 90-day plan or a 12-month roadmap.' },
  { n: '05', icon: 'shield-check', title: 'Establish ownership', body: 'Decision rights, accountability and a cadence that prevents drift.' }];

  return (
    <section id="approach" className="section">
      <div className="container">
        <div className="approach-intro">
          <div className="eyebrow">The approach</div>
          <h2 className="h-section">A decision-led model. Structured, repeatable, and conversational.</h2>
          <p className="lede" style={{ marginTop: 20, maxWidth: '64ch' }}>The work we do together converts overloaded thinking into clear commercial decisions and a practical path forward. Business leaders often have the answers in their heads - the issue is creating the space and structure to surface them, decide and move.

          </p>
        </div>
        <div className="approach-grid">
          {steps.map((s) =>
          <div className="approach-step" key={s.n}>
              <div className="step-head">
                <span className="step-n">{s.n}</span>
                <i data-lucide={s.icon}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

// ─────────────────────────────────────────────────────────────
// Services — named offers, on dark
// ─────────────────────────────────────────────────────────────
const Services = ({ variant }) => {
  const all = [
  { tag: 'Diagnostic', name: 'Clarity Session', body: 'A focused diagnostic starting point to identify what is really constraining growth and define the next step.', meta: '2 hours' },
  { tag: 'Short engagement', name: 'QuickStart', body: 'Structured strategic work where the immediate need is clarity on priorities, trade-offs and a credible short-term path.', meta: '2–3 weeks' },
  { tag: 'Intensive', name: 'Growth Focus Day', body: 'An intensive working session for clarity, decisions and momentum where concentrated strategic time is required.', meta: '1 day' },
  { tag: 'Roadmap', name: 'Commercial Direction & Growth Roadmap', body: 'A broader engagement where a fuller reset, clearer positioning or a longer-range growth roadmap is required.', meta: '6–10 weeks' },
  { tag: 'Ongoing', name: 'Guardian Oversight', body: 'Ongoing advisory and governance support to maintain focus, sustain alignment and prevent drift during implementation.', meta: 'Monthly' },
  { tag: 'Bespoke', name: 'Commercial Strategy Advisory', body: 'A bespoke senior advisory engagement for established professional services firms with a clear strategic ambition — market entry, new practice area development or international expansion. Scoped individually.', meta: 'Bespoke' },
  { tag: 'Fractional', name: 'Fractional Commercial Leadership', body: 'A retained, embedded senior commercial leadership arrangement for firms that need active commercial direction rather than advisory oversight. Suited to firms that need the experience of a senior Commercial Director, CMO or CRO without a full-time hire.', meta: 'Retained · min 3 months' }
];

  const lean = all.slice(0, 3);
  const offers = variant === 'B' ? all : lean;

  return (
    <section id="services" className="section section--ink">
      <div className="container">
        <div className="services-head">
          <div style={{ maxWidth: 620 }}>
            <div className="eyebrow">OUR SERVICES</div>
            <h2 className="h-section">A structured advisory system, not a set of disconnected services.</h2>
          </div>
          <a className="btn btn-on-dark btn-ghost" href="#contact">
            Get in Touch<span className="arrow">→</span>
          </a>
        </div>
        <div className="offers-grid">
          {offers.map((o) =>
          <div className="offer-card" key={o.name}>
              <div className="offer-meta">
                <span className="offer-tag">{o.tag}</span>
                <span className="offer-time">{o.meta}</span>
              </div>
              <h3>{o.name}</h3>
              <p>{o.body}</p>
              <a href="#contact" className="offer-link">Learn more <span className="arrow">→</span></a>
            </div>
          )}
        </div>
      </div>
    </section>);

};

// ─────────────────────────────────────────────────────────────
// Middle East — inline strip (not a full section)
// ─────────────────────────────────────────────────────────────
const MeStrip = () =>
<div className="me-strip">
    <div className="container">
      <span className="me-tag">SPECIALISM - THE MIDDLE EAST</span>
      <p className="me-body">
        <strong>Middle East market entry for UK, US and international firms.</strong> Combining regional knowledge and professional services expertise — including, where appropriate, senior relationship representation in market until you are established with your own people on the ground.
      </p>
      <a href="#services" className="me-link">How this works →</a>
    </div>
  </div>;


// ─────────────────────────────────────────────────────────────
// Testimonial
// ─────────────────────────────────────────────────────────────
const Testimonial = () =>
<section id="about" className="section section-tight section--mist">
    <div className="container">
      <div className="quote-block">
        <div className="quote-mark">“</div>
        <blockquote>"Chris brought a clear, practical and structured approach to our early marketing and business development planning. He was a valuable sounding board as we considered market entry, positioning and commercial growth opportunities, particularly in the UAE and wider international market. I would recommend Chris to founders and professional services leaders looking for strategic clarity, commercial focus and practical support in developing their growth plans".

      </blockquote>
        <div className="quote-by">
          <div className="quote-ava">ND</div>
          <div>
            <div className="quote-name">Nick Davies · Managing Partner</div>
            <div className="quote-title">SBL International</div>
          </div>
        </div>
      </div>
    </div>
  </section>;


// ─────────────────────────────────────────────────────────────
// Inline CTA — slim mid-page band that points to the contact form
// ─────────────────────────────────────────────────────────────
const InlineCTA = () => {
  const t = useT();
  const cta = CTA_LABELS[t.primaryCta];
  return (
    <section className="inline-cta">
      <div className="container">
        <div className="inline-cta-grid">
          <div>
            <div className="inline-cta-eyebrow">The next step</div>
            <h3 className="inline-cta-title">
              Bring a stalled growth picture into commercial clarity — in a single, structured working session.
            </h3>
          </div>
          <div className="inline-cta-actions">
            <a className="btn btn-primary btn-lg" href="#contact">
              {cta.label}<span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#services">See all engagements</a>
          </div>
        </div>
      </div>
    </section>);

};

// ─────────────────────────────────────────────────────────────
// Contact — closing section with copy + working form
// ─────────────────────────────────────────────────────────────
const COPY_BY_CTA = {
  gfd: {
    eyebrow: 'Start with a working session',
    title: 'Most engagements begin with a Growth Focus Day.',
    body: 'A single intensive day for clarity, decisions and momentum. Structured working time with senior challenge. The output is direction, not a deck.',
    bullets: [
    { icon: 'calendar', text: '1 day · video or in-person' },
    { icon: 'users', text: 'Founder / managing partner + key leadership' },
    { icon: 'map-pin', text: 'Dubai, London, or remote' }],

    formTitle: 'Request a Growth Focus Day',
    formIntro: 'A short note is enough to start. I will respond personally within one working day.',
    submitLabel: 'Request a Growth Focus Day'
  },
  clarity: {
    eyebrow: 'Begin with clarity',
    title: 'Most engagements begin with a Clarity Session.',
    body: 'A focused diagnostic to identify what is really constraining growth, surface the real trade-offs, and define the next step. No proposal slides. No pitch. Two hours of structured conversation.',
    bullets: [
    { icon: 'calendar', text: '2 hours · video or in-person' },
    { icon: 'message-circle', text: 'Structured conversation, not a sales call' },
    { icon: 'map-pin', text: 'Dubai, London, or remote' }],

    formTitle: 'Book a Clarity Session',
    formIntro: 'A short note is enough to start. I will respond personally within one working day.',
    submitLabel: 'Book a Clarity Session'
  },
  call: {
    eyebrow: 'A short conversation',
    title: 'A 30-minute introductory call to see if there is a fit.',
    body: 'A short, no-obligation conversation. If there is a fit, the next step is usually a Clarity Session or a Growth Focus Day. If there is not, you will hear that too.',
    bullets: [
    { icon: 'calendar', text: '30 minutes · video' },
    { icon: 'shield-check', text: 'No obligation, no proposal' },
    { icon: 'map-pin', text: 'Time zones across UAE, UK, US' }],

    formTitle: 'Schedule an introductory call',
    formIntro: 'A short note is enough to start. I will respond personally within one working day.',
    submitLabel: 'Schedule the call'
  }
};

const ContactForm = ({ copy }) => {
  const [state, setState] = React.useState({
    name: '', firm: '', role: '', email: '', phone: '', message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const set = (k) => (e) => setState((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!state.name.trim()) errs.name = 'Please add your name.';
    if (!state.firm.trim()) errs.firm = 'Please add your firm.';
    if (!state.email.trim()) errs.email = 'Please add your email.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) errs.email = 'That does not look like a valid email.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success">
        <i data-lucide="check-circle-2" className="contact-success-icon"></i>
        <h3>Thank you, {state.name.split(' ')[0] || 'and welcome'}.</h3>
        <p>
          Your note has been received. I will respond personally, usually within one working day, to schedule a time and confirm the next step.
        </p>
        <p className="contact-success-meta">
          If urgent, message directly via <a href="https://wa.me/971504206729">WhatsApp</a> or email <a href="mailto:info@cjaconsult.com">info@cjaconsult.com</a>.
        </p>
      </div>);

  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="contact-form-head">
        <h3>{copy.formTitle}</h3>
        <p>{copy.formIntro}</p>
      </div>
      <div className="form-row">
        <label className={`field ${errors.name ? 'field--err' : ''}`}>
          <span>Name</span>
          <input type="text" value={state.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" />
          {errors.name && <span className="field-err">{errors.name}</span>}
        </label>
        <label className={`field ${errors.firm ? 'field--err' : ''}`}>
          <span>Firm</span>
          <input type="text" value={state.firm} onChange={set('firm')} placeholder="Your firm or practice" autoComplete="organization" />
          {errors.firm && <span className="field-err">{errors.firm}</span>}
        </label>
      </div>
      <div className="form-row">
        <label className="field">
          <span>Role <em>optional</em></span>
          <input type="text" value={state.role} onChange={set('role')} placeholder="Managing partner, founder, MD…" />
        </label>
        <label className={`field ${errors.email ? 'field--err' : ''}`}>
          <span>Email</span>
          <input type="email" value={state.email} onChange={set('email')} placeholder="you@firm.com" autoComplete="email" />
          {errors.email && <span className="field-err">{errors.email}</span>}
        </label>
      </div>
      <label className="field">
        <span>Phone or WhatsApp <em>optional</em></span>
        <input type="tel" value={state.phone} onChange={set('phone')} placeholder="+44, +971, or your local prefix" autoComplete="tel" />
      </label>
      <label className="field">
        <span>A short note on your situation <em>optional</em></span>
        <textarea rows="4" value={state.message} onChange={set('message')} placeholder="What is constraining growth? What would 'clarity' look like for you?"></textarea>
      </label>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg">
          {copy.submitLabel}<span className="arrow">→</span>
        </button>
        <p className="form-fine">
          No marketing list, no automation. A short, personal response within one working day.
        </p>
      </div>
    </form>);

};

const Contact = () => {
  const t = useT();
  const copy = COPY_BY_CTA[t.primaryCta];

  return (
    <section id="contact" className="section section--ink">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">{copy.eyebrow}</div>
            <h2 className="h-section">{copy.title}</h2>
            <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, maxWidth: 520, color: 'rgba(255,255,255,0.78)' }}>
              {copy.body}
            </p>
            <div className="contact-meta">
              {copy.bullets.map((b, i) =>
              <div key={i}><i data-lucide={b.icon}></i><span>{b.text}</span></div>
              )}
            </div>
            <div className="contact-divider"></div>
            <div className="contact-direct">
              <div className="contact-direct-eyebrow">Direct</div>
              <a href="https://wa.me/971504206729" className="contact-direct-row">
                <i data-lucide="message-circle"></i>
                <span><strong>WhatsApp</strong> · +971 50 420 6729</span>
              </a>
              <a href="mailto:info@cjaconsult.com" className="contact-direct-row">
                <i data-lucide="mail"></i>
                <span><strong>Email</strong> · info@cjaconsult.com</span>
              </a>
              <a href="https://www.linkedin.com/in/chrisadamsdxb/" className="contact-direct-row">
                <i data-lucide="briefcase"></i>
                <span><strong>LinkedIn</strong> · /in/chrisadamsdxb</span>
              </a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <iframe
              id="JotFormIFrame-261355382415052"
              title="CJA Consulting — Enquiry"
              onLoad={() => {
                if (!window._jfListener) {
                  window._jfListener = true;
                  window.addEventListener('message', function(e) {
                    if (typeof e.data !== 'string') return;
                    var args = e.data.split(':');
                    var ifr = document.getElementById('JotFormIFrame-' + args[args.length-1]) || document.getElementById('JotFormIFrame-261355382415052');
                    if (!ifr) return;
                    if (args[0] === 'setHeight') { ifr.style.height = (parseInt(args[1]) + 40) + 'px'; }
                  }, false);
                }
              }}
              allowTransparency={true}
              allowFullScreen={true}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/261355382415052?isIframeEmbed=1"
              frameBorder="0"
              style={{ minWidth: '100%', maxWidth: '100%', height: 1400, border: 'none', borderRadius: 8 }}
              scrolling="yes"
            />
          </div>
        </div>
      </div>
    </section>);

};

// Keep the old name as an alias so existing references work.
const FinalCTA = Contact;

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
const SiteFooter = () =>
<footer className="site-footer">
    <div className="container">
      <div className="grid">
        <div>
          <img src={window.__resources.iconMark} alt="CJA Consulting" style={{ height: 44, marginBottom: 20, display: 'block' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
            Senior, judgement-led strategic advisory for professional services firms and expert-led businesses.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, maxWidth: 320, marginTop: 16 }}>
            Based at The Els Club, Dubai Sports City. Working across the UAE, UK and internationally.
          </p>
        </div>
        <div>
          <h4>Engagements</h4>
          <a href="#services">Clarity Session</a>
          <a href="#services">QuickStart</a>
          <a href="#services">Growth Focus Day</a>
          <a href="#services">Commercial Direction & Growth Roadmap</a>
          <a href="#services">Commercial Strategy Advisory</a>
          <a href="#services">Fractional Commercial Leadership</a>
          <a href="#services">Guardian Oversight</a>
        </div>
        <div>
          <h4>Practice</h4>
          <a href="#approach">Approach</a>
          <a href="#contact">Middle East market entry</a>
          <a href="#problem">Who I work with</a>
          <a href="#about">About Chris Adams</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="mailto:info@cjaconsult.com">info@cjaconsult.com</a>
          <a href="https://wa.me/971504206729">WhatsApp · +971 50 420 6729</a>
          <a href="https://www.linkedin.com/in/chrisadamsdxb/">LinkedIn</a>
          <a href="https://www.muhami.ae">Muhami</a>
        </div>
      </div>
      <div className="legal">
        <div>© 2026 CJA Consulting LLC-FZ · All rights reserved</div>
        
      </div>
    </div>
  </footer>;


Object.assign(window, {
  SiteHeader, Hero, Problem, Approach, Services, MeStrip, Testimonial, FinalCTA, Contact, InlineCTA, ContactForm, SiteFooter,
  HEADLINES, CTA_LABELS, COPY_BY_CTA
});