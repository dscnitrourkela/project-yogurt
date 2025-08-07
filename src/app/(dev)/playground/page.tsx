import React from 'react';
import Navbar from '@/components/marginals/navbar';
import Clouds from '@/components/hero/clouds';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="">
        <Navbar />
        <Clouds />
      </div>
    </div>
  );
}
