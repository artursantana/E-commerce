
import React from 'react'
import './global.css'


export const Page = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Page
