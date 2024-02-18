


import styled from "@emotion/styled";
import { lettersColor} from '../../pages/theme'


export const Container = styled.div`

display: flex;
margin: auto;
height: 80vh;
padding: 25px;
margin-bottom: 25px;

`

export const ContainerLeft = styled.div`
display: flex;
margin: auto;
flex-direction: column;
justify-content: center;
gap: 20px;

.centralDiv{
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
img{
    
    width: 250px;
    height: 250px;
}
}

.handIcon{
display: flex;
flex-direction: column;

h2{
    color: #121212;
    text-shadow: 1px 1px 1px white;
    font-size: 50px;
    font-weight: 700;
    span{
        color: ${lettersColor};
    }
}

}
.heroLatest{
    a{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 15px;
    border-radius: 75px;
    margin-top: 30px;
    background-color: #121212;
    font-size: 22px;
    font-weight: 550;
    text-decoration: none;
    color: #FFF;
}
    
    &:hover{
        opacity: 0.9;
    }
}


`
export const ContainerRight = styled.div`


`