import Hero from '../../components/Hero/Hero';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import portfolio from '../../data/portfolio.json';
import './Portfolio.css';

function Portfolio() {
  useScrollAnimation();

  return (
    <div className="portfolio-page">
      <Hero
        title="Our Portfolio"
        subtitle="See how we've helped businesses achieve remarkable growth"
      />

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={project.id} className={`animate-on-scroll scale-in stagger-${(index % 2) + 1}`}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section gray-bg">
        <div className="container">
          <div className="cta-box animate-on-scroll fade-in-up">
            <h2>Ready to Achieve Similar Results?</h2>
            <p>Let's discuss how we can help grow your business</p>
            <a href="/contact" className="cta-button">Get In Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
