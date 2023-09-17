import siteLogo from './images/siteLogo.svg'
import menubar from './images/menubar.svg'
import MenuBar from './menuBar'
import { useState } from 'react'
const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className="max-w-[1258px] mx-auto px-3 ">
            {<MenuBar setisOpen={setisOpen} isOpen={isOpen} />}
            <nav className="lg:text-[16px] md:text-[14px] flex items-center justify-between py-[27px]">
                <a href='/' className="hover:opacity-70 active:opacity-50">
                    <img src={siteLogo} alt="" className='lg:w-[119px] max-md:w-[112px] ' width={119} />
                </a>
                <div className='flex items-center gap-5'>
                    <ul className='flex lg:gap-4 md:gap-2 max-md:hidden'>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">Home</a>
                        </li>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">Works</a>
                        </li>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">About us</a>
                        </li>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">Contact us</a>
                        </li>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">Service</a>
                        </li>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">Blogs</a>
                        </li>
                        <li className='hover:opacity-70 active:opacity-50'>
                            <a href="#">Terms & Conditions</a>
                        </li>
                    </ul>
                    <div className='flex max-md:flex-row-reverse gap-2'>
                        <button className='hidden max-md:block' onClick={() => setisOpen(!isOpen)}>
                            <img src={menubar} alt="" className='w-[38px]' />
                        </button>
                        <button className='bg-blue text-white rounded-[20px] lg:px-[20px] md:py-[10px] md:px-[12px] max-md:px-[12px]  max-md:text-[14px] transition-all hover:opacity-70 active:bg-lightBlue'>Connect with us</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar