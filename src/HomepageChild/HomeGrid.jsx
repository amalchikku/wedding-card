import React from 'react';
import gridimg1 from '../assets/grid1.jpg';
import gridimg2 from '../assets/grid2.jpg';
import gridimg3 from '../assets/grid3.jpg';
import gridimg4 from '../assets/grid4.jpg';

function HomeGrid() {
  const images = [
    { id: 1, src: gridimg1, alt: 'Image 1' },
    { id: 2, src: gridimg2, alt: 'Image 2' },
    { id: 3, src: gridimg3, alt: 'Image 3' },
    { id: 4, src: gridimg4, alt: 'Image 4' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-20">
      {images.map((image) => (
        <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
          <img src={image.src} alt={image.alt} className="w-full aspect-square object-cover" />
        </div>
      ))}
    </div>
  );
}

export default HomeGrid;
