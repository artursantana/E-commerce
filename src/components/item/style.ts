

import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../pages/theme'


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


`

export const ContainerNewPrice = styled.div`

color: ${ColorContainer};
font-size: 18px;
font-weight: 600;

`

export const ContainerPriceOld = styled.div`

color: ${ColorContainer};
font-size: 18px;
font-weight: 500;
text-decoration: line-through;

`