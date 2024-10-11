import React, { useState } from 'react';
import InfoSection from './InfoSection'; // Не забудьте змінити шлях, якщо файл в іншому місці
import '../style/StyleForComponents.css';

const sections = {
  gym: {
    imgSrc: '/gym.jpg', // Замініть на відповідний шлях до зображення
    title: 'Ціни:',
    items: [
        { productName: 'Абонемент на місяць', price: '500 грн' },
        { productName: 'Разове відвідування', price: '50 грн' },
        { productName: 'Абонемент на 3 місяці до 17:00 ', price: '980 грн' },
        { productName: 'Абонемент на 6 місяців до 17:00 ', price: '1600 грн' },
        { productName: '8 занять в місяць', price: '490 грн' },
        { productName: 'Абонемент на 1 місяць безлімітний', price: '570 грн' },
        { productName: 'Абонемент на 3 місяці безлімітний', price: '1500 грн' },
        { productName: 'Абонемент на 6 місяців безлімітний', price: '2500 грн' },
        { productName: 'Абонемент на 12 місяців безлімітний', price: '3800 грн' },
        { productName: 'Разове заняття', price: '100 грн' },
        { productName: 'Заняття з тренером (додатково до абонементу)', price: '240 грн' },
        { productName: 'Складання програми тренувань (разове)', price: '300 грн' },
        { productName: 'Складання разової програми харчування (разове)', price: '300 грн' },
        { productName: 'Складання програми харчування на 1 місяць', price: '650 грн' },
        { productName: '10 занять з тренером', price: '1900 грн' },
        { productName: '12 занять з тренером', price: '2200 грн' },
        { productName: 'Тренування у вечірній час по абонементу до 17:00', price: '30 грн' },
        { productName: 'Відновлення загубленого абонемента', price: '30 грн' },
    ],
  },
  fitness: {
    imgSrc: '/bgGroup.png', // Замініть на відповідний шлях до зображення
    title: 'Ціни',
    items: [
      { productName: 'Абонемент 8 занять + тренажерний зал', price: '600 грн' },
      { productName: 'Абонемент 12 занять + тренажерний зал', price: '650 грн' },
      { productName: 'Абонемент на 12 місяців + тренажерний зал', price: '4600 грн' },
      { productName: 'Разове заняття', price: '100 грн' },
      { productName: 'Персональне заняття (1 година)', price: '450 грн' },
    ],
  },
  solari: {
    imgSrc: '/sol.jpg', // Замініть на відповідний шлях до зображення
    title: 'Ціни',
    items: [
        { productName: '1 хвилина', price: '10 грн' },
        { productName: '1 хвилина по абонементу «Солярій»', price: '8 грн' },
        { productName: 'Абонемент 50 хвилин', price: '400 грн' },
      { productName: 'Абонемент 100 хвилин', price: '800 грн' },
    ],
  },
};

const PriceSection = () => {
  const [activeSection, setActiveSection] = useState('gym');

  return (
    <div className="price-section" id="price">
      <h3>ЦІНИ</h3>
      <div className="buttons">
        <button
          className={activeSection === 'gym' ? 'active' : ''}
          onClick={() => setActiveSection('gym')}
        >
          Тренажерний зал
        </button>
        <button
          className={activeSection === 'fitness' ? 'active' : ''}
          onClick={() => setActiveSection('fitness')}
        >
          Фітнес
        </button>
        <button
          className={activeSection === 'solari' ? 'active' : ''}
          onClick={() => setActiveSection('solari')}
        >
          Солярій
        </button>
      </div>
      <div className="content">
        <InfoSection
          imgSrc={sections[activeSection].imgSrc}
          title={sections[activeSection].title}
          items={sections[activeSection].items}
        />
      </div>
    </div>
  );
};

export default PriceSection;