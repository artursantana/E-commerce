

import React from 'react'
import * as S from '../../app/stylePages/login/_style'

const Login = () => {
  return (
    <S.Container>
      <S.ContainerForm>
        <h1>Login</h1>
        <S.Containerfields>
      <input type="text" />
      <input type="text" />
      <input type="text" />
        <button>Continue</button>  
        </S.Containerfields>  
        <S.ContainerSignup>
           Already have an account?
           <span>Login Here</span> 
           </S.ContainerSignup>
        <S.ContainerSignup>
          <input type="checkbox" />
          by continuing, i agree  to the terms of use & privacy policy.
        </S.ContainerSignup>
      </S.ContainerForm>
    </S.Container>
  )
}

export default Login
