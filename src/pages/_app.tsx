

import React from 'react'
import Layout from '../app/layout'

type Props = {
    Component: React.ElementType;
    pageProps: any;
  }
const _app = ({ Component, pageProps }: Props) => {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default _app
