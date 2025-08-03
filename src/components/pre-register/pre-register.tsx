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
    return (
      <div className="w-[170px] mt-4 mx-auto relative">
        {/* Outer navy blue base */}
        <div className="bg-[#000E4A] rounded-md pt-[2px] pb-[8px] px-[2px]">
          {/* Middle dark blue border */}
          <div className="bg-[#002196] rounded-sm pt-[2px] pb-[3px] px-[2px]">
            {/* Inner blue button */}
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="bg-[#0035d5] px-8 py-4 h-14 rounded transition-transform  hover:brightness-110 duration-150  w-full"
            >
              <Typography.P className="text-white text-5xl font-semibold text-center">
                Loading.....
              </Typography.P>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (user && isRegistered) {
    return (
      <div className="flex items-center gap-2">
        <Typography.Badge>Pre Registered</Typography.Badge>
      </div>
    );
  }

  return (
    <div className="w-[170px] mt-4 mx-auto relative">
      {/* Outer navy blue base */}
      <div className="bg-[#000E4A] rounded-md pt-[2px] pb-[8px] px-[2px]">
        {/* Middle dark blue border */}
        <div className="bg-[#002196] rounded-sm pt-[2px] pb-[3px] px-[2px]">
          {/* Inner blue button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="bg-[#0035d5] px-8 py-4 h-14 rounded transition-transform  hover:brightness-110 duration-150  w-full"
          >
            <Typography.P className="text-white text-5xl font-semibold text-center">
              {loading ? 'Loading...' : 'Pre register'}
            </Typography.P>
          </button>
        </div>
      </div>
    </div>
  );
}
