import React from 'react';
import Navbar from '@/components/marginals/navbar';
import { Typography } from '@/components';
import PreRegisterButton from '@/components/pre-register/pre-register';
import Clouds from '@/components/hero/clouds';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="">
        <Navbar />
        <Typography.H1>Playground</Typography.H1>
        <Typography.Muted className="text-left">
          Todo: add the updated preregister button in navbar
        </Typography.Muted>
        <PreRegisterButton />
        <Clouds />
      </div>
    </div>
  );
}
