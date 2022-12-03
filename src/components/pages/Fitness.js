import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const Fitness = () => {
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
      "https://good-blue-leopard-gown.cyclic.app/FitnessArticles",
      setArticles
    );
  }, [articles]);

  useEffect(() => {
    fetchData("https://good-blue-leopard-gown.cyclic.app/FitnessAds", setAds);
  }, [ads]);

  useEffect(() => {
    fetchData(
      "https://good-blue-leopard-gown.cyclic.app/FitnessTopPosts",
      setTopPosts
    );
  }, [topPosts]);

  return (
    <div className="Fitness">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        articleLink="https://www.healthline.com/health/fitness/10-ways-to-move-more"
        category="Fitness"
        photo="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="10 Ways to Move More in Everyday Life"
        date="October 9 2022"
        topPosts={topPosts}
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Fitness;
