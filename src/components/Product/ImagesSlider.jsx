import { useEffect, useState } from 'react';

export default function ImagesSlider({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomStyle, setZoomStyle] = useState({
    backgroundImage: 'none',
    backgroundPosition: '0% 0%',
    backgroundSize: '150% 150%',
  });

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  const hoverHandler = (image) => {
    setActiveImage(image);
  };

  const handleMouseEnter = () => {
    const url = process.env.REACT_APP_BASE_URL + activeImage;
    setZoomStyle((prev) => ({ ...prev, backgroundImage: `url('${url}')` }));
  };

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setZoomStyle((prev) => ({ ...prev, backgroundPosition: `${x}% ${y}%` }));
  };

  const handleMouseLeave = () => {
    setZoomStyle((prev) => ({
      ...prev,
      backgroundImage: 'none',
      backgroundPosition: '0% 0%',
    }));
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col-reverse w-full items-center gap-y-2 lg:flex-row md:items-start md:h-[calc(100%-4rem)] md:gap-x-2 overflow-hidden">
          {/* thumbs*/}
          <div className="flex flex-nowrap justify-center gap-2 w-full h-[100px] carousel                      lg:flex-col lg:w-[4.25rem] lg:h-full lg:carousel-vertical md:justify-start">
            {images.map((image, index) => (
              /* img_wrap */
              <div
                className="flex-1 shrink-0 grow-0 basis-[4.5rem] cursor-pointer carousel-item relative  "
                key={index}
                onMouseOver={() => hoverHandler(image)}
              >
                <img
                  layout="fill"
                  src={`${process.env.REACT_APP_BASE_URL}${image}`}
                  alt=""
                  className={`object-contain text-center transition-all ease-linear border border-transparent ${
                    activeImage === image ? ' activeImage' : ' normalImage'
                  }`}
                />
              </div>
            ))}
          </div>
          {/* preview */}
          <figure
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-no-repeat group lg:w-[calc(100%-4.25rem)] items-stretch self-stretch w-full h-[70vh] md:h-full bg-cover"
            style={zoomStyle}
          >
            <img
              src={`${process.env.REACT_APP_BASE_URL}${activeImage}`}
              alt=""
              className="block pointer-events-none group-hover:opacity-0 object-center md:object-left-top object-contain w-full h-full lg:w-5/6 lg:h-3/4 xl:w-11/12 xl:h-5/6"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
