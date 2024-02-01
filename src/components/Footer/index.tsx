import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

export default function Footer() {
    const socialLinks = [
        {
            img: facebook,
            link: "#"
        },
        {
            img: google,
            link: "#"
        },
        {
            img: instagram,
            link: "#"
        },
        {
            img: whatsapp,
            link: "#"
        },
    ]

    return(
        <footer className='text-white p-4 bg-blue-950 h-full text-center'>
            <ul className='flex justify-center my-4 mx-auto gap-12'>
                {socialLinks.map(links => 
                    <li className='list-none'>
                        <a href={links.link} className='hover:scale-125'>
                            <img src={links.img} alt={`logo do ${links.img}`}/>
                        </a>
                    </li>
                )}
            </ul>
            <p>Copyright 2024 | Projeto Fictício</p>
        </footer>
    )
}