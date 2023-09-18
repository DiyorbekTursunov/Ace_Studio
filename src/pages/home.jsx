import circle from '../components/images/circle.svg'
import mobileApp from '../components/images/mobileApp.svg'
import internet from '../components/images/internet.svg'
import design from '../components/images/design.svg'
import marketing from '../components/images/marketing.svg'
import heroImg from '../components/images/HeroImg.png'
import IshJarayoni from '../components/images/IshJarayoni.png'
import buyurtmalar from '../components/images/buyurtmalar.svg'
import ishlar from '../components/images/ishlar.svg'
import sifat from '../components/images/sifat.svg'
import kelishilgan from '../components/images/kelishilgan.svg'
const Home = () => {
    return (
        <div className='w-full bg-MainBackground'>
            <header className='mb-[54px]'>
                <div className='max-w-[1222px] flex justify-between items-center max-md:flex-col max-md:items-center mx-auto px-3 pt-[117px] md:pb-[137px] sm:pb-[87px] max-sm:pb-[87px]'>
                    <div className='max-w-[533px]'>
                        <div className='lg:w-[366px] md:w-[266px] sm:w-[300px] max-sm:w-[300px] h-[60px] mb-[34px] max-sm:px-2 flex justify-evenly items-center rounded-[20px] bg-gray'>
                            <img src={circle} alt="Circle" className='max-sm:w-[30px] md:h-[30px] max-md:h-[30px]' />
                            <span className='lg:text-[18px] md:text-[14px] max-md:text-[14px]  font-medium'>#1-raqamli Kompyuter xizmatlari</span>
                        </div>
                        <h1 className='lg:text-[60px] md:text-[40px] sm:text-[45px] max-sm:text-[45px] font-bold leading-[115%] mb-[13px] capitalize'>Tez, Arzon, Sifatli <br /> va Ishonchli</h1>
                        <p className='mb-[50px]'>Endi vazifalaringizni biz bilan oson va tez bajaring. Bizning ko’p yillik tajribali mutaxassislarimiz sizga yordam berishdan mamnun!</p>
                        <div className='flex md:flex-row sm:flex-col max-sm:flex-col  gap-[25px]'>
                            <button className='bg-blue text-white rounded-[20px] lg:px-[20px] md:py-[10px] max-md:py-[10px] md:px-[12px] max-md:px-[10px]  max-md:text-[14px]  transition-all hover:opacity-70 active:bg-lightBlue'>Buyurtma  berish</button>
                            <button className='text-blue lg:text-[22px] md:text-[14px] font-semibold hover:opacity-70 active:opacity-50 capitalize'>bizning ishlarimizni ko’ring</button>
                        </div>
                    </div>
                    <img src={heroImg} alt="Hero img" className='lg:w-[621px] lg:h-[340px] md:w-[501px] md:h-[220px] md:mt-0 sm:mt-[24px] max-sm:mt-[24px]' />
                </div>
                <div className='w-full h-[52px] bg-lightCyan'></div>
            </header>
            <div className='max-w-[1222px] mx-auto px-3'>
                <section className='lg:mb-[316px] md:mb-[216px] sm:mb-[116px] max-sm:mb-[116px]'>
                    <div className='max-w-[1047px] mx-auto text-center mb-[32px]'>
                        <h2 className='sm:text-[40px] max-sm:text-[25px] font-semibold mb-[19px] leading-[140%] font-[Roboto Mono] truncate uppercase'>bizning xizmatlar</h2>
                        <p className='sm:text-[18px] max-sm:text-[14px] font-medium'>Biz turli xil talabalar, ustozlar, o’quvchilar va shuningdek biznes egalariga kompyuter bilan bog’liq bo’lgan quyidagi xizmatlarni taqdim etamiz:</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:mt-0 md:gap-0 sm:gap-[34px] max-sm:gap-[34px] text-[]'>
                        <div className='w-full flex flex-col items-center  text-center md:mb-[38px]'>
                            <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                                <img src={mobileApp} alt="Mobile App" />
                            </div>
                            <div className='sm:max-w-[341px] max-sm:max-w-[300px]'>
                                <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Hujjatli ishlar</h3>
                                <p className='max-sm:text-[14px]'>Prezentatsiyalar, Mustaqil ishlar, Kurs ishlari, BMI(Diplom ishlari), Dars ishlanma</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center  text-center md:mb-[38px]'>
                            <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                                <img src={internet} alt="Internet" />
                            </div>
                            <div className='sm:max-w-[341px] max-sm:max-w-[300px]'>
                                <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Website yaratish</h3>
                                <p className='max-sm:text-[14px]'>Landing page, e-commerce, </p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center  text-center'>
                            <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                                <img src={design} alt="Design" />
                            </div>
                            <div className='sm:max-w-[341px] max-sm:max-w-[300px]'>
                                <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Imtihonlarga yordam</h3>
                                <p className='max-sm:text-[14px]'>Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat sed id. Risus.</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center  text-center'>
                            <div className='bg-2xlLightBlue rounded-[50%] w-[100px] p-[32px] mb-[30px]'>
                                <img src={marketing} alt="Marketing" />
                            </div>
                            <div className='sm:max-w-[341px] max-sm:max-w-[300px]'>
                                <h3 className='text-blue sm:text-[22px] max-sm:text-[19px] font-semibold mb-[10px]'>Tarjimonlik</h3>
                                <p className='max-sm:text-[14px]'>Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea id egestas.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='flex lg:flex-row lg:items-start md:flex-col sm:flex-col max-sm:flex-col md:items-center max-md:items-center gap-[73px] justify-between'>
                        <img src={IshJarayoni} alt="Ish jarayoni" className='w-[502px] lg:h-[794px] md:h-[494px] max-md:h-[494px] max-sm:h-[394px] object-cover   ' />
                        <div className='flex flex-col max-w-[685px] text-[#0000009c]'>
                            <h2 className='text-[40px] text-black font-semibold'>Bizning ish jarayonimiz</h2>
                            <p className='mb-[30px]'>Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada. Tristique est tellus non maecenas in egestas aliquam. Eget dolor pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.</p>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex max-sm:flex-col justify items-start gap-[23px]'>
                                    <div className='p-[20px] bg-lightBrown  rounded-[20px]'>
                                        <img src={buyurtmalar} alt="" className='max-w-[27.778px] h-[30px]' />
                                    </div>
                                    <div className='max-w-[502px] max-sm:w-full'>
                                        <h4 className='text-[18px] text-black font-semibold'>Buyurtmalarni qabul qilamiz</h4>
                                        <p>Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu</p>
                                    </div>
                                </div>
                                <div className='flex max-sm:flex-col justify items-start gap-[23px]'>
                                    <div className='p-[20px] bg-lightBlue  rounded-[20px]'>
                                        <img src={ishlar} alt="" className='max-w-[27.778px] h-[30px]' />
                                    </div>
                                    <div>
                                        <h4 className='text-[18px] text-black font-semibold'>Ishlarni rejalashtiramiz</h4>
                                        <p>Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat cras tempus vitae. Ipsum consectetur quis diam hendrerit pharetra amet scelerisque. Elementum risus aliquam quam etiam. Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing faucibu.</p>
                                    </div>
                                </div>
                                <div className='flex max-sm:flex-col justify items-start gap-[23px]'>
                                    <div className='p-[20px] bg-lightGreen  rounded-[20px]'>
                                        <img src={sifat} alt="" className='max-w-[27.778px] h-[30px]' />
                                    </div>
                                    <div>
                                        <h4 className='text-[18px] text-black font-semibold'>Sifatli va tez bajaramiz</h4>
                                        <p>Congue ridiculus at tortor mattis turpis bibendum at pulvinar viverra. Ultrices morbi amet quam nisl risus libero, sodales nibh faucibus. Sed gravida elementum auctor fermentum id sem</p>
                                    </div>
                                </div>
                                <div className='flex max-sm:flex-col justify items-start gap-[23px]'>
                                    <div className='p-[20px] bg-lightYellow  rounded-[20px]'>
                                        <img src={kelishilgan} alt="" className='max-w-[27.778px] h-[30px]' />
                                    </div>
                                    <div>
                                        <h4 className='text-[18px] text-black font-semibold'>Kelishilgan muddatda yetqizib beramiz</h4>
                                        <p>Pellentesque id pharetra, semper neque purus. Ante lacinia in ut sagittis sed sapien. In facilisi in a diam. Pellentesque arcu faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi malesuada convallis velit viverra odio. Senectus consectetur fames in sed velit, ornare. Sed arcu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home