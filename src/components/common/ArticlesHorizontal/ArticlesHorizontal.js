import React from "react";
import "../ArticlesHorizontal/ArticlesHorizontal.css";

const ArticlesHorizontal = ({ articles }) => {
  //   const [articlesData, setArticlesData] = useState([]);

  //   useEffect(() => {
  //     setArticlesData(articles);
  //   }, [articles]);

  return (
    <main className="ah-main-container">
      <div className="ah-header">
        <h1 className="ah-heading">The Latest</h1>
        <hr className="ah-hr" />
      </div>
      <div className="ah-container">
        {articles.map((article, index) => {
          return (
            <figure key={index} className="ah-images-container">
              <img className="ah-images" src={article.url} alt={article.alt} />
              <figcaption className="ah-images-caption">
                <a className="ah-link" href={article.link}>
                  {article.caption}
                </a>
                <p>{article.about}</p>
              </figcaption>
              <p className="ah-images-date">
                <span className="category">{article.category}</span>
                <span> / {article.date}</span>
              </p>
            </figure>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlesHorizontal;
