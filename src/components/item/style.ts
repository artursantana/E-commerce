

import styled from "@emotion/styled";


export const Container = styled.div`

width: 250px;


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

color: #374151;
font-size: 18px;
font-weight: 600;

`

export const ContainerPriceOld = styled.div`

color: #8c8c8c;
font-size: 18px;
font-weight: 500;
text-decoration: line-through;

`