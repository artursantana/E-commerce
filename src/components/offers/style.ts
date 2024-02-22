import styled from "@emotion/styled";
import { lettersColor,ColorContainer } from '../../pages/theme'


export const Container = styled.div`

display: flex;
width: 90%;
justify-content: center;
margin: auto;
padding: 50px 0 50px 0;


`
export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

h1{
    
    font-size: 80px;
    font-weight: 600;

    @media (max-width: 680px) {
    text-align: center;
    font-size: 45px;}
    
}

p{
    color: ${lettersColor};
    font-size: 22px;
    font-weight: 600;
    @media (max-width: 680px) {
    text-align: center;
    font-size: 15px;
}
}

a{
    display: flex;
    width: 282px;
    padding: 15px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    border-radius: 35px;
    background: ${ColorContainer};
    border: none;
    color: #FFF;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
    @media (max-width: 680px) {
    margin: auto;
}
    &:hover{
        opacity: 0.9;
    }
}
@media (max-width: 680px) {
    text-align: center;
}


`

export const ContainerRight = styled.div`

flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

@media (max-width: 680px) {
    display: none;
}


`