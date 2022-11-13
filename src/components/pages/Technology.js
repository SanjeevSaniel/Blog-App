import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

// const ads = require("../API_Data/TechnologyAds.json");
// const articles = require("../API_Data/TechnologyArticles.json");

const Technology = () => {
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    axios.get("./api/Technology.json").then((response) => {
      setArticles(response.data);
    });
  }, [articles]);

  useEffect(() => {
    axios.get("/api/TechnologyAds.json").then((response) => {
      setAds(response.data);
    });
  }, [ads]);

  useEffect(() => {
    axios.get("/api/TechnologyTopPosts.json").then((response) => {
      setTopPosts(response.data);
    });
  }, [topPosts]);

  return (
    <div className="Technology">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        articleLink="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
        category="Internet"
        photo="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"
        title="Microsoft Teams users are using it"
        date="September 9 2022"
        topPosts={topPosts}
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Technology;
