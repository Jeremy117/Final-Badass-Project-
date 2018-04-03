import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";
import services from "../../services";
import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ARTICLE_PAGE_LOADED", payload })
});

class Article extends Component {
  componentDidMount() {
    /*
    we'll need to get article by slug from the url
    and the comments for this. 2 promises. ummmmm
    */
    const articleId = this.props.match.params.id;
    this.props.onLoad(
      Promise.all([
        services.Articles.get(articleId),
        services.Comments.forArticle(articleId)
      ])
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments !== this.props.comments) {
      console.log(nextProps);
    }
  }

  /*
marked is a library that compiles markdown into HTML - in order to get react to render raw HTML, we need to use this dangerouslySetInnerHTML property, because React sanitizes HTML by default.
  */
  render() {
    const article = this.props.article;
    if (!article) {
      return null;
    }
    const markup = { __html: marked(article.body) };
    const canModify =
      this.props.currentUser &&
      this.props.currentUser.username === article.author.username;
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <ArticleMeta article={this.props.article} canModify={canModify} />
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={markup} />

              <ul className="tag-list">
                {article.tagList.map(tag => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <hr />

          <div className="article-actions" />
        </div>

        <div className="row" />
        <CommentContainer
          comments={this.props.comments || []}
          errors={this.props.commentErrors}
          slug={this.props.match.params.id}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import MainView from "./MainView";
// import services from "../../services";

// import { Grid, Row, Col } from "react-bootstrap";

// const mapStateToProps = state => ({
//   appName: state.appName,
//   articles: state.articles
// });

// const mapDispatchToProps = dispatch => ({
//   onLoad: payload => dispatch({ type: "ARTICLE_HOME_PAGE_LOADED", payload })
// });

// class Article extends Component {
//   componentDidMount() {
//     this.props.onLoad(services.Articles.all());
//   }
//   render() {
//     return (
//       <div className="home-page">
//         <div className="container page">
//           <div className="row">
//             <MainView />
//           </div>
//           <div className="row">
//             <Grid>
//               <Row className="show-grid text-center">
//                 <Col xs={12} sm={4} className="person-wrapper" />
//               </Row>
//             </Grid>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Article);
