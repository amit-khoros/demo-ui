import styled from 'styled-components/macro';

export const Card = styled.div`
    display: flex;
    max-width: 350px;
    margin: 20px;
    padding: 1px;
    border-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const List = styled.div`
    overflow: scroll;
    height: 200px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &&::-webkit-scrollbar {
}
`;

export const Map = styled.div`
    border: 2px solid grey;
    border-radius: 15px;
    padding: 5px;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Image = styled.div`
padding-top:15px;
padding-left:5px;
`;
export const Line = styled.div`
 width: 90%;
 border-bottom: 0.5px solid grey";
 margin-left: 20px;
`
export const Details=styled.div`
display:block;
`