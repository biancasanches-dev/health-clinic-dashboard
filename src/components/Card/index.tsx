import { Rating } from "@mui/material";
import IProfessionals from "../../types/IProfessionals";

export default function Card({ professional }: { professional: IProfessionals }) {
    return(
        <div className="flex rounded-lg bg-white md:p-8 p-2 shadow-md">
            <ul className="flex items-center justify-between w-full">
                <li className="flex md:gap-6 gap-2 items-center">
                    <img src={professional.imagem} alt="" className="rounded-full border border-blue-500 md:w-20 md:h-20 w-14 h-14 object-cover"/>
                    <div>
                    <h2 className="font-semibold">{professional.nome} </h2>
                    <p>{professional.especialidade}</p>
                    </div>
                </li>
                <li>
                    <Rating 
                        name="simple-controled"
                        value={5}
                        readOnly={true}
                    />
                </li>
            </ul>
        </div>
    )
}