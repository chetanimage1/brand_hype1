import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-image-container">
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
      <div className="service-content">
        <div className="service-icon">{service.icon}</div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <Link to={`/services/${service.id}`} className="service-button">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
