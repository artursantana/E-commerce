
'use client'
import Navbar from '@/components/navbar/Navbar'
import Page from './page'
import Footer from '@/components/footer/Footer';
import ShopContextProvider from '@/context/ShopContext';



export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
        <ShopContextProvider>
      <Page>
        <Navbar/>
        {children}
        <Footer/>
        </Page>
        </ShopContextProvider>
  );
}
