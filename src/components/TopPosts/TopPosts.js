import React from "react";
import "../TopPosts/TopPosts.css";

const TopPosts = ({ photo, title, category, date, articleLink, topPosts }) => {
  return (
    <div className="top-posts-container">
      <div className="top-posts-header">
        <h1 className="tp-heading">Top Posts</h1>
        <hr className="tp-hr" />
      </div>
      <div className="tp-container">
        <div
          className="tp-images"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className="tp-images-caption">
          <p className="title">
            <a href={articleLink}>{title}</a>
          </p>
          <p className="number-1">1</p>
          <p className="tp-images-date">
            <span className="category">{category}</span>
            <span> / {date}</span>
          </p>
        </div>
      </div>

      {topPosts.map((post) => {
        return (
          <React.Fragment>
            <hr className="tp-hr-wide" />
            <div className="tp-posts-container-small">
              <div className="tp-container-small">
                <div className="tp-container-small-internal">
                  <div
                    className="tp-images-small"
                    style={{ backgroundImage: `url(${post.imageURL})` }}
                  ></div>
                  <span className="tp-images-caption-small">
                    <span className="title">
                      <a href={post.link}>{post.title}</a>
                    </span>
                    <span className="number-2">{post.id + 1}</span>
                  </span>
                </div>
                <p className="tp-images-date">
                  <span className="category">{post.category}</span>
                  <span> / {post.date}</span>
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TopPosts;
