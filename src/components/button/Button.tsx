import React, { Children, useState } from 'react';
import { 
   CustomButton
} from './Button-styled'; 

import "./input.css";

interface IProps {
    children?: React.ReactNode;
    onClick: () => void; 
  }

type Props = IProps;

const Button: React.FC<Props> = ({onClick,children}) => {

      return(
        <div>
          <CustomButton   onClick={onClick}>
             {children}
         </CustomButton>
        </div>
      );
      };

export default Button;



