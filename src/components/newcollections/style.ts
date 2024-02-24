
import styled from "@emotion/styled";
import { lettersColor,ColorContainer} from '../../app/stylePages/_theme'


export const Container = styled.div`

display: flex;
margin: auto;
flex-direction: column;
align-items: center;
gap: 10px;
width: 90%;
height: 70vh;
box-shadow: 1px 2px 5px black;

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

.wrap{
    width: 80%;
    overflow-x: hidden;

}

.buttons{
        margin: auto;
        width: 80%;
        display: flex;
        justify-content: space-around;
        button{

        }
    }

`

export const ContainerColletions = styled.div`

display: flex;
width: 200%;
margin-top: 50px;
gap: 30px;


`

