import Author from "../Author/Author";
import "./RelatedPosts.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { URLContext } from "../../../App";

const RelatedPosts = () => {
  const URL = useContext(URLContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${URL}RelatedPosts`).then((response) => setPosts(response.data));
  }, [posts, URL]);

  return (
    <div className="related-posts-container">
      <p className="heading">More From Siren</p>
      <section className="related-posts">
        {posts.map((post, index) => {
          return (
            <div key={index} className="post">
              <p className="post-tag">Related reads</p>
              <img className="post-image" src={post.imageURL} alt="" />
              <h1>{post.location}</h1>
              <Author author={post.author} avatar={post.avatar} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RelatedPosts;
