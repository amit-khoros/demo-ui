import React from 'react';
import styled from 'styled-components/macro';
import Carousel, { CarouselItem } from 'components/carousel/Carousel'
import 'components/carousel/Carousel.css';
import { CustomButton,Container } from 'components/button/Button-styled';


const theme = {
  fg: "palevioletred",
  bg: "white",
  background:"#ffffff",
  border:"2px solid #ffffff",
  size:"1em"
};


const CarouselImage = styled.img`
width: 340px;
height: 150px;
border: 3px solid #F3F2F3;
border-top-left-radius: 14px;
border-top-right-radius:14px;
`;


const CardTitle = styled.div`
    color:black;
    font-size: 14px;
    font-weight: 600;
    display:flex;
    justify-content:flex-start;
    padding:10px 0 12px 14px;
`;

const ButtonDiv = styled.div`
     background-color: #F3F2F3;
    margin-bottom: 40px;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius:14px;
`;

const InfoTitle = styled.div`
  color:#6B6A6B;
    font-size: 11px;
    font-weight: 600;
    display:flex;
    justify-content:flex-start;
    padding:0 0 12px 14px;
`;

interface IData {
  image?:string;
  title?:string;
  }


const ImageData = [
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1",
      title:"Emirates Airlines."
  },
  {
    image:
      "https://images.unsplash.com/photo-1595279211419-88239fbff506?ixlib=rb-1.2.1",
      title:"Virgin Atlantic."

  },
  {
    image:
      "https://images.unsplash.com/photo-1630311395569-198c3e65b2fe?ixlib=rb-1.2.1",
      title:"Qatar Airways."

  },
  {
    image:
      "https://images.unsplash.com/photo-1627501689994-95da59d8e22c?ixlib=rb-1.2.1",
      title:"Lufthansa."

  },
];

interface IProps {
}

type Props = IProps;

  const Slider: React.FC<Props> = () => {
  return (
 
        
        <Carousel autoPlay={false} width={10}>
        
        {ImageData.map((data: IData, index: number | null | undefined)=>

        <CarouselItem key={index} width={0}>         
          <div>
            <div><CarouselImage src={data.image}/></div>
            <ButtonDiv  >
                <CardTitle> {data.title}</CardTitle>
                <InfoTitle  > 6D-588 ( 8:30 AM - 2:10 PM)<br/><br/>NY - DEL Price USD: 903 $</InfoTitle>
                  <Container>
                    <CustomButton color='#000000' theme={theme}  >Book-Flights</CustomButton>
                  </Container>
            </ButtonDiv>
          </div>
        </CarouselItem>
        )}
       
      </Carousel>

  )
};

export default Slider;
