import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    };
    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    // 4
    this.submitHandler = this.submitHandler.bind(this);
  };

  titleHandler(event) {
    let value = event.target.value;
    this.setState({articleTitle: value});
    console.log(this.state.articleTitle);
  };

  bodyHandler(event) {
    let value = event.target.value;
    this.setState({articleBody: value});
    console.log(this.state.articleBody);
  };

  submitHandler(event) {
    event.preventDefault();
    let formPayload = {
      title: this.state.articleTitle,
      body: this.state.articleBody
    };
    this.props.addNewArticle(formPayload);
  };

  render() {
    return(
      <form 
        className="new-article-form callout"
        onSubmit={this.submitHandler}
      >
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          titleHandler={this.titleHandler}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          bodyHandler={this.bodyHandler}
        />
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  };
};

export default ArticleFormContainer;
