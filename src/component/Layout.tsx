import React, { ReactNode } from 'react';
import NavBar from './Navbar';
import Footer from './footer';

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <>
    <NavBar />
    {children}
    <Footer />
  </>
}