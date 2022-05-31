import React, { useState } from 'react';
import CustomInput from "components/input/CustomInput";
import { CustomButton } from 'components/button/Button-styled';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface IProps {
}

type Props = IProps;

const Payment: React.FC<Props> = () => {

  const [active,setActive]=useState<boolean>(false);

  function userDetails() {
    return (
      <>
        <CustomInput label='First Name' />
        <CustomInput  label='Last Name'/>
        <CustomInput  label='E-Mail' type="email"/>
     </>
    );
  }

  function paymentDetails() {
    return (
      <>
        <CustomInput placeholder='Type....' label={"Card Number - (xxxx-xxxx-xxxx-xxxx)"}/>
        <CustomInput type="month"  label="Valid Till"/>
        <CustomInput label='CVV - (xxx)' placeholder='Type....' type="password" max={3} width="150px" />
     </>
    );
  }


        return (
          <>
          {active?paymentDetails():userDetails()}
          <Container>
        <CustomButton  onClick={()=>{(!active)&&setActive(true)}}>{!active?"Verify & Proceed":"Pay now"}</CustomButton>
        </Container>
          </>                  
        );
      };

export default Payment;



