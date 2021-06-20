import React, {Component} from 'react';
import './CardFeed.scss';
import {loadFromFile} from './docparse';

class CardFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title:"Card Title #1",
          tags: [
            {name:'p', class:'cardcontent', inner:'Nullam imperdiet tempor imperdiet. Sed ut lorem et mauris molestie malesuada. Donec posuere nibh sed eleifend varius. Fusce tincidunt elit metus, sed consectetur ligula ullamcorper laoreet. Suspendisse at pharetra sapien. Morbi interdum molestie mi, et ornare ipsum pellentesque vel. Duis nisi purus, efficitur sed tempor in, tristique eu tellus. Ut nec laoreet metus. Pellentesque quam est, tempor vitae dictum vel, convallis eu nunc. Suspendisse sed nisi ac arcu varius auctor. In posuere nisl sapien, at efficitur felis tristique vel. Mauris felis quam, viverra sed ipsum eu, suscipit tristique metus. Vestibulum iaculis euismod dui, a venenatis turpis elementum sed. Nunc vitae metus orci. Integer volutpat massa erat, non dictum arcu mollis vel.'},
            {name:'img', src:'https://cdn.discordapp.com/attachments/395316967579451396/852332465947148318/screenshot.png',
            width: 300, height: 300},
            {name:'p', class:'cardcontent', inner:'In maximus purus non erat tempor molestie. Sed vel nisl nec augue faucibus fringilla. Praesent non hendrerit lectus. In maximus orci at elit luctus gravida. Aenean libero velit, euismod eget scelerisque eget, ultrices id nulla. Phasellus risus magna, tempor id nisl id, consequat elementum sapien. Praesent non lobortis dui. Nullam eu dui porta lorem mollis venenatis. Cras consequat, turpis vitae accumsan accumsan, dolor lacus sagittis mauris, id suscipit felis neque quis odio. Fusce euismod blandit metus at mattis. Nam hendrerit sem in quam maximus, nec pharetra elit egestas. Aenean eu ullamcorper elit, vitae elementum libero. Mauris accumsan feugiat diam ac varius. Sed ac felis lectus. Nulla nisl neque, mattis sit amet lorem pellentesque, dapibus convallis nulla.'},
            {name:'span', class:'codesnippet', inner:'hello_world();'}
          ],
          topics: ['Generative, Processing']
        },
        {
          title:"Card Title #2",
          tags: [
            {name:'p', class:'cardcontent', inner:'Nullam imperdiet tempor imperdiet. Sed ut lorem et mauris molestie malesuada. Donec posuere nibh sed eleifend varius. Fusce tincidunt elit metus, sed consectetur ligula ullamcorper laoreet. Suspendisse at pharetra sapien. Morbi interdum molestie mi, et ornare ipsum pellentesque vel. Duis nisi purus, efficitur sed tempor in, tristique eu tellus. Ut nec laoreet metus. Pellentesque quam est, tempor vitae dictum vel, convallis eu nunc. Suspendisse sed nisi ac arcu varius auctor. In posuere nisl sapien, at efficitur felis tristique vel. Mauris felis quam, viverra sed ipsum eu, suscipit tristique metus. Vestibulum iaculis euismod dui, a venenatis turpis elementum sed. Nunc vitae metus orci. Integer volutpat massa erat, non dictum arcu mollis vel.'},
            {name:'img', src:'https://cdn.discordapp.com/attachments/395316967579451396/852332465947148318/screenshot.png',
            width: 300, height: 300},
            {name:'p', class:'cardcontent', inner:'In maximus purus non erat tempor molestie. Sed vel nisl nec augue faucibus fringilla. Praesent non hendrerit lectus. In maximus orci at elit luctus gravida. Aenean libero velit, euismod eget scelerisque eget, ultrices id nulla. Phasellus risus magna, tempor id nisl id, consequat elementum sapien. Praesent non lobortis dui. Nullam eu dui porta lorem mollis venenatis. Cras consequat, turpis vitae accumsan accumsan, dolor lacus sagittis mauris, id suscipit felis neque quis odio. Fusce euismod blandit metus at mattis. Nam hendrerit sem in quam maximus, nec pharetra elit egestas. Aenean eu ullamcorper elit, vitae elementum libero. Mauris accumsan feugiat diam ac varius. Sed ac felis lectus. Nulla nisl neque, mattis sit amet lorem pellentesque, dapibus convallis nulla.'},
            {name:'span', class:'codesnippet', inner:'hello_world();'}
          ],
          topics: ['Generative, Processing']
        },
        {
          title:"Card Title #3",
          tags: [
            {name:'p', class:'cardcontent', inner:'Nullam imperdiet tempor imperdiet. Sed ut lorem et mauris molestie malesuada. Donec posuere nibh sed eleifend varius. Fusce tincidunt elit metus, sed consectetur ligula ullamcorper laoreet. Suspendisse at pharetra sapien. Morbi interdum molestie mi, et ornare ipsum pellentesque vel. Duis nisi purus, efficitur sed tempor in, tristique eu tellus. Ut nec laoreet metus. Pellentesque quam est, tempor vitae dictum vel, convallis eu nunc. Suspendisse sed nisi ac arcu varius auctor. In posuere nisl sapien, at efficitur felis tristique vel. Mauris felis quam, viverra sed ipsum eu, suscipit tristique metus. Vestibulum iaculis euismod dui, a venenatis turpis elementum sed. Nunc vitae metus orci. Integer volutpat massa erat, non dictum arcu mollis vel.'},
            {name:'img', src:'https://cdn.discordapp.com/attachments/395316967579451396/852332465947148318/screenshot.png',
            width: 300, height: 300},
            {name:'p', class:'cardcontent', inner:'In maximus purus non erat tempor molestie. Sed vel nisl nec augue faucibus fringilla. Praesent non hendrerit lectus. In maximus orci at elit luctus gravida. Aenean libero velit, euismod eget scelerisque eget, ultrices id nulla. Phasellus risus magna, tempor id nisl id, consequat elementum sapien. Praesent non lobortis dui. Nullam eu dui porta lorem mollis venenatis. Cras consequat, turpis vitae accumsan accumsan, dolor lacus sagittis mauris, id suscipit felis neque quis odio. Fusce euismod blandit metus at mattis. Nam hendrerit sem in quam maximus, nec pharetra elit egestas. Aenean eu ullamcorper elit, vitae elementum libero. Mauris accumsan feugiat diam ac varius. Sed ac felis lectus. Nulla nisl neque, mattis sit amet lorem pellentesque, dapibus convallis nulla.'},
            {name:'span', class:'codesnippet', inner:'hello_world();'}
          ],
          topics: ['Generative, Processing']
        },]
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
    const dataUri = '%PUBLIC_URL%/content/example.pdf'
    const f = loadFromFile(new File([], dataUri));
    f.then((result) => {console.log(result)});
    return (<div className='cardstack'>
      {this.renderCards()}
    </div>);
  }
}

export default CardFeed;
