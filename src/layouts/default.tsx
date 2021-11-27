import Head from 'next/head'
import React, { ReactNode } from 'react'

export const DefaultLayout = (props: { title?: string; children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{props.title || '極メテオ'}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>

      <main>{props.children}</main>
    </>
  )
}
