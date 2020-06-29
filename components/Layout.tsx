import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/hello">
          <a>Hello</a>
        </Link>{' '}
        |{' '}
        <Link href="/register">
          <a>Register</a>
        </Link>{' '}
        |{' '}
        <Link href="/login">
          <a>Login</a>
        </Link>
        |{' '}
        <Link href="/logout">
          <a>Logout</a>
        </Link>
        |{' '}
        <Link href="/forgot-password">
          <a>Forgot Password</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
