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
    <button
      className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      onClick={handleGoogleLogin}
      disabled={loading}
    >
      <Typography.Muted className="text-white">Pre-register</Typography.Muted>
    </button>
  );
}
