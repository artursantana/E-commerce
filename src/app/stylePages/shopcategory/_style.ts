

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

export const ContainerProducts = styled.div`


.itens{
    padding: 25px;
    margin: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    
}


`