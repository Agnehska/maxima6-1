
import React from 'react';
import './Estimate.scss';
import FormCall from '../blocks/FormCall/FormCall';

const Estimate = () => {
  return (
    <section className="estimate">
      <div className="container">
        <div className="estimate__wrap">
          <div className="estimate__block">
            <h2 className="estimate__title">
              <span>Если у вас уже есть смета на строительство</span> в 95% 
              случаев мы предлагаем меньшую стоимость и без потери качества
            </h2>
            <h4 className="estimate__subtitle">Как мы этого добиваемся?</h4>
            <div className="estimate__wrapper">
              <div className="estimate__text">
                <p><span>Оптовые скидки</span> на проверенные материалы от партнеров (эномоия до 30%)</p>
              </div>
              <div className="estimate__text">
                <p><span>Оптимальный подбор</span>  материалов и поставщиков (экономия до 15%)</p>
              </div>
              <div className="estimate__text">
                <p><span>Налаженный рабочий процесс</span>  без потери времени (экономия до 20%)</p>
              </div>
            </div>
          </div>
          <FormCall 
            title={'Просто прикрепите готовую смету и вы узнаете, как сэкономить на стройке'} 
            text={'Инженер-сметчик рассчитает стоимость работ и материалов по оптовым ценам'}
            subtitle={'Куда отправить подборку?'}
          />
        </div>
        <div className="estimate__compass"></div>
      </div>
    </section>
  );
}

export default Estimate;
