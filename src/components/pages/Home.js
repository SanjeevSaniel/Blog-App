import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ImageGallery from "../ImageGallery/ImageGallery";
import ArticlesHorizontal from "../ArticlesHorizontal/ArticlesHorizontal";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import ImageSlideshow from "../ImageSlideShow/ImageSlideShow";
import LatestStories from "../LatestStories/LatestStories";

const Home = () => {
  const [articlesVertical, setArticlesVertical] = useState([]);
  const [articlesHorizontal, setArticlesHorizontal] = useState([]);
  const [images, setImages] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    axios.get("./api/Articles.json").then((response) => {
      setArticlesVertical(response.data);
    });
  }, [articlesVertical]);

  useEffect(() => {
    axios.get("./api/ArticlesHorizontal.json").then((response) => {
      setArticlesHorizontal(response.data);
    });
  }, [articlesHorizontal]);

  useEffect(() => {
    axios.get("./api/SliderImages.json").then((response) => {
      setImages(response.data);
    });
  }, [images]);

  useEffect(() => {
    axios.get("/api/HomeAds.json").then((response) => {
      setAds(response.data);
    });
  }, [ads]);

  useEffect(() => {
    axios.get("/api/TopArticles.json").then((response) => {
      setTopPosts(response.data);
    });
  }, [topPosts]);

  // if (!articles || !ads || (!articles && !ads)) return null;

  return (
    <div className="Home">
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
