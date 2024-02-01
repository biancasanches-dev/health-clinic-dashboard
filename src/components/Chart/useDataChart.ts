import IAppointment from "../../types/IAppointment";
import IProfessionals from "../../types/IProfessionals";

interface IData {
    name: string,
    appointments: number
}

interface Props {
    professionals: IProfessionals[] | null,
    appointments: IAppointment[] | null
}

const useDataCharts = ({ professionals , appointments }: Props) => {
    let data: Array<IData> = []

    if (professionals && professionals.length && appointments) {
        data = professionals.map((professional) => ({
            name: professional.nome,
            appointments: appointments.filter((appointment) => appointment.profissional.some((prof) => prof.nome === professional.nome)).length
        }))
    }

    return data
}

export default useDataCharts;