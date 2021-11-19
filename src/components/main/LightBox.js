import { useState } from 'react';

const LightBox = ({ images, thumbnails }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState(0);

  const changeImage = (index) => {
    setActiveTab(index);
    setCurrentImage(images[index]);
  };

  return (
    <div className='lightbox-container'>
      <div className='lightbox'>
        <div className='currentImage'>
          <img src={`./images/${currentImage}`} alt='Product' />
        </div>
        <div className='listOfImage'>
          {thumbnails.map((thumbnail, index) => {
            return (
              <div
                key={index}
                className={
                  activeTab === index ? 'thumbnail activeImageTab' : 'thumbnail'
                }
                onClick={() => {
                  changeImage(index);
                }}
              >
                <img src={'./images/' + thumbnail} alt={'thumbnail-' + index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
