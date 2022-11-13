import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

// const ads = require("../API_Data/HollywoodAds.json");
// const articles = require("../API_Data/HollywoodArticles.json");

const Hollywood = () => {
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    axios.get("./api/Hollywood.json").then((response) => {
      setArticles(response.data);
    });
  }, [articles]);

  useEffect(() => {
    axios.get("/api/HollywoodAds.json").then((response) => {
      setAds(response.data);
    });
  }, [ads]);

  useEffect(() => {
    axios.get("/api/HollywoodTopPosts.json").then((response) => {
      setTopPosts(response.data);
    });
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
