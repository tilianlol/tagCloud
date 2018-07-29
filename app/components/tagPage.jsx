import React from 'react';
import Data from '../data/data.json';
import TagInfo from './tagInfo.jsx';
import '../style/style.scss';

class TagPage extends React.Component{
  render(){
      return (
        <div className="tag_page">
          <TagInfo data={Data} match={this.props.match}/>
        </div>
      );
  }
}

module.exports = TagPage;