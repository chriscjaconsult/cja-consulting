/* CJA Consulting — LandingPage composer + Tweaks context
   Composes section components in user-tweakable order, with
   variant ('A' restrained vs 'B' confident) controlling defaults.
*/

const TweaksCtx = React.createContext({});
// Renamed from useTweaks to avoid colliding with the tweaks-panel hook on window.
const useT = () => React.useContext(TweaksCtx);

// Section order presets — each is a list of section keys.
// Sections that always sit at the top/bottom: header, hero, footer.
const ORDER_PRESETS = {
  'standard':       ['problem', 'approach', 'inline-cta', 'services', 'me', 'testimonial', 'contact'],
  'problem-first':  ['problem', 'services', 'inline-cta', 'approach', 'me', 'testimonial', 'contact'],
  'services-first': ['services', 'me', 'inline-cta', 'problem', 'approach', 'testimonial', 'contact'],
};

const SECTION_MAP = {
  problem:      (props) => <Problem     {...props} />,
  approach:     (props) => <Approach    {...props} />,
  services:     (props) => <Services    {...props} />,
  me:           (props) => <MeStrip     {...props} />,
  testimonial:  (props) => <Testimonial {...props} />,
  'inline-cta': (props) => <InlineCTA   {...props} />,
  contact:      (props) => <Contact     {...props} />,
};

// LandingPage renders the full marketing page for a given variant.
// Variant 'A' = restrained / typographic / lean. 'B' = confident / portrait-led / fuller.
const LandingPage = ({ variant = 'A' }) => {
  const t = useT();
  // Variant default accent intensity, unless tweaks override.
  const intensity = t.accentIntensity === 'auto'
    ? (variant === 'B' ? 'standard' : 'subtle')
    : t.accentIntensity;
  const order = ORDER_PRESETS[t.sectionOrder] || ORDER_PRESETS.standard;

  React.useEffect(() => {
    const id = window.setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
    return () => window.clearTimeout(id);
  });

  return (
    <div className={`variant-chrome acc-${intensity}`} data-variant={variant}>
      <SiteHeader />
      <main>
        <Hero variant={variant} />
        {order.map((key) => {
          const C = SECTION_MAP[key];
          if (!C) return null;
          return <React.Fragment key={key}>{C({ variant })}</React.Fragment>;
        })}
      </main>
      <SiteFooter />
    </div>
  );
};

Object.assign(window, { LandingPage, TweaksCtx, useT, ORDER_PRESETS });
