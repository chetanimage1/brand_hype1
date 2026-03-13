import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './BlogDetail.css';

function BlogDetail() {
  useScrollAnimation();
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <p>Blog post not found.</p>
          <button onClick={() => navigate('/blog')}>Back to Blog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-header">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      </div>

      <div className="container">
        <article className="blog-detail-content">
          <div className="blog-detail-meta animate-on-scroll fade-in-up">
            <span className="detail-category">{blog.category}</span>
            <span className="detail-read-time">{blog.readTime}</span>
            <span className="detail-date">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          <h1 className="blog-detail-title animate-on-scroll fade-in-up">
            {blog.title}
          </h1>

          <div className="blog-detail-author animate-on-scroll fade-in-up">
            <p>By <strong>{blog.author}</strong></p>
          </div>

          <div className="blog-detail-body animate-on-scroll fade-in-up">
            <p>{blog.excerpt}</p>
            <p>
              This comprehensive guide explores the key strategies and tactics needed to succeed in {blog.category.toLowerCase()}.
              Whether you're just starting out or looking to optimize your existing efforts, these insights will help you achieve measurable results.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Focus on data-driven decision making and continuous testing</li>
              <li>Align your strategy with your business goals and target audience</li>
              <li>Leverage tools and automation to scale your efforts efficiently</li>
              <li>Monitor metrics regularly and adjust your approach based on performance</li>
              <li>Stay updated with industry trends and best practices</li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              The first step in any successful campaign is understanding your baseline metrics and setting clear objectives.
              Take time to audit your current situation and identify opportunities for improvement.
            </p>

            <h2>Final Thoughts</h2>
            <p>
              Success in digital marketing requires persistence, creativity, and a willingness to adapt.
              By implementing these strategies and staying committed to your goals, you'll be well-positioned to achieve remarkable results.
            </p>
          </div>

          <div className="blog-detail-cta animate-on-scroll fade-in-up">
            <h2>Ready to Implement These Strategies?</h2>
            <p>Let's work together to create a customized plan for your business.</p>
            <a href="/contact" className="cta-button">Schedule a Consultation</a>
          </div>
        </article>

        <div className="blog-detail-back animate-on-scroll fade-in-up">
          <button onClick={() => navigate('/blog')} className="back-button">
            ← Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
