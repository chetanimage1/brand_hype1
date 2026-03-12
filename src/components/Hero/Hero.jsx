import './Hero.css';

function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-cta">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
