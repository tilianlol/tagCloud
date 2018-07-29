import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
class Tag extends React.Component{
    constructor(props) {
      super(props);

      this.state = {class: "", size: 0};
      
      this.hoverHandler = this.hoverHandler.bind(this);
      this.outHandler = this.outHandler.bind(this);
    }
    hoverHandler() {
      this.setState({class: "active"});
    }
    outHandler() {
      this.setState({class: ""});
    }
    render(){
        return (
          <Link to={`/${this.props.id}`} className={`tag ${this.state.class}`} onMouseEnter={this.hoverHandler} onMouseLeave={this.outHandler} style={{fontSize: this.props.fontSize, color: this.props.fontColor}}>
            <span>{this.props.label}</span>
            <div className="tag_info">
              <div className="tag_info__mentions">
                <div className="tag_text">
                  <span>Positive: </span>
                  <span>{this.props.like}</span>
                </div>
                <div className="tag_text">
                  <span>Negative: </span>
                  <span>{this.props.dislike}</span>
                </div>
                <div className="tag_text">
                  <span>Neutral: </span>
                  <span>{this.props.neutral}</span>
                </div>
                <div className="tag_text">
                  <span>total: </span>
                  <span>{
                      Number(this.props.like) + Number(this.props.dislike) + Number(this.props.neutral)
                    }
                  </span>
                </div>
              </div>
              <div className="tag_info__types">
                <div className="tag_text">
                  <span>blog: </span><span>{this.props.typeBlog}</span>
                </div>
                <div className="tag_text">
                  <span>facebook: </span><span>{this.props.typeFacebook}</span>
                </div>
                <div className="tag_text">
                  <span>forum: </span><span>{this.props.typeForum}</span>
                </div>
                <div className="tag_text">
                  <span>general: </span><span>{this.props.typeGeneral}</span>
                </div>
                <div className="tag_text">
                  <span>image: </span><span>{this.props.typeImage}</span>
                </div>
                <div className="tag_text">
                  <span>news: </span><span>{this.props.typeNews}</span>
                </div>
                <div className="tag_text">
                  <span>review: </span><span>{this.props.typeReview}</span>
                </div>
                <div className="tag_text">
                  <span>twitter: </span><span>{this.props.typeTwitter}</span>
                </div>
                <div className="tag_text">
                  <span>video: </span><span>{this.props.typeVideo}</span>
                </div>
              </div>
            </div>
          </Link>
        )
    }
}
Tag.defaultProps = {like: 0, dislike: 0, neutral: 0};

module.exports = Tag;