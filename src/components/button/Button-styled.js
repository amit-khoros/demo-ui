import styled from 'styled-components/macro';


export const CustomButton = styled.button`
font-size: ${props=> props.theme.size||"#1em"};
margin: 1em;
padding: 0.75em 2em;
width:${props => props.width || ""};
border-radius: ${props => props.radius || "4px"};
cursor: pointer;
color: ${props => props.color || "#FFFFFF"};
border: ${props => props.theme.border || "2px solid #1a73e8"};
background-color: ${props=> props.theme.background||"#1a73e8"};

`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
