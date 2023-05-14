import React from 'react'
import Chat from '../components/chat'
import Header from '../components/header'

type Props = {}

const Chat_page = ({ }: Props) => {
  return (
    <>
      <Header />
      <Chat />
    </>
  )
}

export default Chat_page