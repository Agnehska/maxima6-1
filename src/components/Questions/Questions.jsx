import React from 'react';
import './Questions.scss';
import Accordion from './Accordion/Accordion';

const accordionData = [
  {
    title: 'Возможна ли разработка индивидуального проекта?',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
  },
  {
    title: 'Возможна ли разработка индивидуального проекта?',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`
  },
  {
    title: 'Возможна ли разработка индивидуального проекта?',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  },
  {
    title: 'Возможна ли разработка индивидуального проекта?',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`
  },
  {
    title: 'Возможна ли разработка индивидуального проекта?',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  }
];

const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <div className="questions__wrap">
          <div className="questions__block">
            <h2 className="questions__title">
              Мы готовы ответить на <span> любой вопрос</span>
            </h2>
            <p className="questions__text">
              Рыбатекст используется дизайнерами, <span> проектировщиками</span> и фронтендерами, 
              когда нужно выстро заполнить <span> макеты</span> или прототипы содержимым.
            </p>
          </div>
          <div className="accordion">
            <div className="accordion__wrap">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
