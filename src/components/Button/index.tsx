interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined,
    children: string,
    onClick?: () => void
}

export default function Button({children, type, onClick }: ButtonProps) {
    return(
        <>
            <button type={type} onClick={onClick} className="bg-blue-950 rounded-md py-3 px-4 font-bold text-white hover:scale-105">{children}</button>
        </>
    )
}