import { useNavigate } from 'react-router-dom';
import './PortfolioCard.css';

function PortfolioCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio', { state: { selectedProject: project } });
  };

  return (
    <div className="portfolio-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={project.image} alt={project.title} className="portfolio-image" />
      <div className="portfolio-content">
        <span className="portfolio-category">{project.category}</span>
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-client">{project.client}</p>
        <p className="portfolio-description">{project.description}</p>
        <div className="portfolio-results">
          {Object.entries(project.results).map(([key, value]) => (
            <div key={key} className="result-item">
              <span className="result-value">{value}</span>
              <span className="result-label">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
