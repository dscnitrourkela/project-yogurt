import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0035d5] border-2 border-[#11004E] outline-red-500 px-8  py-1 w-fit rounded transition-transform hover:brightness-110 duration-150 shadow-[0px_4px_0px_0px_#11004E,inset_0_0_0_2px_#0617b0] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
