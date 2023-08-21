'use client';
import { useEffect } from 'react'
import io from 'Socket.IO-client'
let socket

const Client = () => {
  useEffect(() => socketInitializer(), [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io({path: '/api/socket'});

    socket.on('connect', () => {
      console.log('connected')
    })
  }

  return (<div>Return something</div>);
}

export default Client;