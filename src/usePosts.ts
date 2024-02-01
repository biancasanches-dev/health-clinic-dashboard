import { useState } from "react";

export default function usePost() {
    const [ error, setError ] = useState('');
    const [ sucess, setSucess ] = useState(false);
    const [ response, setResponse] = useState('');

    async function setData<T>({url, dados, token} : {url:string, dados: T, token?: string}) {
        const headers: HeadersInit = {
            'Content-type': 'application/json'
        }
        if(token) {
            headers['Authorization'] = `Bearer ${token}`
        }
        try {
            const response = await fetch(`http://localhost:8080/${url}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(dados)
            })
            setSucess(true);
            const convertResponse = await response.json();
            setResponse(convertResponse.token);
        } catch (error) {
            setError('Não foi possível enviar os dados');
        }
    }

    return { setData, sucess, error, response}
};


