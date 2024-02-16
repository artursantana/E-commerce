

import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../pages/theme'


export const Container = styled.div`

.banner{
    display: flex;
    width: 80%;
    height: 45vh;
    background-color: ${ColorContainer};
    position: relative;
    margin: auto;
    align-items: center;
    padding: 15px;

    h1{
        display: flex;
        font-size: 45px;
        color: hotpink;
        align-items: baseline;
    }
    img{
        display: flex;
        position: absolute;
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