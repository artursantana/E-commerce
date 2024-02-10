

import React from 'react'
import * as S from './style'

interface Props {
    product: string | undefined
}

const BreadCrum = ({product}: Props) => {
   
  return (
    <S.Container>
      Home 
    </S.Container>
  )
}

export default BreadCrum
