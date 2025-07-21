'use client'
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AnimatedSection, AnimateSee } from "../animation";
import style from './style.module.css'


export default function Page5({data}) {
    const time = `${data?.date?.all}`
    // const WeddingDay = data?.date?.dateAll
    
    const wedingDate =  new Date(`${time}T10:00:00`)
    
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set state untuk render hanya di klien
    }, []);

    const renderer = ({days, hours, minutes, seconds, completed }) => {
      if (completed) {
                  // Render a completed state
                  return (
                    <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" Time  flex w-screen px-10 sm:w-full sm:px-0  m-auto font-serif text-[#7e517e] py-5 justify-between">
                      <div className="rounded-full border  border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          <p>00</p>
                          <p className="text-xs sm:text-sm  ">Days</p>
                        </div>
                      </div>
                      <div className=" rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          <p>00</p>
                          <p className="text-xs sm:text-sm  ">Hours</p>
                        </div>
                      </div>
                      <div className=" rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          <p>00</p>
                          <p className="text-xs sm:text-sm  ">Minutes</p>
                        </div>
                      </div>
                      <div className=" rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          <p>00</p>
                          <p className="text-xs sm:text-sm  ">Seconds</p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // Render a countdown
                  return (
                      <><div style={{ fontSize: '2rem', textAlign: 'center' }} className=" Time  flex w-screen px-10 sm:w-full sm:px-20  m-auto font-serif text-[#7e517e] py-5 justify-between">
                      <div className="rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          {days}
                          <p className="text-xs sm:text-sm  ">Days</p>
                        </div>
                      </div>
                      <div className=" rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          {hours}
                          <p className="text-xs sm:text-sm  ">Hours</p>
                        </div>
                      </div>
                      <div className=" rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          {minutes}
                          <p className="text-xs sm:text-sm  ">Minutes</p>
                        </div>
                      </div>
                      <div className=" rounded-full border border-[#7e517e]  bg-opacity-90 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center">
                        <div className="leading-6 text-4xl sm:text-4xl  font-bold">
                          {seconds}
                          <p className="text-xs sm:text-sm  ">Seconds</p>
                        </div>
                      </div>
                    </div>
                      <div className="w-full flex justify-center">
                        <button onClick={handleSaveDate} className="text-xl bg-[#7e517e] bg-opacity-80 border border-[#7e517e] text-gray-100 p-2 rounded-lg">Save Date</button>
                      </div></>
                  );
                }
              };
        
      // };
      const handleSaveDate = () => {
        const startDate = wedingDate.toISOString().replace(/-|:|\.\d\d\d/g,"").split(".")[0] + "Z"; // format UTC
        const endDate = new Date(wedingDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g,"").split(".")[0] + "Z"; // 2 jam setelah acara
        const eventTitle = `Wedding of ${data?.name?.mens} & ${data?.name?.grils}`;
        const eventDetails = `Join us in celebrating the wedding of ${data?.name?.mens} & ${data?.name?.grils}.`;
        const eventLocation = "Bojonegoro, Indonesia";
      
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;
        
        window.open(calendarUrl, '_blank');
      };
      
    return(
        <section>
          <AnimatedSection>
            <div 
            className={style.bgInformation}>
              <div className="relative z-10 bg-[#eca8ec] py-10">
                  <div className="text-center text-4xl sm:text-5xl pb-10">
                    <h3 className="font-extrabold -mb-3 playfair ">We Are</h3>
                    <h3 className="GVibes border-b-2 border-[#7e517e] w-72 m-auto">Getting Married</h3>
                  </div>
                  <div className="text-center px-5 opacity-80 italic pt-10">
                    <p>
                    Siang dan malam berganti begitu cepat,
                    diantara saat saat mendebarkan yang belum pernah kami rasakan sebelum nya. 
                    kami nantikan kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji suci kami di hari yang bahagia:
                    </p>
                  </div>
                  <AnimateSee>
                  <Countdown date={time} renderer={renderer} />
                  </AnimateSee>
              </div>

            </div>
            </AnimatedSection>
        </section>
    )
}
Page5.propTypes = {
  data: PropTypes.string
}