import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import blogs from '../../data/blogs.json';
import './Blog.css';

function Blog() {
  useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  const bannerSlides = [
    {
      image: 'https://images.pexels.com/photos/3912951/pexels-photo-3912951.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Our Blog',
      subtitle: 'Digital marketing insights, tips, and strategies to help your business thrive'
    },
    {
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Expert Insights',
      subtitle: 'Stay ahead with the latest trends and best practices in digital marketing'
    },
    {
      image: 'https://images.pexels.com/photos/4103320/pexels-photo-4103320.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Learn & Grow',
      subtitle: 'Actionable strategies from industry experts to elevate your marketing game'
    }
  ];

  return (
    <div className="blog-page">
      <Banner slides={bannerSlides} />

      <section className="blog-section">
        <div className="container">
          <div className="blog-filters animate-on-scroll fade-in-up">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredBlogs.map((blog, index) => (
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
