import React from 'react';
import TagList from './tagList.jsx';
import Data from '../data/data.json';
import '../style/style.scss';
 
class Home extends React.Component{
    render(){
        return (
          <div>
            <h2>Tag cloud:</h2>
            <TagList data={Data}/>
          </div>
        );
    }
}
module.exports = Home;