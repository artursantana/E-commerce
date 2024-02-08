


import React from 'react'
import * as S from './style'

const NewsLetter = () => {
  return (
    <S.Container>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updted</p>
      <S.ContainerNewletter>
        <input type="Email" placeholder='Your Email id' />
        <button>Send</button>
      </S.ContainerNewletter>
    </S.Container>
  )
}

export default NewsLetter
