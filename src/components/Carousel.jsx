import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ data, onImageClick }) => {
  const localStorageKey = 'carouselSelectedItemIndex'
  const initialSelectedItemIndex =
    parseInt(localStorage.getItem(localStorageKey), 10) || 0
  const [selectedItemIndex, setSelectedItemIndex] = useState(
    initialSelectedItemIndex,
  )

  useEffect(() => {
    localStorage.setItem(localStorageKey, selectedItemIndex)
  }, [selectedItemIndex])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    initialSlide: selectedItemIndex,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  }
  data.sort((a, b) => new Date(b.Date) - new Date(a.Date))
  
  const handleImageClick = (item, index) => {
    if (onImageClick) {
      onImageClick(item)
    }
    setSelectedItemIndex(index)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '16px',
      }}
    >
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.Id}
            style={{ display: 'flex', gap: '20px', columnGap: '20px' }}
            onClick={() => handleImageClick(item, index)}
          >
            <img
              src={require(`../assets/${item.CoverImage}`)}
              alt={item.Title}
              style={{ width: '90%', gap: 10 }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
