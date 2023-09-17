import circle from './components/images/circle.svg'
import Navbar from './components/navbar'
function App() {
  return (
    <>
      <div>
        <header>
          <div className='w-full '>
            <Navbar />
          </div>
          <div className='w-full bg-MainBackground'>
            <div className='max-w-[1258px] flex justify-between max-md:flex-col max-md:items-center mx-auto px-3 pt-14 pb-[137px]'>
              <div className='max-w-[596px]'>
                <div className='w-[366px] max-sm:max-w-[266px] h-[60px] mb-[34px] max-sm:px-2 flex justify-evenly items-center rounded-[20px] bg-gray'>
                  <img src={circle} alt="" className='max-sm:w-[30px] max-sm:h-[30px]'/>
                  <span className='text-[18px] max-sm:text-[14px] font-medium'>#1 Digital company in the town!</span>
                </div>
                <h1 className='text-[60px] max-sm:text-[45px] font-bold leading-[115%] mb-[13px]'>Amet sed <br /> cursus eu <br /> tellus eget.</h1>
                <p className='mb-[50px]'>Vitae augue elementum ullamcorper porta adipiscing dui, consequat enim quam. Nisi rhoncus vitae orci duis diam eget faucibus. Nulla enim sit nibh sed.</p>
                <div className='flex max-sm:flex-col  gap-[25px]'>
                  <button className='bg-blue text-white rounded-[20px] px-[20px] py-[10px] transition-all hover:opacity-70 active:bg-lightBlue'>Connect with us</button>
                  <button className='text-blue text-[22px] font-semibold'>Browse our works</button>
                </div>
              </div>
              <div className='w-[500px] max-sm:w-full h-[400px] mt-8 bg-blue'>
              </div>
            </div>
          </div>
          <div className='w-full h-[52px] bg-lightCyan'></div>
        </header>
      </div>
    </>
  )
}

export default App
