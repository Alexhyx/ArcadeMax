import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';

function SignOut() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing Out:", error);
    }
  };

  return (
    <div className="signOut-form-containter">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;