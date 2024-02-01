import IEndereco from "./IEndereco"

export default interface IProfessionals {
    nome: string,
    email: string,
    senha: string,
    crm: string,
    especialidade: string,
    telefone: string,
    imagem: string,
    estaAtivo: boolean,
    possuiPlanoSaude: boolean,
    planoSaude: string[],
    endereco: IEndereco,
}