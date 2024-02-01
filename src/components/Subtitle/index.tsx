export default function Subtitle({children}: { children: string }) {
    return(
        <>
            <h2 className="text-blue-950 font-bold text-lg mb-4">{children}</h2>
        </>
    )
}