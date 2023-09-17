import circle from '../components/images/circle.svg'
import mobileApp from '../components/images/mobileApp.svg'
import internet from '../components/images/internet.svg'
import design from '../components/images/design.svg'
import marketing from '../components/images/marketing.svg'
const Home = () => {
    return (
        <div className='w-full bg-MainBackground'>
            <header className='mb-[54px]'>
                <div className='max-w-[1258px] flex justify-between max-md:flex-col max-md:items-center mx-auto px-3 pt-[117px] pb-[137px]'>
                    <div className='max-w-[596px]'>
                        <div className='w-[366px] max-sm:max-w-[266px] h-[60px] mb-[34px] max-sm:px-2 flex justify-evenly items-center rounded-[20px] bg-gray'>
                            <img src={circle} alt="" className='max-sm:w-[30px] max-sm:h-[30px]' />
                            <span className='text-[18px] max-sm:text-[14px] font-medium'>#1 Digital company in the town!</span>
                        </div>
                        <h1 className='text-[60px] max-sm:text-[45px] font-bold leading-[115%] mb-[13px] capitalize'>Amet sed <br /> cursus eu <br /> tellus eget.</h1>
                        <p className='mb-[50px]'>Vitae augue elementum ullamcorper porta adipiscing dui, consequat enim quam. Nisi rhoncus vitae orci duis diam eget faucibus. Nulla enim sit nibh sed.</p>
                        <div className='flex max-sm:flex-col  gap-[25px]'>
                            <button className='bg-blue text-white rounded-[20px] px-[20px] py-[10px] transition-all hover:opacity-70 active:bg-lightBlue'>Connect with us</button>
                            <button className='text-blue text-[22px] font-semibold hover:opacity-70 active:opacity-50'>Browse our works</button>
                        </div>
                    </div>
                    <div className='w-[500px] max-sm:w-full h-[400px] mt-8 bg-blue'>
                    </div>
                </div>
                <div className='w-full h-[52px] bg-lightCyan'></div>
            </header>
            <section className='max-w-[1258px] mx-auto px-3'>
                <div className='max-w-[1047px] mx-auto text-center mb-[32px]'>
                    <h2 className='sm:text-[40px] max-sm:text-[20px] font-semibold mb-[19px] capitalize'>Services that lead the way to better business</h2>
                    <p className='sm:text-[18px] max-sm:text-[14px] font-medium'>Faucibus fringilla sed integer cursus tellus et, quis ultricies. Aliquam, faucibus arcu in laoreet ac elementum in eget. Massa urna viverra vulputate euismod pulvinar nibh in vel. Laoreet blandit etiam orci est in vel lacus neque pretium.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:mt-0 md:gap-0 sm:gap-[34px] max-sm:gap-[34px]'>
                    <div className='w-full flex flex-col items-center  text-center'>
                        <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                            <img src={mobileApp} alt="" />
                        </div>
                        <div className='sm:w-[341px] max-sm:w-[300px]'>
                            <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Mobile App Designing</h3>
                            <p className='text-black max-sm:text-[14px]'>Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et. </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center  text-center'>
                        <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                            <img src={mobileApp} alt="" />
                        </div>
                        <div className='sm:w-[341px] max-sm:w-[300px]'>
                            <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Mobile App Designing</h3>
                            <p className='text-black max-sm:text-[14px]'>Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et. </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center  text-center'>
                        <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                            <img src={mobileApp} alt="" />
                        </div>
                        <div className='sm:w-[341px] max-sm:w-[300px]'>
                            <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Mobile App Designing</h3>
                            <p className='text-black max-sm:text-[14px]'>Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et. </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center  text-center'>
                        <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                            <img src={mobileApp} alt="" />
                        </div>
                        <div className='sm:w-[341px] max-sm:w-[300px]'>
                            <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Mobile App Designing</h3>
                            <p className='text-black max-sm:text-[14px]'>Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home