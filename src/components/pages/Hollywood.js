import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import { URLContext } from "../../App";

const Hollywood = () => {
  const URL = useContext(URLContext);

  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  async function fetchData(api, setter) {
    let response = await axios.get(api);
    let data = await response.data;
    setter(data);
  }

  useEffect(() => {
    fetchData(`${URL}HollywoodArticles`, setArticles);
    fetchData(`${URL}HollywoodAds`, setAds);
    fetchData(
      "https://good-blue-leopard-gown.cyclic.app/HollywoodTopPosts",
      setTopPosts
    );
  }, [articles, ads, topPosts, URL]);

  return (
    <div className="Hollywood">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        articleLink="https://www.pexels.com/photo/hollywood-sign-2695679/"
        category="Hollywood"
        photo="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Los Angeles, CA, Verenigde Staten"
        date="May 7 2022"
        topPosts={topPosts}
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Hollywood;
