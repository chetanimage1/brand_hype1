import Banner from '../../components/Banner/Banner';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import faq from '../../data/faq.json';
import './Contact.css';

function Contact() {
  useScrollAnimation();

  const bannerSlides = [
    {
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Get In Touch',
      subtitle: "Let's discuss how we can help grow your business"
    },
    {
      image: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Start Your Journey',
      subtitle: 'Schedule a free consultation and discover your growth potential'
    },
    {
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Partner With Us',
      subtitle: 'Join hundreds of businesses achieving remarkable results'
    }
  ];

  return (
    <div className="contact-page">
      <Banner slides={bannerSlides} />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container animate-on-scroll fade-in-left">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Your Company" />
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select>
                    <option>Select a service</option>
                    <option>SEO</option>
                    <option>Social Media Marketing</option>
                    <option>Google Ads</option>
                    <option>Content Marketing</option>
                    <option>Email Marketing</option>
                    <option>Web Design</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Tell us about your project"></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-container animate-on-scroll fade-in-right">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="info-item">
                  <h3>Email</h3>
                  <p>info@digitalagency.com</p>
                </div>
                <div className="info-item">
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
                <div className="info-item">
                  <h3>Address</h3>
                  <p>123 Marketing Street<br />City, State 12345</p>
                </div>
                <div className="info-item">
                  <h3>Hours</h3>
                  <p>Monday - Friday<br />9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section gray-bg">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faq.map((item, index) => (
              <div key={item.id} className={`faq-item animate-on-scroll fade-in-up stagger-${(index % 4) + 1}`}>
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
