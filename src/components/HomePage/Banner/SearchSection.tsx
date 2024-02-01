import { useState } from "react"
import Button from "../../Button"
import InputGeneral from "../../InputGeneral"

const categories = [
    {
        name:'Neurologista'
    },
    
    {
        name:'Dermatologista'
    },
    {
        name:'Cardiologista'
    },
    {
        name:'Ortopedista'
    },
    {
        name:'Oftalmologista'
    },
    {
        name:'Pediatria'
    },

]

export default function SearchSection() {
    const [especialidade, setEspecialidade] = useState('')
    const [local, setLocal] = useState('')

    return(

        <section className="w-5/6 mx-auto mt-4 py-8 md:px-16 px-4 space-y-6 justify-center items-center gap-3 shadow-md rounded-xl">
            <div className="grid md:flex w-full gap-4 items-strech">
                <InputGeneral type="text" placeholder="Digite a especialidade" value={especialidade} onChange={setEspecialidade} icon="search" />
                <InputGeneral type="text" placeholder="Digite sua localização" value={local} onChange={setLocal} icon="location" />
                <Button type="submit">Buscar</Button>
            </div>

            <div className="space-y-3 text-center sm:grid hidden">
                <h1 className="font-bold text-lg text-slate-700">Você pode estar procurando por estas categorias:</h1>
                <div className="flex justify-center gap-3">
                    {categories.map(categorie => (
                        <div className="bg-slate-200 py-1 px-2 rounded-lg text-sm flex gap-1 w-fit font-light">
                            <a href="#" >{categorie.name}</a>
                            <button>x</button>
                        </div>
                    )) }
                </div>
            </div>

        </section>
    )
};