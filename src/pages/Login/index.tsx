import { useState } from "react";
import InputGeneral from "../../components/InputGeneral";
import Button from "../../components/Button";
import logo from "./logo.png";
import usePost from "../../usePosts";
import { useNavigate } from "react-router-dom";
import authStore from "../../stores/auth.store";

interface ILogin {
    email: string,
    senha: string
}

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { setData, response} = usePost();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usuario: ILogin = {
            email,
            senha
        }
        
        try {
            setData({url: 'auth/login', dados: usuario})
            authStore.login({email: email, token: response})
            response && navigate('/dashboard')
        } catch (erro) {
            erro && alert('Não foi possível realizar o login')
        }
    }
    return(
            <section className="grid w-full md:mx-20 mx-10 items-center gap-8">
                <img src={logo} alt="logo" className="w-64 place-self-center mb-12"/>
                 <h1 className="text-2xl text-slate-600 text-center">Faça login na sua conta</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputGeneral label="E-mail" type="text" value={email} onChange={setEmail} placeholder="Digite seu e-mail"  />
                    <InputGeneral label="Senha" type="password" value={senha} onChange={setSenha} placeholder="Digite sua Senha" />
                    <Button type="submit">Entrar</Button>
                </form>
                <div className="text-center space-y-6">
                    <a href="#">Esqueceu sua senha?</a>
                    <p>Ainda não tem conta? <a href="#" className="text-blue-500">Faça seu cadastro!</a></p>
                </div>
            </section>
    )
};