


import styled from "@emotion/styled";



export const Container = styled.div`

width: 65%;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
padding: 0px 140px;
margin-bottom: 150px;
background: linear-gradient(180deg, #fde1ff, transparent 60%);
gap: 30px;

h1{
    color: #454545;
}
p{
    color: #454545;
    font-size: 20px;
}

`



export const ContainerNewletter = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
background: white;
width: 730px;
height: 70px;
border-radius: 80px;
border: 1px solid #e3e3e3;

input{
    width: 500px;
    margin-left: 30px;
    border: none;
    outline: none;
    color: #616161;
    font-size: 16px;
}

button{
    width: 157px;
    height: 58px;
    outline: none;
    border: 1px solid #7a7a7a;
    border-radius: 75px;
    color: #515151;
    font-size: 20px;
    font-weight: 500;
    background-color: white;
    cursor: pointer;
}
`