

import styled from "@emotion/styled";


export const Container = styled.div`

width: 350px;

p{
    margin: 6px 0px;
}

&:hover{
    transform: scale(1.05);
}

`

export const ContaineritemPrices = styled.div`

display: flex;
gap: 20px;


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