import React from 'react';
import './Catalog.scss';
import FormCall from '../blocks/FormCall/FormCall';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__wrap">
          <div className="catalog__block">
            <h2 className="catalog__title"><span>Скачайте каталог проектов</span> с ценами и планировками</h2>
            <div className="catalog__img"></div>
          </div>
          <FormCall 
            title={'Скачайте каталог'} 
            title2={' топовых проектов'} 
            text={'Мы вышлем подборку вам в мессенджер'} 
            subtitle={'Куда отправить подборку?'}
          />
        </div>
      </div>
    </section>
  )
}

export default Catalog;
