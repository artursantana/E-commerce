


import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../app/stylePages/_theme'
import {css} from "@emotion/react";



export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 50px 0px 50px 0px;



h1{
display: flex;
}

`

export const SubContainer = styled.div<{widthPage?: number}>`
display: flex;
box-shadow: 1px 1px 10px #323232;

${({widthPage})=> (widthPage || 0) < 885 ? css`
flex-direction: column;

width: 90%;
`:
css`
max-width: 885px;
`}

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
export const ContainerImgMain = styled.div<{widthPage?:number}>`
margin: auto;


img{

    ${({widthPage})=> (widthPage || 0) < 450 ? css`

    width: 200px;
    height: 200px;

`:
css`
    width: 300px;
    height: 300px;  
`}
    
}


`
export const ContainerRight = styled.div`
display: flex;
flex-direction: column;
padding: 25px;



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
flex-direction: column;
justify-content: space-around;

h1{
    font-weight:600;
    color: ${lettersColor};
    span{
        color: ${ColorContainer};
    }
}
h3{
    color: #646464;
    text-decoration: line-through
}

`

export const Description = styled.div`



`