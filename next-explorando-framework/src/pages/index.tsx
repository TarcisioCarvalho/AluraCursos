import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from '@/components/Link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1>Alura Cases</h1>
        <Link href="/faq">
          Ir para Faq
        </Link>
      </div>
    </>
  )
}
