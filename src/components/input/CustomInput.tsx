import React, { useState } from 'react';
import { 
    StyledInput
 } from './CustomInput.styled'; 


interface IProps {
placeholder?:string;
inputValue?:any;
onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
width?:any;  
type?:string; 
disabled?:boolean;
required?:boolean;
label?:string;
max?:number;
min?:number;

}

type Props = IProps;

const Input: React.FC<Props> = ({onChange,inputValue,placeholder,width,type,disabled,required,label,max,min}) => {

  const [active,setActive]=useState<boolean>(false);

  const activateField = (e: any): void  => {setActive(true)}
  const disableField = (e: any): void  => {
    if(e.target.value!==""){
    setActive(true)
    } 
    else{    
      setActive(false)
    }  
      }

        return (
            
                <StyledInput>
                  <input
                  className='floating-label'
                     value={inputValue}
                    //  placeholder={placeholder||"Enter a tag"}
                     onChange={onChange}
                     width={width}
                     type={type}
                     readOnly={disabled}
                     required={required}
                     onFocus={(e)=>activateField(e)}
                     onBlur={disableField}
                     max={max}
                     minLength={min}
                   />
                    <label className={(active)? 'filled':""} >{label||"label"}</label>
                </StyledInput>
                     
        );
      };

export default Input;



