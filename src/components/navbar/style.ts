

import styled from "@emotion/styled";
import { lettersColor,ColorContainer } from '../../app/stylePages/_theme'
import { css } from "@emotion/react";


export const Container = styled.div<{widthPage?:number}>`

display: flex;
padding: 16px;
box-shadow: 0 1px 3px -2px black;

${({widthPage}) => (widthPage || 0) < 800 ? css`
    
    justify-content: space-between;
    `: css`
    justify-content: space-around;
    `
};
${({widthPage}) => (widthPage || 0) < 500 ? css`
 justify-content: center;
    `: css`
    
    `
};



`

export const ContainerLogo = styled.div<{widthPage?:number}>`


${({widthPage}) => (widthPage || 0) < 800 ? css`
display: none;
    
    `: css`
    display: flex;
align-items: center;
gap: 10px;
    `
};


p{
    font-size: 38px;
    font-weight: 600;
}


`
export const ContainerMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
gap: 50px;


a{
        
        text-decoration: none;
        list-style: none;
        color: black;
        .select{
      background-color: #323232;
      border-radius: 75px;
      color: white;
    }
    
    }

li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
    padding: 5px;
   
    
}
hr{
    width: 100%;
    height: 3px;
    border: none;
    background-color: ${lettersColor};
}

`
export const ContainerLoginCar = styled.div<{widthPage?:number}>`
display: flex;
align-items: center;
gap: 45px;

${({widthPage}) => (widthPage || 0) < 550 ? css`
 position: fixed;
 right: 0;
 bottom: 0;
 background-color: #FFF;
 `: css`
 
 `
};


.carCount{
    display: flex;
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size: 14px;
    background-color: ${lettersColor};
    color: white;
   
}


`