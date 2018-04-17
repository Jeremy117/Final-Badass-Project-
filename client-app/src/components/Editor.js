import React, { Component } from "react";
import { connect } from "react-redux";
import services from "../services";
import ListErrors from "./ListErrors";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  margin: 20,
  width: "95%"

};

const mapStateToProps = state => ({
  ...state.editor
});

const mapStateToDispatch = dispatch => ({
  onSubmit: payload => dispatch({ type: "ARTICLE_SUBMITTED", payload }),
  onLoad: payload => dispatch({ type: "EDITOR_PAGE_LOADED", payload }),
  onUnload: payload => dispatch({ type: "EDITOR_PAGE_UNLOADED" })
});

class Editor extends Component {
  state = {
    title: "",
    description: "",
    body: "",
    tagList: []
  };

  //we want to check for slug and fetch article if there is one
  componentWillMount() {
    const slug = this.props.match.params.slug;
    if (slug) {
      return this.props.onLoad(services.Articles.get(slug));
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(
          services.Articles.get(this.props.match.params.slug)
        );
      }
      this.props.onLoad(null);
    }
    console.log(nextProps.tagList);
    this.setState({
      ...this.state,
      tagList: nextProps.tagList || [],
      ...nextProps
    });
  }

  //handle input change for all form fields via the name prop
  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  handleTagChange = event => {
    if (event.which === 13 || event.keyCode === 13) {
      this.setState({
        tagList: [...this.state.tagList, event.target.value]
      });
    } else {
      this.setState({ tag: event.target.value });
    }
  };

  /* 
When submitting the form, we need to correctly format the
object and use the update or create - if we have a slug,
we're updating an article, otherwise we're creating a new
one.
*/
  submitForm = ev => {
    ev.preventDefault();
    const article = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      tagList: this.state.tagList
    };
    const slug = { slug: this.props.match.params.slug };
    const promise = this.props.match.params.slug
      ? services.Articles.update(Object.assign(article, slug)) //object merge
      : services.Articles.create(article);

    this.props.onSubmit(promise);
  };

  removeTag = tag => {
    this.setState({
      tagList: [...this.state.tagList.filter(t => t !== tag)]
    });
  };

  render() {
    const { title, description, body, tagList, tag } = this.state;
    return (

      <div className="editor-page" >
        <div className="container page" >
          <div className="row">
            <div className="col s12">

              <h3 className="text-xs-center">New Post</h3>

              <ListErrors errors={this.props.errors} />


              <Paper zDepth={5} >
                <TextField
                  hintText="Post Title"
                  style={style}
                  underlineShow={false}
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleInputChange}
                />
                <Divider />

                <TextField
                  hintText="Post"
                  style={style}
                  underlineShow={false}
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.handleInputChange}
                />
                <Divider />

                <TextField
                  hintText="Share your thoughts"
                  style={style}
                  fullWidth={true}
                  multiLine={true}
                  underlineShow={false}
                  rows="4"
                  name="body"
                  value={body}
                  onChange={this.handleInputChange}
                />
                <Divider />

                <TextField
                  hintText="Enter tags"
                  style={style}
                  underlineShow={false}
                  type="text"
                  name="tag"
                  value={tag}
                  onChange={this.handleTagChange}
                  onKeyUp={this.handleTagChange}
                />

                <div className="tag-list">
                  {tagList.map(tag => {
                    return (
                      <span className="tag-default tag-pill" key={tag}>
                        <i
                          className="ion-close-round"
                          onClick={this.removeTag(tag)}
                        />
                        {tag}
                      </span>
                    );
                  })}
                </div>

              </Paper >

              <br />

              <button className="btn blue" disabled={this.state.inProgress} onClick={this.submitForm}>Publish Article</button>




            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Editor);