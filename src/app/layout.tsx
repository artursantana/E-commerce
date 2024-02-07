
'use client'
import Navbar from '@/components/navbar/Navbar'
import Page from './page'



export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <Page>
        <Navbar/>
        {children}
        </Page>
  );
}
