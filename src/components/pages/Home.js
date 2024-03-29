import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ImageGallery from "../utilities/ImageGallery/ImageGallery";
import ArticlesHorizontal from "../common/ArticlesHorizontal/ArticlesHorizontal";
import ArticlesVertical from "../common/ArticlesVertical/ArticlesVertical";
import ImageSlideshow from "../ImageSlideShow/ImageSlideShow";
import LatestStories from "../common/LatestStories/LatestStories";

import { URLContext } from "../../App";

const home = {
  maxWidth: "auto",
};

const Home = () => {
  const URL = useContext(URLContext);

  const [articlesVertical, setArticlesVertical] = useState([]);
  const [articlesHorizontal, setArticlesHorizontal] = useState([]);
  const [images, setImages] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  async function fetchData(api, setter) {
    let response = await axios.get(api);
    let data = await response.data;
    setter(data);
  }

  useEffect(() => {
    fetchData(`${URL}/Articles`, setArticlesVertical);
  }, [articlesVertical, URL]);

  useEffect(() => {
    fetchData(`${URL}/HomeLatest`, setArticlesHorizontal);
  }, [articlesHorizontal, URL]);

  useEffect(() => {
    fetchData(`${URL}/HomeSlider`, setImages);
  }, [images, URL]);

  useEffect(() => {
    fetchData(`${URL}/HomeAds`, setAds);
  }, [ads, URL]);

  useEffect(() => {
    fetchData(`${URL}/HomeTopPosts`, setTopPosts);
  }, [topPosts, URL]);

  return (
    <div className="Home" style={home}>
      <ImageGallery />
      <ArticlesHorizontal articles={articlesHorizontal} />

      <ArticlesVertical
        articles={articlesVertical}
        ads={ads}
        articleLink="https://www.pexels.com/photo/woman-crossing-on-bridge-238631/"
        category="Travel"
        photo="https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?cs=srgb&dl=pexels-flo-maderebner-238631.jpg&fm=jpg"
        title="Tambon Nong Chaeng, Thailand"
        date="September 9 2022"
        topPosts={topPosts}
      />
      <ImageSlideshow images={images} />
      <LatestStories />
      <ScrollToTop className="scroll-arrow" color="#000000" smooth />
    </div>
  );
};

export default Home;
