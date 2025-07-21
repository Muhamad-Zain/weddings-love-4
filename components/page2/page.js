import { useEffect, useState } from 'react'
import style from './style.module.css'
import Slider from "react-slick";
import { fetchGalery } from '../data/firebase'
import PropTypes from 'prop-types'
import { AnimateSee } from '../animation'
import Countdown from 'react-countdown'
// import { motion, AnimatePresence } from 'framer-motion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Page2({data, id}) {
    // const [image, setImage] = useState('')
    const time = `${data?.date?.all}`
    // const WeddingDay = data?.date?.dateAll
    
    const wedingDate =  new Date(`${time}T10:00:00`)

  

    const render = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (
              <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" Time  flex w-screen px-10 sm:w-full sm:px-0  m-auto font-serif text-white p-2 justify-between">
                <div className="rounded-full border  border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Days</p>
                  </div>
                </div>
                <div className=" rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Hours</p>
                  </div>
                </div>
                <div className=" rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Minutes</p>
                  </div>
                </div>
                <div className=" rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Seconds</p>
                  </div>
                </div>
              </div>
            );
          } else {
            // Render a countdown
            return (
                <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" Time  flex w-screen px-10 sm:w-full sm:px-24  m-auto font-serif text-white p-2 justify-between">
                <div className="rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl   font-bold">
                    {days}
                    <p className="text-xs sm:text-sm  ">Days</p>
                  </div>
                </div>
                <div className=" rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl   font-bold">
                    {hours}
                    <p className="text-xs sm:text-sm  ">Hours</p>
                  </div>
                </div>
                <div className=" rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl   font-bold">
                    {minutes}
                    <p className="text-xs sm:text-sm  ">Minutes</p>
                  </div>
                </div>
                <div className=" rounded-full border border-white  bg-opacity-90 w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl   font-bold">
                    {seconds}
                    <p className="text-xs sm:text-sm  ">Seconds</p>
                  </div>
                </div>
              </div>
            );
          }
        };
        const [images, setImages] = useState([])
        // console.log(images);
        
        const [index, setIndex] = useState(0)
        // useEffect(() => {
          
        // },[]);
        useEffect(() => {
          const getImage = async () => {
            const url = await fetchGalery(id)
            setImages(url)

          }
          getImage()
          if (images.length === 0) return;
      
          const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
          }, 2500);
      
          return () => clearInterval(timer);
        }, [images]);
      
        // Ambil gambar hanya sekali
useEffect(() => {
  const getImage = async () => {
    const url = await fetchGalery(id);
    setImages(url);
  };
  getImage();
}, []); // kosong = hanya sekali saat mount

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    swipe: true
  }
    return(
        <section className='relative '>
          <div className={`${style.bg} `}>
            <div className="relative w-full h-full sm:h-screen overflow-hidden">
              <Slider {...settings}>
                {images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Slide ${i}`}
                      className="w-full h-screen sm:h-screen object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <AnimateSee>
              <div className='absolute text-white z-30 bottom-16  w-full text-center   '>
                <h3 style={{textShadow: "1px 1px #7e517e"}} className='text-opacity-95 text-5xl sm:text-6xl GVibes tracking-wider font-bold  border-b inline ' >{data?.name?.mens} & {data?.name?.grils}</h3>
                <p className='text-sm pt-2 font-semibold'>{data?.date?.resepsi}</p>
                <Countdown date={time} renderer={render}/>
              </div>
            </AnimateSee>
      {/* <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence> */}
    </div>
            {/* <div style={{backgroundImage : `url('/assets/home.jpeg')`}} className={`${style.bg} w-full h-screen  `}>
                <div className={`${style.wrap} relative z-10 h-screen  w-full flex justify-center items-center`}>
                        <div className=''>
                            <div style={{textShadow: '1px 1px #065f46 '}} className='text-center  relative z-10  '>
                              <AnimateSee>
                                <p className='font-bold tracking-[0.3rem] mb-5'>THE WEDDING OF</p>
                                <h3 className="text-5xl sm:text-7xl GVibes font-bold py-2 text-center  flex  justify-center ">
                                <span className="text-center sm:text-left italic">{data?.name?.mens}</span>
                                <span className="px-5" >&</span>
                                <span className="">{data?.name?.grils}</span>
                                </h3>
                              </AnimateSee>
                            </div>
                            <AnimateSee>
                            <Countdown date={time} renderer={render}/>
                            </AnimateSee>
                    </div>
                </div>
            </div> */}

                    <AnimateSee>
                    <p className='relative my-20 sm:mt-[20vh] w-[95%]  sm:max-w-[1000px] mx-auto text-center playfair opacity-85   text-sm  sm:text-xl italic leading-tight z-10'>
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                        supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." (QS. Ar-Rum: 21)
                    </p>
                    </AnimateSee>
        </section>
    )
}

Page2.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}