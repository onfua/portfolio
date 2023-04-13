import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import TopBar from '../components/top_bar'
class Home extends React.Component{
  state : any
  constructor(props : any){
    super(props)
    this.state = {
      menu : undefined
    }
  }
  render() : React.ReactNode{
    const {menu} = this.state
    return (
      <>
        <Head>
          <title>Joël Randrianarivelo</title>
          <meta name="description" content="My name is Randrianarivelo Joël. I'm a developer who can make web or mobile application for you with javascript." />
          <link rel="icon" href="./icons/icon.ico" />
        </Head>

        <div className="main">
          <TopBar menu={menu} changeMenu={this.changeMenu.bind(this)}></TopBar>
        </div>
      </>
    )
  }

  changeMenu(s : string | undefined){
    this.setState({menu : s})
  }
}

export default Home
