import styled from "@emotion/styled";
import { lettersColor,ColorContainer } from '../../pages/theme'


export const Container = styled.div`

display: flex;
width: 65%;
height: 60vh;
margin: auto;
padding: 0px 140px;
margin-bottom: 150px;


`
export const ContainerLeft = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;

h1{
    
    font-size: 80px;
    font-weight: 600;
}

p{
    color: ${lettersColor};
    font-size: 22px;
    font-weight: 600;
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
    &:hover{
        opacity: 0.9;
    }
}

`

export const ContainerRight = styled.div`

flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
padding-top: 50px;

`