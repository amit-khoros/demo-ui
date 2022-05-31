import React, { Children, useState } from 'react';
import { 
   CustomButton
} from './Button-styled'; 

import "./input.css";



interface IProps {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
  }

type Props = IProps;

// const Button: React.FC<Props> = ({onClick,border,color,children,radius,width,height}) => {
const Button: React.FC<Props> = ({onClick,children}) => {

   
//   const [active,setActive]=useState<boolean>(false);

//   const activateField = (e: any): void  => {
//    setActive(true)
//   }

//   console.log(active)

//   const disableField = (e: any): void  => {
//     console.log("111111");
//     if(e.target.value!==""){
//     console.log("22222");

//     setActive(true)
//     } 
//     else{
//     console.log("333333");
      
//       setActive(false)
//     }  
//       }

      return(
        <div>
          <CustomButton   onClick={onClick}>
             {children}
         </CustomButton>
          {/* <TomatoButton>Tomato Button</TomatoButton> */}
        </div>
      );
      };

export default Button;



