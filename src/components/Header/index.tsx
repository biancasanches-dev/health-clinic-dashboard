import { Popper } from '@mui/material';
import authStore from '../../stores/auth.store'
import logo from './assets/logo.png'
import user from './assets/user.png'
import { useState } from 'react'

export default function Header() {
    // const [search, setSearch] = useState('');
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleLogout = () => { 
        authStore.logout
    }

    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
    
    const open = Boolean(anchorEl);
    const userMenu = open ? 'simple-popper' : undefined;
    
    
    return(
        <header className='flex items-center justify-between py-3 md:px-14 px-3'>
            <a href="/">
                <img src={logo} alt="imagem: Freepik.com" className='md:w-52 w-36'/>
            </a>
            {authStore.isAuth ? 
                <>
                    <div className='flex items-center gap-4'>
                        <button type='button' onClick={handleUserMenu} aria-describedby={userMenu}>
                            <img src={user} alt="" />
                        </button>
                        <Popper id={userMenu} open={open} anchorEl={anchorEl} className='grid w-32 py-2 gap-2 text-center border bg-white divide-y-2'>
                            <a href="#">Perfil</a>
                            <a href="#">Lembretes</a>
                            <a href="#">Salvos</a>
                        </Popper>
                        <a href="/" onClick={handleLogout} className='text-blue-900 font-bold hover:underline'>Sair</a>
                    </div>                
                </>
                :
                <>
                    <div className='flex items-center md:gap-8 gap-2'>
                        <a href="#" className='text-xs md:text-base text-blue-900 font-bold hover:underline'>Sobre</a>
                        <a href="/cadastro" className='text-xs md:text-base text-blue-900 font-bold hover:underline whitespace-nowrap'>Cadastre-se</a>
                        <input type='text' placeholder='Digite sua busca' className='md:inline hidden rounded-lg border-slate-200 p-3 border'/>
                        <a href="/login" className="bg-blue-950 rounded-md md:py-3 md:px-4 py-1 px-2 font-bold text-white hover:scale-105">Login</a>
                    </div>
                </>
            }
        </header>
    )
}