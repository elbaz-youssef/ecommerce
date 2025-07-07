interface ButtonProps {
    children: React.ReactNode;
    isLeftRounded?: boolean;
    variant?: 'primary' | 'secondary';
}

const Button= ({children, isLeftRounded = true, variant = 'primary'}: ButtonProps) => {
    const commonStyle = 'w-fit cursor-pointer text-white font-medium transition duration-300 ease-in-out hover:opacity-90';
    const variants = {
        primary: `px-10 py-3 bg-[var(--primary)] ${!isLeftRounded? 'rounded-lg sm:rounded-l-none' : 'rounded-lg'}`,
        secondary: 'py-2 px-4 border-2 border-white group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)]'
    };

    return (
        <button className={`${commonStyle} ${variants[variant]}`}>{children}</button>
    )
}

export default Button