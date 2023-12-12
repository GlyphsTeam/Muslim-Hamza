import useAxios from "../hooks/useAxios";
import MainBlog from "../components/blog/MainBlog";
import BlogCards from "../components/blog/BlogSection";
import EventCard from "../components/blog/EventSection";
import NewsSection from "../components/blog/NewsSection";
import { useDispatch } from 'react-redux'
import { setBlog } from '../redux/Blog';
function BlogPage() {
  const dispatch = useDispatch();
  const url = "blogs";
  const [Data] = useAxios(url);
  const blogData = Data?.data;
  dispatch(setBlog(blogData))
  return (
    <div>
      <MainBlog />
      <BlogCards />
      <EventCard />
      <NewsSection />
    </div>
  );
}

export default BlogPage;
