import { Link, useNavigate, useParams } from 'react-router-dom'
import NotFoundImg from '../components/images/404Img.png'
import instagram from '../components/images/instagram.svg'
import facebook from '../components/images/facebook.svg'
import linkedin from '../components/images/linkedin.svg'
import twitter from '../components/images/twitter.svg'
import youtube from '../components/images/youtube.svg'
import { useEffect } from 'react'
const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }, [])

    return (
        <div className='max-w-[1258px] mx-auto px-3 flex flex-col items-center mt-[48px] mb-[124px]'>
            <img src={NotFoundImg} alt="Not Found" className='w-[722px] md:mb-[87px] sm:mb-[67px] max-sm:mb-[57px]' />
            <div className='text-center'>
                <h3 className='text-[48px] font-semibold md:mb-[29px] sm:mb-[19px] max-sm:mb-[19px]'>Oops!</h3>
                <p className='text-[28px] text-[#00000080] md:mb-[56px] sm:mb-[46px] max-sm:mb-[46px]'>We can’t seem to find the page you are looking for</p>
                <div className='md:mb-[123px] sm:mb-[70px] max-sm:mb-[70px]'>
                    <Link to={'/'} className='px-[20px] py-[10px] bg-blue text-white rounded-[30px]'>Back to Homepage</Link>
                </div>
                <p className='text-[14px] '>Follow us on</p>
                <ul className='flex w-full justify-center gap-[20px] mt-[25px]'>
                    <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
                        <a href="#" target='_blank'>
                            <img src={instagram} alt="instagramLogo" />
                        </a>
                    </li>
                    <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
                        <a href="#" target='_blank'>
                            <img src={facebook} alt="facebookLogo" />
                        </a>
                    </li>
                    <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
                        <a href="#" target='_blank'>
                            <img src={linkedin} alt="linkedinLogo" />
                        </a>
                    </li>
                    <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
                        <a href="#" target='_blank'>
                            <img src={twitter} alt="twitterLogo" />
                        </a>
                    </li>
                    <li className='bg-[#d2d8ff] rounded-[20px] p-[12px]'>
                        <a href="#" target='_blank'>
                            <img src={youtube} alt="youtubeLogo" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NotFound