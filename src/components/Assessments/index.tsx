import IProfessionals from "../../types/IProfessionals";
import Button from "../Button";
import Card from "../Card";
import Subtitle from "../Subtitle";
import Title from "../Title";


export default function Assessments({ professionals }: { professionals: IProfessionals[] | null}) {
    return(
        <section>
            <Title img="rating">Avalições de especialistas</Title>
            <Subtitle>Dezembro/22</Subtitle> 
            <div className="grid md:grid-cols-2 gap-4">
                {professionals && professionals.length ? professionals?.map((professional) => {
                    return(
                        <Card professional={professional}/>
                    )
                }): "Não há avalições disponíveis"}
            </div>
            {professionals && professionals.length > 4 ?
                <Button>Ver mais</Button>
                : ""
            }
        </section>
    )
}