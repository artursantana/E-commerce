

import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../app/stylePages/_theme'
import {css} from "@emotion/react";


export const Container = styled.div`

display: flex;
margin: auto;
flex-direction: column;
align-items: center;
gap: 10px;
width: 90%;
height: 80vh;
box-shadow: 1px 2px 5px black;

h1{
    text-align: center;
    color: ${ColorContainer};
    font-size: 50px;
    font-weight: 600;
    
}

hr{
    width: 200px;
    height: 6px;
    border-radius: 10px;
    background-color:${lettersColor};
}
`

export const ContainerItem = styled.div<{widthPage?:number}>`

display: flex;
flex-wrap: wrap;
justify-content: center;

margin: 50px 0px 50px 0px;

${({widthPage})=>(widthPage || 0) < 600 ? css`
width: 80%;
overflow-y: scroll;
`:css`

`};

`

