import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { useState } from 'react';
import mission from "@/assets/about/newimages/mission.jpg"
import vision from "@/assets/about/newimages/visionnew.jpg"
import values from "@/assets/about/newimages/values.jpg"

import Image from "next/image";
import classes from './TabPanel.module.css';


export default function TabPanel() {
    const [activeTab, setActiveTab] = useState('mission');
    console.log('activeTab: ', activeTab);

    const openTab = (tabName) => {
        console.log('tabName: ', tabName);
        setActiveTab(tabName);
    };

    return (
        <div className={`${classes['tab-container']} w-full py-20`}>
            <div className={`${classes['tab-buttons']} flex flex-row justify-center items-center py-10 `}>
                <button className={`${classes['tab-button']} ${activeTab === 'mission' && `${classes['active']}`}`} onClick={() => openTab('mission')}>Our Mission</button>
                <button className={`${classes['tab-button']} ${activeTab === 'vision' && `${classes['active']}`}`} onClick={() => openTab('vision')}>Our Vision</button>
                <button className={`${classes['tab-button']} ${activeTab === 'values' && `${classes['active']}`}`} onClick={() => openTab('values')}>Our Values</button>
            </div>

            <div id="mission" className={`${classes['tab']} ${activeTab === 'mission' && `${classes['active']}`}`}>
                <div className='grid grid-cols-2 items-start gap-5 mx-10  '>
                    <div>
                        <Image src={mission} width={500} height={500} />
                    </div>
                    <div className='flex flex-col gap-6 mt-20'>
                        <h2 className="text-[30px] font-medium">Our Mission</h2>
                        <p className="text-[17px]">Your Success is Our Mission.</p>
                        <div className={`${classes['content-row']}`}>
                            Empowering businesses to thrive in the digital age with exceptional digital transformation solutions that unlock new possibilities.</div>
                    </div>
                </div>
            </div>

            <div id="vision" className={`${classes['tab']} ${activeTab === 'vision' && `${classes['active']}`}`}>
                <div className='grid grid-cols-2 items-start gap-5 mx-10 '>
                    <Image src={vision} width={500} height={500} />
                    <div className='flex flex-col gap-6 mt-20'>
                        <h2 className="text-[30px] font-medium">Our Vision</h2>
                        <p className="text-[17px]">We envision a limitless future, igniting growth, enabling success, and unlocking unlimited possibilities.

                        </p>
                        <div className={`${classes['content-row']}`}>
                        </div>
                    </div>
                </div>
            </div>

            <div id="values" className={`${classes['tab']} ${activeTab === 'values' && `${classes['active']}`}`}>
                <div className='grid grid-cols-2 items-start gap-10 mx-10 '>
                    <div className=''>
                        <Image src={values} width={500} height={500} />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className="text-[30px] font-medium">Our Values</h2>
                        <p className="text-[17px]"><span className='text-[#3236b7] font-semibold'>Customer-Centricity:</span> We put our clients first, understanding your needs and ensuring success.</p>
                        <div className={`${classes['content-row']}`}>
                        <span className='text-[#3236b7] font-semibold'>Pioneering Innovation:</span> We thrive on innovation, constantly seeking new ideas, technologies, and approaches to drive transformation.
                        </div>
                        <div className={`${classes['content-row']}`}>
                        <span className='text-[#3236b7] font-semibold'>Building Trust, Delivering Results:</span> We uphold the highest ethical standards, maintaining transparency, honesty, and accountability in all our interactions.
                        </div>
                        <div className={`${classes['content-row']}`}>
                        <span className='text-[#3236b7] font-semibold'>Together We Rise:</span> We foster strong partnerships with our clients, employees, and stakeholders to achieve success. </div>
                        <div className={`${classes['content-row']}`}>
                        <span className='text-[#3236b7] font-semibold'>High Quality, Unmatched Results:</span> We meticulously craft each solution with the utmost care and utilize the latest advancements to ensure unmatched results. </div>
                        <div className={`${classes['content-row']}`}>
                        <span className='text-[#3236b7] font-semibold'> Always Evolving & Ahead:</span> We embrace continuous learning, investing in our people, and staying ahead of the curve in a fast-paced industry. </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
