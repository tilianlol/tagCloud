import React from 'react';
import Tag from './tag.jsx';
import '../style/style.scss';

class TagList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {fontSizes: []};
  }
    render(){
      const maxFontSize = 60;

      let maxScore = this.props.data.reduce(function(sum, current) {
        return sum > current.sentimentScore ? sum : current.sentimentScore;
      }, 0);

      let maxScoreProcent = maxScore/100;
      let maxSizeProcent = maxFontSize/100;

      let sizeArr = this.props.data.map((item) => {
        let scoreProcent = Number(item.sentimentScore) / maxScoreProcent;
        let size = scoreProcent * maxSizeProcent;
        
        return size;
      })

      let colorArr = [];
      sizeArr.map((item, index) => {
        colorArr.push("#"+((1<<24)*Math.random()|0).toString(16));
      })

      return (
        <div className="tag_list">
        {
          this.props.data.map((item, index) => {
            return (
              <Tag
                fontColor={colorArr[index]}
                fontSize={`${sizeArr[index]}px`}
                key={index}
                id={item.id}
                label={item.label}
                like={item.sentiment.positive}
                dislike={item.sentiment.negative}
                neutral={item.sentiment.neutral}
                typeBlog={item.pageType.blog}
                typeFacebook={item.pageType.facebook}
                typeForum={item.pageType.forum}
                typeGeneral={item.pageType.general} 
                typeImage={item.pageType.image}
                typeNews={item.pageType.news}
                typeReview={item.pageType.review}
                typeTwitter={item.pageType.twitter}
                typeVideo={item.pageType.video}
              />
            );
          })
        }
        </div>
      );
    }
}
module.exports = TagList;