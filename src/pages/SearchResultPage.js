import { useParams } from "react-router-dom";
import style from "../assets/style/searchResult/searchResultPage.module.css";
import SearchResultCard from "../components/searchResult/SearchResultsCard";
import useAxios from "../hooks/useAxios";

function SearchResultPage() {
  const { keyword } = useParams();
  const { type } = useParams();
  const url_search = type
    ? `search?keyword=${keyword}&type=${type}`
    : `search?keyword=${keyword}`;
    let path;
    if (type === "rent") {
      path = `/Show-Housing/${cardsData?.rents?.id}`;
    } else if (type === "job") {
      path = `/Show-Job/${cardsData?.jobs?.id}`;
    } else if (type === "blog") {
      path = `/Show-Blog/${cardsData?.blogs?.id}`;
    } else if (type === "store") {
      path = `/Shop-Profile/${cardsData?.stores?.id}`;
    }
  const [Data] = useAxios(url_search);
  const cardsData = Data?.data;
  

  return (
    <div className="container pt-4">
      <p>
        Search Result
        <span className={style.searchResultPageSpan}>"{keyword}"</span>{" "}
        <span> result property found</span>{" "}
      </p>

      <SearchResultCard url_search={url_search} cardsData={cardsData} type={type} path={path}/>
    </div>
  );
}

export default SearchResultPage;
