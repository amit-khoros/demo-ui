import styled from 'styled-components/macro';

export const StyledInput = styled.div`
     position: relative;
    display: flex;
    flex-direction: column;
    margin:20px 20px;
    &:focus-within label {
    /* transform: translate(0, 12px) scale(0.8); */
    color: #0a53e4;
    transform: translate(0, 12px) scale(0.8);
    transform: translateY(-10.5px);
    text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff;
    background-color: #fff;
    margin: 0 8px;
    padding: 0 4px;
    
  }

  .filled {
    /* transform: translate(0, 12px) scale(0.8); */
    transform: translateY(-10.5px);  
    text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff;
    background-color: #fff;
    margin: 0 8px;
    padding: 0 4px;
    color: #0a53e4;
  }

  label {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 3px 12px;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 26px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;

  }
  input {
     height: 56px;
     font-weight: 500;
     font-size: '16px';
     padding: 12px 16px 0 10px;
     outline: 0;
     width: ${props => props?.children[0]?.props.width||""};
     color: #a0a0a0;
      border: 1px solid #E0E2E3;
      background-color: white;
      border-radius: 6px;
      display: inline-block;
     background: #fff;
     font-family: Arial, Helvetica, sans-serif;
     font-size: 16px;
     -webkit-transition: border-color .2s ease-in-out;
         -moz-transition: border-color .2s ease-in-out;
         -ms-transition: border-color .2s ease-in-out;
             transition: border-color .2s ease-in-out;     
             &:focus {
      box-shadow: 0 0 0 2px #79b1ff; 
      color: #a0a0a0;
      font-weight: 500;
      font-size: '16px';
  
  }        
  }

   /* Chrome, Safari, Edge, Opera */
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.floating-label{
    -webkit-appearance: none !important;
  }
`;