import React, { useEffect, useState } from 'react'
import bgImage1 from '../assets/about/counnter-bg-shape.png'
import CountUp from 'react-countup'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useInView } from 'react-intersection-observer';



export default function ServCount ({countData}){
    console.log('countData: ', countData);
    const [countingStarted, setCountingStarted] = useState(false);

    const [ref, inView] = useInView({
        threshold: 0.2, // Adjust as per your requirement
        triggerOnce: true // To only trigger once when element comes into view
    });
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    useEffect(() => {
        if (inView) {
            Aos.init({ duration: 1000 });
        }
    }, [inView]);
    useEffect(() => {
        if (inView && !countingStarted) {
            setCountingStarted(true);
        }
    }, [inView, countingStarted]);
    return(
        <div className='bg-[#3236b7] py-14 rounded-full'>
        <div ref={ref} className=' flex flex-row   justify-center' style={{
            backgroundImage: `url(${bgImage1})`,
        }}>
            <div className='grid lg:grid-cols-4  justify-center gap-20 '>
                {countData.map(count => (
                    <div data-aos='fade-up' data-aos-delay='200' data-aos-once='true' className='flex flex-row gap-4'>
                        <div >
                            {/* <img src={count1} className='' /> */}
                        </div>
                        <div >
                            <h3 className='text-4xl text-white  font-semibold'>{count.plus ? '+' : '-'}
                                {countingStarted && <CountUp start={count.start} end={count.end} duration={count.duration} />}
                                %
                            </h3>
                            <p className='text-lg text-white font-semibold'>{count.title }</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}