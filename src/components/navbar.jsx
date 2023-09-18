import siteLogo from './images/siteLogo.png'
import menubar from './images/menubar.svg'
import MenuBar from './menuBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className="max-w-[1222px] mx-auto px-3 ">
            {<MenuBar setisOpen={setisOpen} isOpen={isOpen} />}
            <nav className="flex items-center justify-between py-[27px]">
                <Link to={'/'} className="hover:opacity-70 active:opacity-50">
                    <img src={siteLogo} alt="Logo" className='lg:w-[181.969px] max-md:w-[142px] ' width={181.969} />
                </Link>

                <ul className='flex lg:gap-[70px] md:gap-[30px] lg:text-[20px] md:text-[18px] font-semibold font-[Roboto]  max-md:hidden'>
                    <li className='hover:opacity-70 active:opacity-50'>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li className='hover:opacity-70 active:opacity-50'>
                        <Link to={'/'} href="#">About us</Link>
                    </li>
                    <li className='hover:opacity-70 active:opacity-50'>
                        <Link to={'/'} href="#">Works</Link>
                    </li>
                    <li className='hover:opacity-70 active:opacity-50'>
                        <Link to={'/'} href="#">Service</Link>
                    </li>
                    <li className='hover:opacity-70 active:opacity-50'>
                        <Link to={'/'} href="#">Blogs</Link>
                    </li>
                </ul>
                <div className='flex max-md:flex-row-reverse gap-2'>
                    <button className='hidden max-md:block' onClick={() => setisOpen(!isOpen)}>
                        <img src={menubar} alt="menu logo" className='md:w-[38px] max-md:w-[28px]' />
                    </button>
                    <button className='bg-blue text-white rounded-[20px] lg:px-[20px] md:py-[10px] max-md:py-[10px] md:px-[12px] max-md:px-[10px]  max-md:text-[12px] transition-all hover:opacity-70 active:bg-lightBlue'>Buyurtma berish</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar