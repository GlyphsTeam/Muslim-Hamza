import MainShowBlog from "../components/showBlog/MainShowBlog";
import ShowBlogParagraph from "../components/showBlog/ShowBlogParagraph";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import InterestedSection from "../components/common/interested/InterestedSection";

function ShowBlogPage() {
  const { id } = useParams();
  const url = `show-blog/${id}`;
  const [Data] = useAxios(url);
  const showBlogData = Data?.data?.blog;
  console.log("ShowBlog>>><<<",showBlogData)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            
            <MainShowBlog showBlogData={showBlogData} />
            <ShowBlogParagraph showBlogData={showBlogData} />
          </div>
        </div>
      </div>
      <br /> <br />
      <InterestedSection type="blog" data={showBlogData?.similar} />
    </>
  );
}

export default ShowBlogPage;
