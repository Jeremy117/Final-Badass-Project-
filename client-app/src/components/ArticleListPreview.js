import React from "react";
import { Link } from "react-router-dom";

var cardStyle = {
  display: "block",
  width: "30vw",
  transitionDuration: "0.3s",
  height: "1vw"
};

const ArticlePreview = ({ article }) => {
  // const article = props.article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a>
          {/* <img src={article.author.image} alt="avatar" /> */}

          <div class="row">
            <div class="col s12 lg12">
              <div class="card">
                <div class="card-content black-text">
                  <a>
                    <div class="card-content black-text">
                      <card style={cardStyle} />

                      <img src={article.author.image} alt="Avatar" />
                    </div>
                  </a>
                  <div className="info">
                    <a className="author">{article.author.username}</a>
                    <span className="date">
                      {new Date(article.createdAt).toDateString()}
                    </span>
                  </div>
                  <h5>{article.title}</h5>
                  <p>{article.description}</p>
                  {/* <span>Read more...</span> */}
                  <ul className="tag-last">
                    {article.tagList.map(tag => (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`./article/${article.slug}`}
                    className="preview-link blue-text"
                  >
                    {article.tagList.map(tag => (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </Link>
                  <br />
                  <Link
                    to={`./article/${article.slug}`}
                    className="preview-link black-text"
                  >
                    <span>Read more...</span>
                    <ul className="tag-last">
                      {article.tagList.map(tag => (
                        <li
                          className="tag-default tag-pill tag-outline"
                          key={tag}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ArticlePreview;
