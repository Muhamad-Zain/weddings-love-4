'use client'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { fetchBg } from '../data/firebase'
import { LuPanelTopOpen } from "react-icons/lu";
// import Bg from '../assets/bghome.jpeg'



export default function Page1({btn, name, data, id}) {
    const [disable, setDisable] = useState(false)
    const [image, setImage] = useState('')
    const [gone, setGone] = useState(false)
    
    const btnLocal = (e) => {
        setDisable(true)
        if(disable && e.propertyName === 'transform'){
            setGone(true)
        }
    }

    useEffect(() => {
        const getImage = async () => {
            
            const url = await fetchBg(`${id}/hero`)
            setImage(url)
        }
        getImage()

    },[])
    return(
        <section>
            {!gone && (
                <div onAnimationEnd={btnLocal} style={{backgroundImage : `url(${image})`}} className= {`${style.bgHero} ${disable ? '-translate-y-full   ' : "translate-y-0"}`} >
            <div className='relative z-20 w-full  text-center'>
                <h3 className='tracking-[0.5em]  text-sm pb-5'>The Wedding Of</h3>
                <div  className='text-5xl sm:text-6xl italic py-1 GVibes tracking-wide '>
                    {/* <h1 className='mr-24 mb-2 sm:mb-0 sm:mr-0'>{data?.name?.mens} </h1> <p className='sm:mx-4'>&</p> <h1 className='ml-24 mt-2 sm:mt-0 sm:ml-0'> {data?.name?.grils}</h1> */}
                    <h3 style={{textShadow:'2px 2px black'}}>{data?.name?.mens} & {data?.name?.grils}</h3>
                </div> 
                {/* <p className='text-sm'>{data?.date?.resepsi}</p> */}
                <div className='mt-[40vh] '>
                    <p className='text-sm'>kpd Bpk/Ibu/Saudara/i</p>
                    <h3 className='font-bold py-3 sm:py-5 playfair'>{name ? name : 'Nama Tamu'}</h3>
                    <div className='flex justify-center text-black'>
                        <button onClick={()=> {btnLocal(), btn()}} disabled={disable} className='flex justify-center items-center bg-gray-200 shadow-md shadow-black p-2 px-4 border border-gray-950 rounded-full playfair'>
                            <LuPanelTopOpen className='mr-2' />
                            Buka Undangan
                        </button>
                    </div>
                    <p className='text-xs italic  my-1'>Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
                </div>
            </div>
        </div>
            )}
        </section>

    )
}

Page1.propTypes = {
    btn: PropTypes.func,
    name: PropTypes.string,
    data: PropTypes.string,
    id: PropTypes.string
}