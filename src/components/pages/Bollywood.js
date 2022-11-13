import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import Photo from "../Images/Brahmastra.jpg";

const Bollywood = () => {
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
      "https://prepbytes-blog-app-server.herokuapp.com/api/Bollywood.json",
      setArticles
    );
  }, [articles]);

  useEffect(() => {
    fetchData(
      "https://prepbytes-blog-app-server.herokuapp.com/api/BollywoodAds.json",
      setAds
    );
  }, [ads]);

  useEffect(() => {
    fetchData(
      "https://prepbytes-blog-app-server.herokuapp.com/api/BollywoodTopPosts.json",
      setTopPosts
    );
  }, [topPosts]);

  return (
    <div className="Bollywood">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        topPosts={topPosts}
        articleLink="https://www.google.com/search?client=firefox-b-d&q=Brahmastra"
        category="Bollywood"
        photo={Photo}
        title="Brahmastra Part One: Shiva"
        date="September 9 2022"
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Bollywood;
