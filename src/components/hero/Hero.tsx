

import React from 'react'
import * as S from './style'

const Hero = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        <h2>New Arrivals Only</h2>
        <div>
            <div className='handIcon'>
                <p>new</p>
                <h1>icon</h1>
            </div>
            <p>colletion</p>
            <p>for everyone</p>
        </div>
        <div className='heroLatest'>
            <div>latest coletion</div>
            <h1>picture</h1>
        </div>
      </S.ContainerLeft>
      <S.ContainerRight>
        
      </S.ContainerRight>
    </S.Container>
  )
}

export default Hero
