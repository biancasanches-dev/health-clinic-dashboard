import { Box, Checkbox, FormControlLabel, FormGroup, Modal, Switch } from "@mui/material";
import Title from "../../../components/Title";
import { useState } from "react";
import InputGeneral from "../../../components/InputGeneral";
import Button from "../../../components/Button";
import usePost from "../../../usePosts";
import IProfessionals from "../../../types/IProfessionals";
import authStore from "../../../stores/auth.store";

export default function RegisterModal({ open, handleClose }: { open: boolean, handleClose: () => void}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVerificada, setSenhaVerificada] = useState('');
    const [crm, setCrm] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const [possuiPlano, setPossuiPlano] = useState(false);
    const label = { inputProps: { 'aria-label': 'Atende por plano?'} };
    const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);
    const {setData} = usePost();
    const {user} = authStore

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = event.target.value;

        if(event.target.checked) {
            setPlanosSelecionados([...planosSelecionados, checkboxValue]);
        } else {
            setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const profissional: IProfessionals = {
            nome,
            email,
            senha,
            crm,
            especialidade,
            telefone,
            imagem,
            estaAtivo: true,
            possuiPlanoSaude: possuiPlano,
            planoSaude: planosSelecionados,     
            endereco: {
                cep,
                rua,
                numero,
                complemento,
                estado
            }
        }


        await setData({ url: 'especialista', dados: profissional, token: user.token });

    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Modal de cadastro do especialista"
            aria-describedby="Dados de cadastro do especialista"
            className="overflow-scroll"
        >
            <Box className="md:w-1/2 mx-auto my-24 space-y-6 bg-white shadow-md md:p-12 p-4">
                <button onClick={handleClose} className="text-blue-400 float-end mx-4">x</button>
                <Title>Cadastre o especialista abaixo:</Title>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <InputGeneral label='Nome' type='nome' value={nome} onChange={setNome} placeholder='Digite seu nome' />
                    <InputGeneral label='E-mail' type='email' value={email} onChange={setEmail} placeholder='Digite seu e-mail' />
                    <InputGeneral label='Senha' type='password' value={senha} onChange={setSenha} placeholder='Digite sua senha' />
                    <InputGeneral label='Confirme sua senha' type='password' value={senhaVerificada} onChange={setSenhaVerificada} placeholder='Repita sua senha' />
                    <InputGeneral label='Especialidade' type='text' value={especialidade} onChange={setEspecialidade} placeholder='Qual sua especialidade?' />
                    <InputGeneral label='CRM' type='text' value={crm} onChange={setCrm} placeholder='Insira seu número de registro' />
                    <InputGeneral label='Telefone' type='tel' value={telefone} onChange={setTelefone} placeholder='(DDD) XXXXX-XXXX' />
                    <InputGeneral label='Insira a URL da imagem' type='text' value={imagem} onChange={setImagem} placeholder='https://img.com/example' />
                    <InputGeneral label='Endereço' type='text' value={cep} onChange={setCep} placeholder='Insira o cep' icon='location' />
                    <InputGeneral type='text' value={rua} onChange={setRua} placeholder='Rua' />
                    <div className="flex gap-5">
                        <InputGeneral type='number' value={numero} onChange={setNumero} placeholder='Número' />
                        <InputGeneral type='text' value={complemento} onChange={setComplemento} placeholder='Complemento' />
                        <InputGeneral type='text' value={estado} onChange={setEstado} placeholder='Estado' />
                    </div>
                    <div className="grid items-center">
                        <Title>Atende plano de saúde?</Title>
                        <Switch {...label} onChange={() => {possuiPlano ? setPossuiPlano(false) : setPossuiPlano(true)} }/>
                        <p>Não/Sim</p>
                    </div>

                    {possuiPlano ? 
                        <>
                        <Title>Selecione os planos:</Title>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Sulamerica" />} label="Sulamerica" />
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Unimed" />} label="Unimed" />
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Bradesco" />} label="Bradesco" />
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Amil" />} label="Amil" />
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Biosaúde" />} label="Biosaúde" />
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Biovida" />} label="Biovida" />
                            <FormControlLabel control={<Checkbox onChange={handleChange} value="Outro" />} label="Outro" />
                        </FormGroup>
                        </>
                    : ""
                    }

                    <Button type="submit">Cadastrar especialista</Button>
                </form>
            </Box>
        </Modal>
    )
};