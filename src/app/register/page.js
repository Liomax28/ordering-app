"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
//import {useState} from "react";

export default function RegisterPage() {
  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
    */
  return (
   <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
      
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">
          Register
        </button>
       
      </form>
    </section>
  );
}
