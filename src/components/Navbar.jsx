import React, { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({ onSelectUser }) => {
  const { currentUser } = useContext(AuthContext);
  const handleUserClick = (currentUser) => {
    // Call the callback function with the selected user
    onSelectUser(currentUser);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className='navbar'>
      <span className="logo">AVK Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
