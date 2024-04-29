
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './Gallery.scss'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import img from '../../assets/img/home.png';
import img1 from '../../assets/img/img1.png'
import Button from '../blocks/Button/Button';

const Gallery = () => {
  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState(null);

  const onInit = useCallback((detail) => {
    if (detail) {
      // lightGalleryRef.current = detail.instance;
      detail.instance.openGallery();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer('aaa');
    }
  }, []);
  return (
    <div className="gallery">
      <div className="container">
        <h2 className="gallery__title"><span>Посмотрите</span> дома, построенные нами <br /> за прошлый год</h2>
        <div className="gallery__wrap">
          <div className="gallery__block" ref={containerRef} >
            <LightGallery
              container={containerRef.current}
              onInit={onInit}
              plugins={[lgThumbnail]}
              thumbWidth={120}
              thumbHeight={'80px'}
              hash={false}
              elementClassNames={'gallery__container'}
            >
              <a href={img} className='gallery__link' onClick={event => event.preventDefault()}>
                      <img alt="img1" src={img} />
              </a>
              <a href={img1} className='gallery__link' onClick={event => event.preventDefault()}>
                      <img alt="img1" src={img1} />
              </a>
              <a href={img} className='gallery__link' onClick={event => event.preventDefault()}>
                      <img alt="img1" src={img} />
              </a>
              <a href={img1} className='gallery__link' onClick={event => event.preventDefault()}>
                      <img alt="img1" src={img1} />
              </a>
            </LightGallery>
          </div>
          <div className="gallery__info">
            <a href="/" className="gallery__map">Показать на карте</a>
            <h4 className="gallery__subtitle">Дом из сруба “Атаман” в Пестово</h4>
            <div className="gallery__advantages">
              <div className="gallery__advantage">
                <p className="gallery__advantage-title">Стоимость строительства:</p>
                <p className="gallery__advantage-number">1 780 000 <span> руб</span></p>
              </div>
              <div className="gallery__advantage">
                <p className="gallery__advantage-title">Сроки строительства:</p>
                <p className="gallery__advantage-number">35 <span> дней</span></p>
              </div>
              <div className="gallery__advantage">
                <p className="gallery__advantage-title">Общая площадь:</p>
                <p className="gallery__advantage-number">120 <span> м.кв.</span></p>
              </div>
            </div>
            <div className="gallery__about">
              <div className="gallery__about-block">
                <p className="gallery__about-text">Площадь: <span>120 кв.м.</span></p>
                <p className="gallery__about-text">Размеры:<span>7х9</span></p>
                <p className="gallery__about-text">Тип работ: <span>Под ключ</span></p>
              </div>
              <div className="gallery__about-block">
                <p className="gallery__about-text">Срок стройки: <span>16 дней</span></p>
                <p className="gallery__about-text">Комнат: <span>5</span></p>
                <p className="gallery__about-text">Фундамент: <span>Монолитная плита</span></p>
              </div>
            </div>
            <div className="gallery__btns">
              <p className="gallery__question"><span>Понравился дом?</span> Рассчитайте стоимость в калькуляторе</p>
              <Button class_btn={'gallery__btn'}>Рассчитать стоимость</Button>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
        
  );
}

export default Gallery;



