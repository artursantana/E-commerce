

import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../app/stylePages/_theme'

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;
margin-top: 50px;

`

export const ContainerLogo = styled.div`

display: flex;
align-items: center;
gap: 20px;

p{
    color: ${ColorContainer};
    font-size: 46px;
    font-weight: 700;
}
`

export const ContainerLinks = styled.ul`

display: flex;
list-style: none;
gap: 50px;
text-shadow: 1px 2px 3px ${ColorContainer};
font-size: 20px;

a{
    text-decoration: none;
    color: ${lettersColor};
}


`


export const ContainerSocialIcon = styled.div`

display: flex;
gap: 20px;

.IconContainer{
    padding: 10px 10px 6px 10px;
background: #FFF;
border: 1px;
}
li{
    cursor: pointer;
}

`
export const footercopyright = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
width: 100%;
margin-bottom: 30px;
color: ${ColorContainer};


hr{
    width: 80%;
    border: none;
    border-radius: 10px;
    height: 3px;
    background-color: #FFF;
}
`