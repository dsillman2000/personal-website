import React, {Component} from 'react';
import './CardFeed.scss';

class CardFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        title:"Card Title #1",
        tags: [
          {name:'p', class:'cardcontent', inner:'Hello world!'},
          {name:'img', src:'https://cdn.discordapp.com/attachments/395316967579451396/852332465947148318/screenshot.png',
          width: 300, height: 300},
          {name:'p', class:'cardcontent', inner:'Hello again!'},
          {name:'span', class:'codesnippet', inner:'hello_world();'}
        ],
        topics: ['Generative, Processing']},]
    };
  }
  renderCards() {
    let cards = this.state.cards;
    let total = [];
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let cardOut = [];
      for (let j = 0; j < card.tags.length; j++) {
        let tag = card.tags[j];
        if (tag.name === 'p') {
          cardOut.push(<p key={i+'_'+j} className={tag.class}>{tag.inner}</p>);
        } if (tag.name === 'span') {
          cardOut.push(<span key={i+'_'+j} className={tag.class}>{tag.inner}</span>)
        } if (tag.name === 'img') {
          cardOut.push(<img key={i+'_'+j} src={tag.src} className='cardimg' style={{width: tag.width, height: tag.height}}/>)
        }
      }
      total.push(
        <div key={i} className='cardcontainer'>
          <h2 className='cardtitle'>{card.title}</h2>
          {cardOut}
          <p className='cardtopics'>{'Topics: ' + card.topics.join(', ')}</p>
        </div>
      );
    }
    return total;
  }
  render() {
    return (<div className='cardstack'>
      {this.renderCards()}
    </div>);
  }
}

export default CardFeed;
