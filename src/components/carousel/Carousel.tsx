import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Carousel.css";

interface IProps {
    children?:any,
    width?:number,
    autoPlay?:boolean     
 }

 
 
 type Props = IProps;

export const CarouselItem: React.FC<Props>   = ({ children, width}) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel: React.FC<Props>   = ({ children,autoPlay  }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {

    if(autoPlay){
      const interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1);
        }
      }, 3000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
    
    

  });

//   const handlers = useSwipeable({
//     onSwipedLeft: () => updateIndex(activeIndex + 1),
//     onSwipedRight: () => updateIndex(activeIndex - 1)
//   });

  return (
    <div
    //   {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{position:"relative"}}>
      <div style={{display:"flex",  justifyContent: "space-between"}}>
       {paused && <><FaArrowAltCircleLeft
              className="leftArrow"
          
              color="#000000"
              onClick={() => {
                console.log("i am here")
                updateIndex(activeIndex - 1);
              }}
            
            />
              <FaArrowAltCircleRight
              className="rightArrow"         
              color="#000000"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}           
            /></>}
            </div>
            </div>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >      
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
