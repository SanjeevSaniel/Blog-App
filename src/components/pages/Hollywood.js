import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const Hollywood = () => {
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  async function fetchData(api, setter) {
    let response = await axios.get(api);
    let data = await response.data;
    setter(data);
  }

  useEffect(() => {
    fetchData(
      "https://prepbytes-blog-app-server.herokuapp.com/api/Hollywood.json",
      setArticles
    );
  }, [articles]);

  useEffect(() => {
    fetchData(
      "https://prepbytes-blog-app-server.herokuapp.com/api/HollywoodAds.json",
      setAds
    );
  }, [ads]);

  useEffect(() => {
    fetchData(
      "https://prepbytes-blog-app-server.herokuapp.com/api/HollywoodTopPosts.json",
      setTopPosts
    );
  }, [topPosts]);

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
