import Link from "next/link";
import { SiWhatsapp, SiShopee } from "react-icons/si";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchGalery } from "../data/firebase";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { AnimatedSection, AnimateGalery, AnimateSee } from "../animation";



export default function Page9({data, id}) {
    const [image, setImage] = useState([])

    useEffect(() =>{
        const fetch = async () => {
            const data = await fetchGalery(id)
            setImage(data)
        }
        fetch()
    },[])

    const [open, setOpen] = useState(false)
    const [imgIndex, setImgIndex] = useState(0)

    const handleImg = (index) => {
        setOpen(true)
        setImgIndex(index)
    }

    const closeBtn = () => setOpen(false)
    const prevImage = () => {
        setImgIndex((prev) => (prev - 1 + image.length ) % image.length)
    }
    const nextImage = () => {
        setImgIndex((next) => (next + 1  ) % image.length)
    }

    return(
        <section className=''>
            <AnimatedSection>
            <h3 className='text-center text-4xl font-extrabold -mb-3 playfair pt-20 '>Capture</h3>
            <h3 className="GVibes text-center text-4xl mb-10 border-b-2 m-auto border-[#7e517e] w-72  ">Moment</h3>
            <div className="w-full px-4 py-6">
  <div className="max-w-md mx-auto space-y-4">
    {image.map((url, index) => {
      // Baris penuh tiap kelipatan 3 (0, 3, 6, ...)
      if (index % 3 === 0) {
        return (
          <AnimateSee key={index}>
            <div
              className="w-full h-52 overflow-hidden mx-auto rounded-lg shadow-sm"
              onClick={() => handleImg(index)}
            >
              <img
                src={url}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateSee>
        );
      }

      // Dua kolom horizontal
      if (index % 3 === 1) {
        return (
          <div key={index} className="flex gap-4 w-full justify-center">
            {/* Gambar kiri */}
            <AnimateGalery>
              <div
                className="w-full h-40 overflow-hidden rounded-lg shadow-sm"
                onClick={() => handleImg(index)}
              >
                <img
                  src={url}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateGalery>

            {/* Gambar kanan */}
            {image[index + 1] && (
              <AnimateGalery>
                <div
                  className="w-full h-40 overflow-hidden rounded-lg shadow-sm"
                  onClick={() => handleImg(index + 1)}
                >
                  <img
                    src={image[index + 1]}
                    alt={`Foto ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimateGalery>
            )}
          </div>
        );
      }

      // Lewati gambar yang sudah ditampilkan sebagai pasangan
      return null;
    })}
  </div>
</div>

            <div className=' p-2'>
                {/* {image && image.length > 0 ? image.map((url, index) => (
                <AnimateSee key={index} >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                        <img 
                        key={index} 
                        onClick={() => handleImg(index)}
                        src={url}  
                        width={400}
                        height={400}
                        className='w-full h-40 object-cover rounded-lg shadow-sm' 
                        style={{backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center'}} 
                        />
                    </div>
                </AnimateSee>
                )):

                null} */}
                
                {/* {open && (
                    <section className="h-screen fixed flex z-30 justify-center items-center bg-black bg-opacity-50 p-5 inset-0 w-full">
                        <div className="relative ">
                            <button 
                                onClick={closeBtn}
                                className="absolute top-2 sm:top-2  right-3 p-2 bg-black bg-opacity-70 rounded-full">
                                <CgCloseO className="fill-current text-xl" />
                            </button>
                            <div className="absolute top-1/2 flex justify-between w-full">
                            <button 
                                onClick={prevImage}
                                className="w-10 h-20 ml-2 bg-black bg-opacity-70 rounded-xl flex justify-center items-center">
                                <FaAngleDoubleLeft className="fill-current text-xl"/>
                            </button>
                            <button 
                                onClick={nextImage}
                                className="w-10 h-20 mr-2 bg-black bg-opacity-70 rounded-xl flex justify-center items-center">
                                <FaAngleDoubleRight />
                            </button>
                            </div>
                            <div className="w-[92vw] h-[82vh] sm:w-[80vw] sm:h-[90vh] border-4 border-double rounded-xl  flex justify-center bg-black bg-opacity-50">
                                <img src={image[imgIndex]} className=" sm:w-auto sm:h-auto w-auto h-auto object-cover bg-center bg-cover rounded-xl  " />
                            </div>
                        </div>
                    </section>
                )} */}
            </div>
            </AnimatedSection>
            {/* <div className='text-center pt-28 text-sm italic '>
                <p>
                    Merupakan suatu kebaagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami. <br />
                    Atas do'a dan restunya kami ucapkan terima kasih. 
                </p>
                <p className='font-bold italic pt-10' >Dari Kami yang berbahagia :</p>
                <h3 className='playfair text-3xl italic'>{data?.name?.mens} & {data?.name?.grils}</h3>
            </div>
            <div className="pt-20 pb-10 m-auto">
                <p className="text-center text-xs py-2" >Create Invitation by i-vee</p>
                <div className="flex text-sm w-10 justify-around m-auto " >
                <Link href=''>
                    <SiWhatsapp />
                </Link>
                <Link href=''>
                    <SiShopee />
                </Link>
                </div>
            </div> */}
        </section>
    )
}
Page9.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}