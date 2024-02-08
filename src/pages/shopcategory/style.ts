

import styled from "@emotion/styled";


export const Container = styled.div`

.banner{
    display: flex;
    width: 80%;
    height: 45vh;
    background-color: #454545;
    position: relative;
    margin: auto;
    align-items: center;
    padding: 15px;

    h1{
        display: flex;
        font-size: 145px;
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
export const ContainerIndexSort = styled.div`

display: flex;
margin: 0 170px;
justify-content: space-between;
align-items: center;

span{
    font-weight: 600;
}
`
export const ContainerCategorySort = styled.div`

padding: 10px 20px;
border-radius: 40px;
border: 1px solid #888;

`
export const ContainerProducts = styled.div`


.itens{
    margin: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    
}


`