import arrov from './images/arrov.svg'
import close from './images/close.svg'
import instagram from './images/instagram.svg'
import facebook from './images/facebook.svg'
import linkedin from './images/linkedin.svg'
import twitter from './images/twitter.svg'
import youtube from './images/youtube.svg'
const MenuBar = ({ setisOpen, isOpen }) => {
  return (
    <div className={`bg-white md:w-[631px] max-md:w-full h-[100vh] pt-[28px] fixed hidden max-md:block ease-in duration-200 px-3 ${isOpen ? '-right-[0px]' : '-right-[750px]'}`}>
      <div className='flex  justify-between mb-[65px]'>
        <button className='bg-blue flex rounded-[30px] items-center gap-[10px] lg:px-[20px] md:py-[8px] md:px-[12px] max-md:px-[12px]  max-md:text-[12px] '>
          <img src={arrov} alt="" />
          <span className='text-white font-bold'>Start A New Project</span>
        </button>
        <button className='p-[8px] bg-gray rounded-[50%]' onClick={() => setisOpen(!isOpen)}><img src={close} alt="" /></button>
      </div>
      <ul className='flex flex-col lg:gap-[40px] max-md:gap-2 mb-[42px]'>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/">Home</a>
        </li>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/s">Works</a>
        </li>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/s">About us</a>
        </li>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/s">Contact us</a>
        </li>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/s">Service</a>
        </li>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/s">Blogs</a>
        </li>
        <li className='hover:opacity-70 active:opacity-50'>
          <a href="/s">Terms & Conditions</a>
        </li>
      </ul>
      <div>
        <span className='text-[14px]'>Follow us on</span>
        <ul className='flex gap-[20px] mt-[25px]'>
          <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
            <a href="#" target='_blank'>
              <img src={instagram} alt="" />
            </a>
          </li>
          <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
            <a href="#" target='_blank'>
              <img src={facebook} alt="" />
            </a>
          </li>
          <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
            <a href="#" target='_blank'>
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
            <a href="#" target='_blank'>
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
            <a href="#" target='_blank'>
              <img src={youtube} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuBar