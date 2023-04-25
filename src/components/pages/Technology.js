import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../common/ArticlesVertical/ArticlesVertical";
import { URLContext } from "../../App";

const Technology = () => {
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
    fetchData(`${URL}/TechnologyArticles`, setArticles);
    fetchData(`${URL}/TechnologyAds`, setAds);
    fetchData(`${URL}/TechnologyTopPosts`, setTopPosts);
  }, [articles, ads, topPosts, URL]);

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
