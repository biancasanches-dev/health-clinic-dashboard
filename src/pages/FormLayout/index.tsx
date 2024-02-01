import { Outlet } from 'react-router-dom'
import backgroundImg from './assets/background.svg'

export default function FormLayout() {
    return(
        <div style={{ backgroundImage: `url(${backgroundImg})` }} className='w-full h-screen'>
            <section className='md:w-1/2 mx-auto bg-white h-full flex flex-column items-center'>
                <Outlet />
            </section>
        </div>
    )
};