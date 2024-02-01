import { Step, StepLabel, Stepper } from '@mui/material'
import logo from './logo.png'
import { useState } from 'react'
import InputGeneral from '../../components/InputGeneral'
import Title from '../../components/Title'
import Button from '../../components/Button'
import IClinica from '../../types/IClinica'
import usePost from '../../usePosts'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
    const [ activeStep, setActiveStep] = useState(0)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senhaVerificada, setSenhaVerificada] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const {setData} = usePost();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const clinica: IClinica = {
            email,
            senha,
            nome,
            endereco: {
                cep,
                rua,
                numero,
                complemento,
                estado
            }
        }

        if(activeStep !== 0) {
            try {
                setData({ url: 'clinica', dados: clinica });
                navigate('/login')
            } catch (erro) {
                erro && alert('Erro no cadastro');
            }
        }

        setActiveStep(activeStep + 1);
    }

    return(
        <section className="flex flex-col w-full mx-20 my-8 items-center gap-2">
            <img src={logo} alt="logo" className="w-64 place-self-center mb-12"/>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel />
                </Step>
                <Step>
                    <StepLabel />
                </Step>
            </Stepper>
            {activeStep === 0 ? (
                <>
                    <form onSubmit={handleSubmit} className='grid space-y-4 w-full'>
                        <Title>Preencha os dados da clínica:</Title>
                        <InputGeneral label='Nome' type='nome' value={nome} onChange={setNome} placeholder='Digite seu nome' />
                        <InputGeneral label='CNPJ' type='text' value={cnpj} onChange={setCnpj} placeholder='Digite seu CNPJ' />
                        <InputGeneral label='E-mail' type='email' value={email} onChange={setEmail} placeholder='Digite seu e-mail' />
                        <InputGeneral label='Senha' type='password' value={senha} onChange={setSenha} placeholder='Digite sua senha' />
                        <InputGeneral label='Confirme sua senha' type='password' value={senhaVerificada} onChange={setSenhaVerificada} placeholder='Repita sua senha' />
                        
                        <Button type='submit'>Avançar</Button>
                    </form>
                </>) : (
                <>
                    <form onSubmit={handleSubmit} className='grid space-y-3 w-full'>
                        <InputGeneral label='Telefone' type='tel' value={telefone} onChange={setTelefone} placeholder='Digite seu telefone' />
                        <InputGeneral label='Cep' type='text' value={cep} onChange={setCep} placeholder='Informe o cep' icon='location' />
                        <InputGeneral label='Endereço' type='text' value={rua} onChange={setRua} placeholder='Informe seu endereço' />
                        <InputGeneral type='number' value={numero} onChange={setNumero} placeholder='Digite o número da sua casa' />
                        <InputGeneral type='text' value={complemento} onChange={setComplemento} placeholder='Informe o complemento' />
                        <InputGeneral type='text' value={estado} onChange={setEstado} placeholder='Informe o estado' />

                        <Button type='submit'>Concluir</Button>
                    </form>
                </>
                )
            }
        </section>
    )
};