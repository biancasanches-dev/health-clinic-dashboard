import locationIcon from './assets/location_on.svg'
import searchIcon from './assets/search.svg'

interface Props {
    placeholder: string,
    icon?: 'location' | 'search',
    type: string,
    value: string,
    onChange: (value:string) => void;
    label?: string
}

const iconMap = {
    location: locationIcon,
    search: searchIcon,
};

export default function InputGeneral({ placeholder, icon, type, value, onChange, label }: Props){
    const iconUrl = icon ? iconMap[icon] : undefined;

    return(
        <div className='space-y-3 w-full'>
            <label className='font-semibold'>{label}</label>
            <div className='flex items-center rounded-xl shadow-md overflow-hidden w-full h-12'>
                {iconUrl &&
                    <div className="bg-slate-200 p-4">
                        <img src={`${iconUrl}`} alt="" />
                    </div>
                }
                <input 
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    className="placeholder:text-[#5C5C5C] bg-slate-100 p-3 w-full focus:outline-none" 
                    required
                />
            </div>
        </div>

    )
};