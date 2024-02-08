

import React from 'react'
import * as S from './style'
import Image from 'next/image'

const Hero = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        <h2>New Arrivals Only</h2>
        <div>
            <div className='handIcon'>
                <p>new</p>
                <Image src='/' width={100} height={100} alt=''/>
            </div>
            <p>colletion</p>
            <p>for everyone</p>
        </div>
        <div className='heroLatest'>
            <div>latest coletion</div>
            <Image src='/' width={100} height={100} alt=''/>
        </div>
      </S.ContainerLeft>
      <S.ContainerRight>
        
      </S.ContainerRight>
    </S.Container>
  )
}

export default Hero
