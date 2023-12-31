//"use client"
//import { useEffect, useState } from 'react'
import { Control } from './Control';
import './globals.css'
import Link from 'next/link'

// metadata는 서버컴포넌트에서만 쓰는 개념임.
//client 선언해놓고 이거 쓰면 또 에러남.

export const metadata = {
  title: 'WEb Tutorials',
  description: 'Generated by create yoodeit',
}

export default async function RootLayout({ children }) {
  const res = await fetch('http://localhost:9999/topics', { cache: 'no-store' });
  const topics = await res.json()

  

  return (
    <html>
      <body>
      <h1><Link href='/'>WEB</Link></h1>
      <ol>
        {topics.map((topic)=>{
          return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
        })}
      </ol>
          {children}
          <Control />
      </body>
    </html>
  )
}
