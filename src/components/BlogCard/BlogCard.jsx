import { useNavigate } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="blog-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category">{blog.category}</span>
          <span className="blog-read-time">{blog.readTime}</span>
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <div className="blog-footer">
          <span className="blog-author">By {blog.author}</span>
          <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
