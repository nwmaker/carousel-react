import React from 'react';

export default function CarouselPage({ images, current }) {
  return (
    <div className="carousel-page">
      {current+1} / <b>{images.length}</b>
    </div>
  );
}
