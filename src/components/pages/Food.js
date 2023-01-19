import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../common/ArticlesVertical/ArticlesVertical";
import { URLContext } from "../../App";

const Food = () => {
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
    fetchData(`${URL}FoodArticles`, setArticles);
    fetchData(`${URL}FoodAds`, setAds);
    fetchData(`${URL}FoodTopPosts`, setTopPosts);
  }, [articles, ads, topPosts, URL]);

  if (!articles || !ads || (!articles && !ads)) return null;

  return (
    <div className="Food">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        articleLink="https://www.inspiredtaste.net/24412/cocoa-brownies-recipe/"
        category="Food"
        photo="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Choco Brownies"
        date="October 5 2022"
        topPosts={topPosts}
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Food;
