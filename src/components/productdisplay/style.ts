


import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../pages/theme'



export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0px 170px;


h1{
display: flex;
margin: auto;
}

`
export const ContainerLeft = styled.div`

display: flex;
gap: 17px;
margin-top: 25px;
`
export const ContainerImgList = styled.div`

display: flex;
flex-direction: column;



`
export const ContainerImgMain = styled.div`
margin: auto;
img{
    width: 300px;
    height: 300px;
}


`
export const ContainerRight = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
margin-bottom: 55px;

button{
    display: flex;
    margin: auto;
    width: 157px;
    height: 58px;
    border: none;
    border-radius: 75px;
    font-size: 20px;
    font-weight: 500;
    background-color: ${ColorContainer};
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #FFF;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
}

`
export const ContainerRightPrices = styled.div`
display: flex;
justify-content: space-around;

p{
    font-weight:600;
    span{
        color: ${lettersColor};
    }
}

`