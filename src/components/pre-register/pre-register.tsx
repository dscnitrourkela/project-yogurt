'use client';

import React, { useEffect, useState } from 'react';

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, db } from '@/lib/firebase';

import Typography from '../Typography';
import Loader from '../ui/loader';

export default function PreRegisterButton() {
  const [user, setUser] = useState<User | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          setIsRegistered(userDoc.exists());
        } catch (error) {
          console.error('Error checking user registration:', error);
          setIsRegistered(false);
        }
      } else {
        setIsRegistered(false);
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      await setDoc(
        doc(collection(db, 'users'), result.user.uid),
        {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          registeredAt: new Date().toISOString(),
        },
        { merge: true }
      );
      setIsRegistered(true);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />;
  }

  if (user && isRegistered) {
    return (
      <div className="flex items-center gap-2">
        <Typography.Badge>Pre Registered</Typography.Badge>
      </div>
    );
  }

  return (
    <div className="w-fit mt-4 mx-auto">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-black rounded -z-10 translate-x-1.5 translate-y-1.5" />
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="cursor-pointer bg-[#0534C7] px-6 py-4 h-14  rounded transition-colors hover:brightness-110 "
        >
          <Typography.P className="text-white  text-xl md:text-xl leading-snug text-center">
            Pre register
          </Typography.P>
        </button>
      </div>
    </div>
  );
}
