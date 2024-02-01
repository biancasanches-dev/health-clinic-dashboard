import ratingImg from './assets/avaliacao.png'
import chartImg from './assets/grafico.png'
import appointmentImg from './assets/consulta.png'
import { ReactNode } from 'react'

interface Props {
    img?: keyof IImgs
    children?: ReactNode 
}

interface IImgs {
    rating: string
    chart: string
    appointment: string
}

export default function Title({ img, children }: Props) {
    
    const imgList: IImgs = {
        rating: ratingImg,
        chart: chartImg,
        appointment: appointmentImg
    }

    const bgStyle = {
        backgroundImage: img ? `url('${imgList[img]}')` : 'none',
    }

    return(
        <div className='flex items-center gap-2 my-6'>
            {img && <span style={bgStyle} className="bg-center bg-cover w-6 h-6" />}
            <h2 className='text-sky-500 md:text-2xl font-bold'>{children}</h2>
        </div>
    )
}