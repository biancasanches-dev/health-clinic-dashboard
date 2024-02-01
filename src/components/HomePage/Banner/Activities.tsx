import calendar from './assets/calendar_month.svg'
import notification from './assets/notifications.svg'
import assessment from './assets/thumb_up.svg'
import safety from './assets/health_and_safety.svg'

const activities = [
    {
        img: safety,
        text: 'Encontre especialistas',
        link: '#'
    },
    {
        img: calendar,
        text: 'Agende consultas',
        link: '#'
    },
    {
        img: notification,
        text: 'Defina lembretes',
        link: '#'
    },
    {
        img: assessment,
        text: 'Avalie o serviço',
        link: '#'
    },

]

export default function Activities() {
    return(
        <div className='flex flex-col md:flex-row gap-4 md:justify-between md:w-5/6 md:mx-auto mx-4 my-10'>
            {activities.map((atv) => (
                <a href={atv.link} className='bg-slate-200 md:w-64 py-5 grid place-items-center gap-3 rounded-xl shadow-md'>
                    <img src={atv.img} alt="icone" />
                    <span className='text-blue-950'>{atv.text}</span>
                </a>
            ))}
        </div>
    )
};