


import styled from "@emotion/styled";



export const Container = styled.div`
height: 100vh;
background: linear-gradient(180deg, #121212, transparent 60%);
margin: 0px 100px 0px 100px ;

`

export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
flex: 1;
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
}

}
.heroLatest{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 310px;
    height: 70px;
    border-radius: 75px;
    margin-top: 30px;
    background-color: #121212;
    color: white;
    font-size: 22px;
    font-weight: 550;
}


`
export const ContainerRight = styled.div`


`