import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards bg-light-green' id="cards">
      <h1>CHECK OUT OUR PRODUCTS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle1.jpeg'
              text=''
              label='Bamboo Bottles'
             
            />
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle2.jpeg'
              text=''
              label='Bamboo Bottles'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle3.jpeg'
              text='Bamboo Handcrafted Water Bottle 750 ML Joint Free & Leak Proof'
              label='Bamboo Bottles'
            />
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle4.jpeg'
              text='Bamboo Handcrafted Water Bottle 750 ML Joint Free & Leak Proof'
              label='Bamboo Bottles'
            />
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle5.jpeg'
              text='Bamboo Handcrafted Water Bottle 750 ML Joint Free & Leak Proof'
              label='Bamboo Bottles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
