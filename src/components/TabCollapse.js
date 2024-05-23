import { useState, useRef } from 'react';
import ServicePageCard from './card/ServicePageCard';
import classes from './TabCollapse.module.css';
import { serviceData } from '@/data/serviceData';



export default function TabCollapse() {
    const [activeTab, setActiveTab] = useState('services');

    const serviceRef = useRef(null);
    const consultingRef = useRef(null);
    const solutionsRef = useRef(null);

    const openTab = (tabName, ref) => {
        setActiveTab(tabName);
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${classes['tab-container']} w-full py-20`}>
            <div  className={`${classes['tab-buttons']} flex flex-row justify-center items-center bg-[#3236b7] shadow-xl gap-10 rounded-full py-6`}>
                <button
                    className={`rounded-full ${classes['tab-button']} ${activeTab === 'services' ? classes['active'] : ''} border text-white border-white text-xs font-semibold`}
                    onClick={() => openTab('services', serviceRef)}
                >
                    All Services
                </button>
                <button
                    className={`rounded-full ${classes['tab-button']} ${activeTab === 'consulting' ? classes['active'] : ''} border text-white border-white text-xs font-semibold`}
                    onClick={() => openTab('consulting', consultingRef)}
                >
                    IT Consulting
                </button>
                <button
                    className={`rounded-full ${classes['tab-button']} ${activeTab === 'solutions' ? classes['active'] : ''} border text-white border-white text-xs font-semibold`}
                    onClick={() => openTab('solutions', solutionsRef)}
                >
                    IT Solutions
                </button>
            </div>

            <div id="services" className={`${classes['tab']} ${activeTab === 'services' ? classes['active'] : ''} my-20`}>
                <div ref={serviceRef} className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-28 gap-y-20 justify-center items-center mx-auto">
                    {serviceData.map(d => (
                        <ServicePageCard key={d.id} data={d} className={classes.card} />
                    ))}
                </div>
            </div>

            <div id="consulting" className={`${classes['tab']} ${activeTab === 'consulting' ? classes['active'] : ''} my-20`}>
                <div ref={consultingRef} className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-28 gap-y-20 justify-center items-center mx-auto">
                    {serviceData.filter(d => d.category === 'consulting').map(d => (
                        <ServicePageCard key={d.id} data={d} className={classes.card} />
                    ))}
                </div>
            </div>

            <div id="solutions" className={`${classes['tab']} ${activeTab === 'solutions' ? classes['active'] : ''} my-20`}>
                <div ref={solutionsRef} className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-28 gap-y-20 justify-center items-center mx-auto">
                    {serviceData.filter(d => d.category === 'solution').map(d => (
                        <ServicePageCard key={d.id} data={d} className={classes.card} />
                    ))}
                </div>
            </div>
        </div>
    );
}
