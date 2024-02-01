import bannerImg from './assets/bannerImg.png'

export default function Banner() {
    return(
        <>
            <div className="bg-[#339CFF] w-full relative">
                <img src={bannerImg} alt="" className='object-cover w-full '/>
                <h1 className='absolute md:text-3xl text-sm font-semibold text-slate-100 top-2 md:inset-y-1/3 md:w-1/3 w-1/2 md:left-48 left-4'>Encontre profissionais de diversas especialidades e agende sua consulta com facilidade!</h1>
            </div>
        </>
    )
}