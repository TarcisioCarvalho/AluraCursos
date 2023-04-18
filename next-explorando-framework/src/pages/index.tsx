import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from '@/components/Link'
import React, { ReactHTMLElement, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })
interface CardProps{
  children:ReactNode;
  as:any;
}
function Title({children,as}:CardProps){
  const Tag = as;
  return(
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>
        {`${Tag}{
          color:red;
        }
        `}
      </style>
    </React.Fragment>
  )
}

export default function Home() {
  return (
    <>
      <div>
        <Title as ="h1">Alura Cases</Title>
        <Link href="/faq">
          Ir para Faq
        </Link>
        <Link href="/404">
          Ir para 404
        </Link>
      </div>
    </>
  )
}
