import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {'⭐'.repeat(testimonial.rating)}
      </div>
      <p className="testimonial-text">{testimonial.testimonial}</p>
      <div className="testimonial-author">
        <img src={testimonial.image} alt={testimonial.name} className="author-image" />
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-position">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
