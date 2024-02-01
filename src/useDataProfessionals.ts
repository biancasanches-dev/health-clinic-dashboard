import IProfessionals from "./types/IProfessionals"
import useFetch from "./useFetch"

const useDataProfessionals = () => {
    return useFetch<IProfessionals[]>({ url: 'especialista' });
}

export default useDataProfessionals