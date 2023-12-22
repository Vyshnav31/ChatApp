import React, { useState,useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Blank from './blank';
import { ChatContext } from '../context/ChatContext';
const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
          <Chat/>
      </div>
    </div>
  );
}

export default Home;