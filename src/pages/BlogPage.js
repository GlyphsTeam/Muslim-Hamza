import useAxios from "../hooks/useAxios";
import MainBlog from "../components/blog/MainBlog";
import BlogCards from "../components/blog/BlogSection";
import EventCard from "../components/blog/EventSection";
import NewsSection from "../components/blog/NewsSection";

function BlogPage() {
  const url = "blogs";
  const [Data] = useAxios(url);
  const blogData = Data?.data;
  return (
    <div>
      <MainBlog blogData={blogData} />
      <BlogCards blogData={blogData} />
      <EventCard blogData={blogData} />
      <NewsSection blogData={blogData} />
    </div>
  );
}

export default BlogPage;
