

import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../_theme'


export const Container = styled.div`

.loading{
    width: 300px;
    height: 70vh;
    margin: auto;
    font-size: 70px;
}

.banner{
    display: flex;
    width: 80%;
    background-color: ${ColorContainer};
    position: relative;
    margin: auto;
    align-items: center;
    padding: 15px;
    @media (max-width: 700px) {
            flex-direction: column;
            text-align: center;
            font-size: 5px;
        }
    
    h1{
        display: flex;
        font-size: 45px;
        color: ${lettersColor};
        align-items: baseline;
    }
    img{
        display: flex;
        right: 0;    
    }
}

`

export const ContainerFilterProducts = styled.div`


.itens{
    padding: 25px;
    margin: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    
}
`

export const ConatinerSearch = styled.div`
    display: flex;
    padding: 25px 0px 0px 0px ;
    gap: 25px;
    width: 82%;
    margin: auto;
    align-items: center;
    justify-content: center;

input{
    width: 350px;
    font-size: 25px;
}

button{
    padding: 5px;
    border-radius: 75px;
    background-color: #121212;
    font-weight: 550;
    text-decoration: none;
    color: #FFF;

}
`