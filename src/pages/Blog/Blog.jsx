import Hero from '../../components/Hero/Hero';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import blogs from '../../data/blogs.json';
import './Blog.css';

function Blog() {
  useScrollAnimation();
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  return (
    <div className="blog-page">
      <Hero
        title="Our Blog"
        subtitle="Digital marketing insights, tips, and strategies to help your business thrive"
      />

      <section className="blog-section">
        <div className="container">
          <div className="blog-filters animate-on-scroll fade-in-up">
            {categories.map(category => (
              <button key={category} className="filter-button">
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={blog.id} className={`animate-on-scroll fade-in-up stagger-${(index % 3) + 1}`}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
