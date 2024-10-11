import React from 'react';
import LinkItem from './LinkItem';
import '../style/StyleForComponents.css';

const LinkSection = () => {
  return (
    <div className='links' id="services">
      <LinkItem 
        href='#gym' 
        imgSrc='/gym.png' 
        altText='Gym' 
        text='ТРЕНАЖЕРНИЙ ЗАЛ' 
        bgClass='gym_link' 
      />
      <LinkItem 
        href='#group' 
        imgSrc='/group.png' 
        altText='Group' 
        text='ГРУПОВІ ЗАНЯТТЯ' 
        bgClass='group_link' 
      />
      <LinkItem 
        href='#sol' 
        imgSrc='/sun.png' 
        altText='Solarium' 
        text='СОЛЯРІЙ' 
        bgClass='solari_link' 
      />
      <LinkItem 
        href='#massage' 
        imgSrc='/relax.png' 
        altText='Massage' 
        text='МАСАЖ' 
        bgClass='massage_link' 
      />
      <LinkItem 
        href='#cafe' 
        imgSrc='/cafe.png' 
        altText='Cafe' 
        text='КАФЕ' 
        bgClass='cafe_link' 
      />
    </div>
  );
}

export default LinkSection;