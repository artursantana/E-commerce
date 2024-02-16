
import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../pages/theme'


export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
height: 70vh;

h1{
    color: ${ColorContainer};
    font-size: 50px;
    font-weight: 600;
}
hr{
    width: 200px;
    height: 6px;
    border-radius: 10px;
    background-color: ${lettersColor};
}

`

export const ContainerColletions = styled.div`

display: flex;
margin-top: 50px;
gap: 30px;


`

