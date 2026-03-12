import Hero from '../../components/Hero/Hero';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import portfolio from '../../data/portfolio.json';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <Hero
        title="Our Portfolio"
        subtitle="See how we've helped businesses achieve remarkable growth"
      />

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolio.map(project => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section gray-bg">
        <div className="container">
          <div className="cta-box">
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
