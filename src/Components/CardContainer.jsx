import React from 'react';
import Card from './Card2';

const CardContainer = ({cards = [], media}) => {
  
  return (
    <div className="container-cards">
      {cards.map((card) => (
        <Card
          img={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
            card.poster_path || card.profile_path
          }`}
          title={card.title || card.name}
          subtitle={card.character}
          media={media === "multi" ?  card.media_type : media}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default CardContainer;
