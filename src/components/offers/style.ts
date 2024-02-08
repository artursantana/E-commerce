import styled from "@emotion/styled";


export const Container = styled.div`

display: flex;
width: 65%;
height: 60vh;
margin: auto;
padding: 0px 140px;
margin-bottom: 150px;
background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);

`
export const ContainerLeft = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;

h1{
    color: #171717;
    font-size: 80px;
    font-weight: 600;
}

p{
    color: #171717;
    font-size: 22px;
    font-weight: 600;
}

button{
    width: 282px;
    height: 70px;
    border-radius: 35px;
    background: #ff4141;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
}

`

export const ContainerRight = styled.div`

flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
padding-top: 50px;

`