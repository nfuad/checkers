import React from 'react'
import App, { Container } from 'next/app'

// custom import
import Head from '../components/Head'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class CheckersApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head title="Checkers" />
        <Layout>
          <Menu />
          <Component {...pageProps} key="page-transition-key" />
          <Footer />
        </Layout>
      </Container>
    )
  }
}

export default CheckersApp
