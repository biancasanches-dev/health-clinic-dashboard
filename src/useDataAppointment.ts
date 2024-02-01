import IAppointment from "./types/IAppointment"
import useFetch from "./useFetch"

const useDataAppointment = () => {
    return useFetch<IAppointment[]>({ url: 'consulta'});
}

export default useDataAppointment