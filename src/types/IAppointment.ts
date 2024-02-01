import IProfessionals from "./IProfessionals";

export default interface IAppointment extends IProfessionals {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfessionals>,
    especialidade: string,
    paciente: string,
    modalidade: string
}