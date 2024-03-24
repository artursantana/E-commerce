

import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../app/stylePages/_theme'


export const Container = styled.div`

display: flex;
width: 250px;
justify-content: center;
border: 1px solid ${ColorContainer};
border-radius: 15px;
padding: 5px;
margin: 10px;

p{
    margin: 6px 0px;
}

&:hover{
    transform: scale(1.05);
}

`

export const ContaineritemPrices = styled.div`

display: flex;
flex-direction: column;

div{
    cursor: pointer;
}

`


export const ContainerPrice = styled.div`

color: ${ColorContainer};
font-size: 18px;
font-weight: 500;

.spanusd{
    color: green;
}
.spaneur{
    color: blue;
}
.spanbrl{
    color: tomato;
}

`