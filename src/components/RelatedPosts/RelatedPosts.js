import Author from "../../Author/Author";
import "./RelatedPosts.css";
import { useState, useEffect } from "react";
import axios from "axios";

const RelatedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://good-blue-leopard-gown.cyclic.app/RelatedPosts")
      .then((response) => setPosts(response.data));
  }, [posts]);


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

        {/* <div className="post">
          <p className="post-tag">Related reads</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/415471/pexels-photo-415471.jpeg?cs=srgb&dl=pexels-james-wheeler-415471.jpg&fm=jpg"
            alt=""
          />
          <h1>Pemberton, BC, Canada</h1>
          <Author
            author="James Wheeler"
            avatar="https://images.pexels.com/users/avatars/558609/james-wheeler-590.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
          />
        </div>

        <div className="post">
          <p className="post-tag">Related reads</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/804131/pexels-photo-804131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Hamden, CT, United States</h1>
          <Author
            author="Happy Face"
            avatar="https://images.pexels.com/users/avatars/264958/the-happiest-face-810.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
          />
        </div>

        <div className="post">
          <p className="post-tag">Related reads</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/12935467/pexels-photo-12935467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Canada</h1>
          <Author
            author="Emma Miertschin"
            avatar="https://images.pexels.com/users/avatars/271960732/emma-miertschin-253.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
          />
        </div> */}
      </section>
    </div>
  );
};

export default RelatedPosts;
