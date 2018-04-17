import React from "react";
import { Link } from "react-router-dom";

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
                <div class="card-content blue-text">
                  <div className="info">
                    <a className="author">{article.author.username}</a>
                    <span className="date">
                      {new Date(article.createdAt).toDateString()}
                    </span>
                  </div>
                </div>
                <div class="card-action blue-text">
                  <h3>{article.title}</h3>
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
                  <Link to={`article/${article.slug}`} className="preview-link">
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
                    to={`article/${article.slug}`}
                    className="preview-link blue-text"
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
