import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary text-zinc-900 hover:brightness-105 shadow-sm hover:shadow-md',
        secondary: 'bg-secondary text-zinc-900 hover:brightness-105',
        outline: 'border-2 border-foreground bg-transparent hover:bg-zinc-100',
        ghost: 'bg-transparent hover:bg-zinc-100',
    };

    const sizes = {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-8 text-base',
        lg: 'h-14 px-10 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
