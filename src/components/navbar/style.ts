

import styled from "@emotion/styled";
import { lettersColor,ColorContainer } from '../../pages/theme'


export const Container = styled.div`

display: flex;
justify-content: space-around;
padding: 16px;
box-shadow: 0 1px 3px -2px black;


`

export const ContainerLogo = styled.div`
display: flex;
align-items: center;
gap: 10px;


p{
    font-size: 38px;
    font-weight: 600;
}


`
export const ContainerMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
gap: 50px;


a{
        text-decoration: none;
        list-style: none;
        color: black;
    }

li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
   
    
}
hr{
    width: 100%;
    height: 3px;
    border: none;
    background-color: ${lettersColor};
}

`
export const ContainerLoginCar = styled.div`
display: flex;
align-items: center;
gap: 45px;

button{
    width: 157px;
    height: 58px;
    border: none;
    border-radius: 75px;
    font-size: 20px;
    font-weight: 500;
    background-color: ${ColorContainer};
    color: #FFF;
    cursor: pointer;

    &:active{
        opacity: 0.5;
    }
}

.carCount{
    display: flex;
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size: 14px;
    background-color: ${lettersColor};
    color: white;
}


`