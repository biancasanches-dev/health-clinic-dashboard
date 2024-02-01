import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export default function Container({ children }: ContainerProps) {
    return(
        <>
            <div className="bg-slate-100 md:m-16 m-4 rounded-[16px] md:p-8 p-4 h-full">
                {children}
            </div>
        </>

    )
}