import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle1.jpeg'
              text='Sexyyyyyyyyyyyyy boi paurush.................'
              label='Bamboo Bottles'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle2.jpeg'
              text='Sexyyyyyyyyyyyyy boi paurush.................'
              label='Bamboo Bottles'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle3.jpeg'
              text='Sexyyyyyyyyyyyyy boi paurush.................'
              label='Bamboo Bottles'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle4.jpeg'
              text='Sexyyyyyyyyyyyyy boi paurush.................'
              label='Bamboo Bottles'
              path='/products'
            />
            <CardItem
              src='https://raw.githubusercontent.com/VibhorSingh19/f-t/main/public/images/bottle5.jpeg'
              text='Sexyyyyyyyyyyyyy boi paurush.................'
              label='Bamboo Bottles'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
