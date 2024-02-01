import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfessionals from "../../types/IProfessionals";
import IAppointment from "../../types/IAppointment";
import useDataCharts from "./useDataChart";
import Subtitle from "../Subtitle";
import Title from "../Title";

interface IData {
    name: string,
    appointments: number
}

interface Props {
    professionals: IProfessionals[] | null,
    appointments: IAppointment[] | null
}

export default function Chart({ professionals, appointments }: Props) {
    let data: Array<IData> = useDataCharts({professionals, appointments})

    return(
        <div>
            <Title img="chart">Consultas mensais por especialista</Title>
            <Subtitle>Dezembro/22</Subtitle> 
            <ResponsiveContainer width="100%" height={350} className="bg-white rounded-lg">
                <BarChart
                    layout="vertical"
                    data={data}  
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Bar dataKey="appointments" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}