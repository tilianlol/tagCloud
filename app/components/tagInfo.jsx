import React from 'react';
import '../style/style.scss';

var dateArr = [
  {
    date: "first",
    volume: 12,
  },
  {
    date: "second",
    volume: 4,
  },
  {
    date: "third",
    volume: 8,
  },
  {
    date: "fourth",
    volume: 52,
  },
];
var queriesArr = [
  {
    "id": 1751295897,
    "name": "Berghain",
    "volume": 165
  },
  {
    "id": 1751295897,
    "name": "Berghain",
    "volume": 165
  },
]
 
class TagInfo extends React.Component{
  render(){
      {
        const Id = this.props.match.params.id;
        let tagContent;
        for(var i=0; i<this.props.data.length; i++){
            if(this.props.data[i].id == Id){
              tagContent = this.props.data[i];
                break;
            }
        }
        if(tagContent !== undefined) {

          if(tagContent.sentiment.positive === undefined)
            tagContent.sentiment.positive = 0;
          if(tagContent.sentiment.negative === undefined)
            tagContent.sentiment.negative = 0;
          if(tagContent.sentiment.neutral === undefined)
            tagContent.sentiment.neutral = 0;

          tagContent.days = tagContent.days.map((item) => {
            let tmpDate = item.date;
            let newDate = new Date(tmpDate);
            item.date = newDate.toString();

            return item;
          })

          return (
            <div className="tag_page">
              <h2>{tagContent.label}</h2>
              <div className="tag_page__main">
                <p className="text--title">Info:</p>
                <table className="wrapper">
                  <tbody>
                    <tr className="tag_text">
                      <td>
                        <div>Volume:</div>
                      </td>
                      <td>{tagContent.volume}</td>
                    </tr>
                    <tr className="tag_text">
                      <td>
                        <div>Burst:</div>
                      </td>
                      <td>{tagContent.burst}</td>
                    </tr>
                    <tr className="tag_text">
                      <td>
                        <div>Type:</div>
                      </td>
                      <td>{tagContent.type}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
    
              <div className="tag_page__sentiments">
                <p className="text--title">Sentiments:</p>
                
                <table className="wrapper">
                  <tbody>
                    <tr className="tag_text">
                      <th className="right--clear">
                        total: {Number(tagContent.sentiment.positive) + Number(tagContent.sentiment.negative) + Number(tagContent.sentiment.neutral)}
                      </th>
                    </tr>
                    <tr className="tag_text">
                      <td>
                        <div>Positive:</div>
                      </td>
                      <td>{tagContent.sentiment.positive}</td>
                    </tr>
                    <tr className="tag_text">
                      <td>
                        <div>Negative:</div>
                      </td>
                      <td>{tagContent.sentiment.negative}</td>
                    </tr>
                    <tr className="tag_text">
                      <td>
                        <div>Neutral:</div>
                      </td>
                      <td>{tagContent.sentiment.neutral}</td>
                    </tr>
                  </tbody>
                </table>
    
              </div>
    
              <div className="tag_page__types">
    
                <p className="text--title">Page types:</p>
                
                <div className="wrapper">
    
                  <div className="tag_text">
                    <span>blog: </span><span>{tagContent.pageType.blog}</span>
                  </div>
                  <div className="tag_text">
                    <span>facebook: </span><span>{tagContent.pageType.facebook}</span>
                  </div>
                  <div className="tag_text">
                    <span>forum: </span><span>{tagContent.pageType.forum}</span>
                  </div>
                  <div className="tag_text">
                    <span>general: </span><span>{tagContent.pageType.general}</span>
                  </div>
                  <div className="tag_text">
                    <span>image: </span><span>{tagContent.pageType.image}</span>
                  </div>
                  <div className="tag_text">
                    <span>news: </span><span>{tagContent.pageType.news}</span>
                  </div>
                  <div className="tag_text">
                    <span>review: </span><span>{tagContent.pageType.review}</span>
                  </div>
                  <div className="tag_text">
                    <span>twitter: </span><span>{tagContent.pageType.twitter}</span>
                  </div>
                  <div className="tag_text">
                    <span>video: </span><span>{tagContent.pageType.video}</span>
                  </div>
                </div>
              </div>
    
              <div className="tag_page__days">
                <p className="text--title">Days:</p>
                <table className="wrapper table--days">
                    {
                      tagContent.days.map((item) => {
                        return (      
                          <tbody key={item.date}>
                            <tr className="tag_text">
                              <th>Date:</th>
                              <th>{item.date}</th>
                            </tr>
                            <tr>
                              <td>Volume:</td>
                              <td>{item.volume}</td>
                            </tr>
                          </tbody>
                        );
                      })
                    }
                </table>
              </div>
                
              <div className="tag_page__queries">
                <p className="text--title">Queries:</p>
                    {
                      tagContent.queries.map((item) => {
                        return (      
                          <table key={item.id} className="wrapper">
                            <tbody>
                              <tr className="tag_text">
                                <th>Id:</th>
                                <th>{item.id}</th>
                              </tr>
                              <tr>
                                <td>Name:</td>
                                <td>{item.name}</td>
                              </tr>
                              <tr>
                                <td>Volume:</td>
                                <td>{item.volume}</td>
                              </tr>
                            </tbody>
                          </table>
                        );
                      })
                    }
                </div>
              </div>
          );
        }
        else {
          return <h1>Page not found</h1>
        }
      }
  }
}

module.exports = TagInfo;