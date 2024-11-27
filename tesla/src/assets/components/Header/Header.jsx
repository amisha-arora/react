import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navlinks from '../navbar';

function Header() {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="w-full h-14 flex justify-between items-center px-4 md:px-4" style={{ position: 'relative', zIndex: 1 }}>
    <div className="w-1/4">
        <Link to="/" >
            <img 
            src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20278.7%2036.3%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M238.1%2014.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3%207.3h27c3.8-.7%206.5-4.1%207.3-7.3H237c.8%203.2%203.6%206.5%207.3%207.3M216.8%2036.3c3.5-1.5%205.4-4.1%206.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9%207.2h25c3.8-1.1%206.9-4%207.7-7.1H125v21.4h32.4V29H132c-4%201.1-7.4%203.8-9.1%207.3h41.5V14.4H132l-.1-7.2M70.3%207.3h27c3.8-.7%206.6-4.1%207.3-7.3H62.9c.8%203.2%203.6%206.5%207.4%207.3M70.3%2021.6h27c3.8-.7%206.6-4.1%207.3-7.3H62.9c.8%203.2%203.6%206.5%207.4%207.3M70.3%2036.3h27c3.8-.7%206.6-4.1%207.3-7.3H62.9c.8%203.2%203.6%206.6%207.4%207.3M0%20.1c.8%203.2%203.6%206.4%207.3%207.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1%206.5-4%207.3-7.2V0L0%20.1%22%20class%3D%22color5e5e5e%20svgShape%22%2F%3E%3C%2Fsvg%3E'
            className="w-4/12 mx-[32px] px-18"
            alt="Logo" />
        </Link>
    </div>
    <ul className="flex-grow flex justify-center font-semibold text-white w-full gap-8">
        <Navlinks/>
    </ul>
    <div className="w-1/4 flex justify-end items-center p-4">
                    <img
                    src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22%23fff%22%20class%3D%22color000000%20svgShape%22%20data-name%3D%22Layer%202%22%3E%3Cg%20class%3D%22color000000%20svgShape%22%20data-name%3D%22menu-arrow-circle%22%3E%3Crect%20width%3D%2224%22%20height%3D%2224%22%20class%3D%22color000000%20svgShape%22%20opacity%3D%220%22%20transform%3D%22rotate(180%2012%2012)%22%2F%3E%3Cpath%20d%3D%22M12%202a10%2010%200%201%200%2010%2010A10%2010%200%200%200%2012%202zm0%2018a8%208%200%201%201%208-8%208%208%200%200%201-8%208z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3Cpath%20d%3D%22M12%206a3.5%203.5%200%200%200-3.5%203.5%201%201%200%200%200%202%200A1.5%201.5%200%201%201%2012%2011a1%201%200%200%200-1%201v2a1%201%200%200%200%202%200v-1.16A3.49%203.49%200%200%200%2012%206z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2217%22%20r%3D%221%22%20class%3D%22color000000%20svgShape%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                        className="w-6 mx-[5px]"
                        alt='question' />
                    <img
                       src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M151%20216H44.3c-2.7%2013.5-4.1%2027.4-4.1%2041.6%200%2025.8%204.6%2050.5%2013.1%2073.4h96.9c-3.1-36.3-2.8-74.9.8-115zM73.1%20371c24.5%2038.7%2061.2%2069.2%20104.6%2086-10.1-26.7-17.7-55.5-22.7-86H73.1zM279.9%2044.9c-7.8-.9-15.8-1.3-23.8-1.3-9.8%200-19.5.7-28.9%201.9-3.3%209.7-20.6%2061.4-31%20130.5H320c-12.2-62.2-31.6-111.2-40.1-131.1zM360.6%20176h94.9c-23.4-56.1-70.2-100.3-128.3-120.5%2010.5%2028%2024%2069.9%2033.2%20119.6.1.3.2.6.2.9zM56.5%20176h99.2c7.3-51.4%2018.3-93.7%2025.8-119.3-56.5%2020.7-102%2064.2-125%20119.3zM467.8%20216H366.7c4.6%2038.6%205.3%2076%202.1%20111.4l-.3%203.6h90.3c8.5-22.9%2013.1-47.6%2013.1-73.4%200-14.2-1.4-28.1-4.1-41.6zM226.6%20469.6c9.6%201.3%2019.5%202%2029.5%202%209.7%200%2019.3-.7%2028.7-1.9%2018.3-31.9%2030-65.4%2037-98.7H195.7c5.9%2033.5%2015.7%2067%2030.9%2098.6zM191.2%20216c-3.3%2034.6-4.5%2074.1-.8%20115h137.7c4.4-40.8%202.7-80.3-1.7-115H191.2zM336.3%20456.3c42.6-17%2078.5-47.1%20102.7-85.3h-76.3c-5.7%2030-14.5%2058.5-26.4%2085.3z%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M436.9%2077.9C388.6%2029.9%20324.3%203.5%20256%203.5S123.5%2029.9%2075.2%2077.9c-48.4%2048-75%20111.8-75%20179.7s26.6%20131.7%2075%20179.7c48.3%2047.9%20112.5%2074.4%20180.8%2074.4s132.5-26.4%20180.8-74.4c48.4-48%2075-111.8%2075-179.7s-26.6-131.7-74.9-179.7zm18.7%2098.1h-94.9c-.1-.3-.1-.6-.2-.9-9.2-49.7-22.7-91.5-33.2-119.6%2058.1%2020.2%20104.9%2064.4%20128.3%20120.5zM227.1%2045.5c9.5-1.3%2019.1-1.9%2028.9-1.9%208.1%200%2016%20.5%2023.8%201.3%208.6%2019.9%2027.9%2068.9%2040.1%20131.1H196.1c10.4-69.2%2027.7-120.9%2031-130.5zM40.2%20257.6c0-14.2%201.4-28.1%204.1-41.6H151c-3.7%2040.1-4%2078.7-.9%20115H53.3c-8.5-22.9-13.1-47.6-13.1-73.4zM73.1%20371h82c5%2030.5%2012.5%2059.3%2022.7%2086-43.5-16.8-80.2-47.3-104.7-86zm82.6-195H56.5c23-55.1%2068.5-98.6%20125-119.3C174%2082.3%20163%20124.6%20155.7%20176zm129.1%20293.7c-9.4%201.2-19%201.9-28.7%201.9-10%200-19.8-.7-29.5-2-15.2-31.6-25-65.1-30.8-98.6h126.1c-7.1%2033.3-18.9%2066.8-37.1%2098.7zM328.1%20331H190.4c-3.7-40.9-2.5-80.4.8-115h135.2c4.4%2034.7%206.1%2074.2%201.7%20115zm8.2%20125.3c11.8-26.7%2020.7-55.2%2026.4-85.3H439c-24.1%2038.2-60.1%2068.3-102.7%2085.3zM368.5%20331l.3-3.6c3.2-35.4%202.5-72.8-2.1-111.4h101.1c2.7%2013.5%204.1%2027.4%204.1%2041.6%200%2025.8-4.6%2050.5-13.1%2073.4h-90.3z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3C%2Fsvg%3E'
                        className="w-5 mx-[5px]"
                        alt='earth' />
                    <img
                        src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22Layer_1%22%20x%3D%220%22%20y%3D%220%22%20enable-background%3D%22new%200%200%2016%2016%22%20version%3D%221.1%22%20viewBox%3D%220%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20id%3D%22path7%22%20fill%3D%22%23fff%22%20stroke%3D%22none%22%20d%3D%22M8%20.986A7.022%207.022%200%200%200%20.986%208c0%201.874.73%203.635%202.055%204.959A6.965%206.965%200%200%200%208%2015.014%207.022%207.022%200%200%200%2015.014%208%207.022%207.022%200%200%200%208%20.986zm0%201A6.021%206.021%200%200%201%2014.014%208a5.984%205.984%200%200%201-1.606%204.074%205.836%205.836%200%200%200-2.564-1.754%202.999%202.999%200%200%200%201.11-2.326A2.997%202.997%200%200%200%207.94%205.006a2.997%202.997%200%200%200-2.988%203.012c0%20.929.436%201.75%201.104%202.298a5.846%205.846%200%200%200-2.526%201.698A5.964%205.964%200%200%201%201.986%208%206.021%206.021%200%200%201%208%201.986zm-.035%204.02c1.097%200%201.988.892%201.988%202.012A1.988%201.988%200%200%201%208.03%2010c-.029%200-.057-.006-.086-.006-.025%200-.049.005-.074.006a1.994%201.994%200%200%201-1.916-2.006c0-1.096.892-1.988%202.012-1.988zm-.096%204.992c.024.001.048.008.072.008h.024c.022%200%20.04-.007.062-.008a4.84%204.84%200%200%201%203.643%201.752A5.963%205.963%200%200%201%208%2014.014a5.965%205.965%200%200%201-3.742-1.31%204.848%204.848%200%200%201%203.611-1.706z%22%20class%3D%22color231f20%20svgShape%22%2F%3E%3C%2Fsvg%3E'
                        className="w-6 mx-[5px]"
                        alt='user' />
                </div>
                <div className="md:hidden px-2 py-2 bg-blue-300 text-black rounded font-bold">
                    Menu
                </div>
            </nav>

            {/* Model Y */}
            <div className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-6xl font-semibold text-center py-12">
                <p>Model Y</p>
                <div className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-2xl font-semibold text-center">
                    <p className="underline">$0 Due at Signing</p>
                    <p className='text-xl'>From $31,490</p>
                </div>
            </div>
            <div style={{ position: 'absolute', top: '650px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px' }}> 
                <div className="bg-blue-500 text-white px-15 py-2 rounded font-semibold w-[274px] text-center">
                    Order Now
                </div>
                <div className="bg-white text-back px-14 py-2 rounded font-semibold w-[274px] text-center">
                    Demo Drive
                </div>
            </div>
            {/*Model Y */}
            <div style={{ height: '60vh' }}></div>
            <div style={{ width: '100%' }}>
                <img 
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg" 
                    alt="New Image" 
                    style={{ 
                        display: 'block', 
                        width: '100%', 
                        height: 'auto' 
                    }} 
                />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}> 
                    <div>
                    <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-5xl font-semibold" >Model Y </p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-2xl font-medium">
                            <p>1.99% APR Financing Ending August 31</p>
                            <p>From $31,490</p>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', top: '570px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Demo Drive
                        </div>
                    </div>
                </div>
            </div>
           
            {/*Model X */}

            <div style={{ height: '0vh' }}></div>
            <div style={{ width: '100%' }}>
                <img 
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-v2.jpg" 
                    alt="New Image" 
                    style={{ 
                        display: 'block', 
                        width: '100%', 
                        height: 'auto' 
                    }} 
                />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'1824px', transform: 'translateX(-50%)'}}>
                        <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-5xl font-semibold text-center">Model X</p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-2xl font-medium text-center">
                            <p>From $65,990</p>
                            <p>After $14,000 Est. Savings</p>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', top: '2380px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Demo Drive
                        </div>
                    </div>
                </div>

                {/*Model S*/}
                <div style={{ height: '0vh' }}></div>
                <div style={{ width: '100%' }}>
                    <img 
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-v2.jpg" 
                        alt="New Image" 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: 'auto' 
                        }} 
                    />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'2724px', transform: 'translateX(-50%)'}}>
                        <p className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-5xl font-semibold text-center">Model S</p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-2xl font-medium text-center">
                            <p>From $68,490</p>
                            <p>After $6,500 Est. Savings</p>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', top: '3280px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Demo Drive
                        </div>
                    </div>
                </div>

                {/* CyberTruck*/}

                <div style={{ height: '0vh' }}></div>
                <div style={{ width: '100%' }}>
                    <img 
                        src="https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg" 
                        alt="New Image" 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: 'auto' 
                        }} 
                    />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'3654px', transform: 'translateX(-50%)'}}>
                <img
                src="https://vectorseek.com/wp-content/uploads/2021/12/Cybertruck-Logo-Vector.png"
                />        
            </div>
                    <div style={{ position: 'absolute', top: '4350px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Learn More
                        </div>
                    </div>
                </div>

                {/*Solar Panel*/}

                <div style={{ height: '0vh' }}></div>
                <div style={{ width: '100%' }}>
                    <img 
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop" 
                        alt="New Image" 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: 'auto' 
                        }} 
                    />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'4674px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-5xl font-semibold text-center">Solar Panel</p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-3xl font-medium text-center underline">
                            <p>Schedule a Virtual Consultation</p> 
                        </div>  
            </div>
                    <div style={{ position: 'absolute', top: '5300px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Learn More
                        </div>
                    </div>
                </div>

            {/*Solar Roof*/}
            <div style={{ height: '0vh' }}></div>
                <div style={{ width: '100%' }}>
                    <img 
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global" 
                        alt="New Image" 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: 'auto' 
                        }} 
                    />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'5500px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-5xl font-semibold text-center">Solar Roof</p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-2xl font-medium text-center">
                            <p>Produce Clean Energy From Your Roof</p> 
                        </div>  
            </div>
                    <div style={{ position: 'absolute', top: '6150px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Learn More
                        </div>
                    </div>
                </div>

                {/*Powerwall*/}

                <div style={{ height: '0vh' }}></div>
                <div style={{ width: '100%' }}>
                    <img 
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg" 
                        alt="powerwall" 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: 'auto' 
                        }} 
                    />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'738px',top:'6498px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-5xl font-bold text-center">Powerwall</p>
            </div>
                    <div style={{ position: 'absolute', top: '7100px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                            Order Now
                        </div>
                        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                            Learn More
                        </div>
                    </div>
                </div>
            
            {/*Accessories*/}

            <div style={{ height: '0vh' }}></div>
                <div style={{ width: '100%' }}>
                    <img 
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" 
                        alt="powerwall" 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: 'auto' 
                        }} 
                    />
                <div style={{ 
                    position: 'absolute', 
                    top: '130%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    textAlign: 'center', 
                    zIndex: 1 
                }}>
            </div>
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'738px',top:'7508px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-5xl font-semibold text-center">Accessories</p>
            </div>
                    <div style={{ position: 'absolute', top: '7950px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[244px] text-center">
                            Order Now
                        </div>
                    </div>
            </div>

            {/*footer*/}
            <div style={{ height: '0vh' }}>
  <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 bg-black text-white" 
    style={{height: '1289px', width: '1515px'}}
  >
    <div style={{ position: 'absolute', width: '727px', height: '167px', left: '738px', top: '8400px', transform: 'translateX(-50%)' }}>
      <p className="w-full h-auto w-100 flex flex-wrap flex-col items-center text-center py-3 font-semibold">
        $7,500 Federal Tax Credit available for eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive not eligible.
      </p>
      <p className="w-full h-auto w-100 flex flex-wrap flex-col items-center text-center py-3 font-semibold">
        Price before estimated savings is $42,490, excluding taxes and fees. Subject to change. Estimated savings includes $5,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Terms apply.
      </p>
      <p className="w-full h-auto w-100 flex flex-wrap flex-col items-center text-center py-3 font-semibold">
        Price before estimated savings is $44,990, excluding taxes and fees. Subject to change. Estimated savings includes $6,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Terms apply.
      </p>
      <p className="w-full h-auto w-100 flex flex-wrap flex-col items-center text-center py-3 font-semibold">
        Price before estimated savings is $79,990, excluding taxes and fees. Subject to change. Estimated savings includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Terms apply.
      </p>
      <p className="w-full h-auto w-100 flex flex-wrap flex-col items-center text-center py-3 font-semibold">
        Price before estimated savings is $74,990, excluding taxes and fees. Subject to change. Estimated savings includes $6,500 in gas savings estimated over five years and state incentives, available to eligible buyers and subject to MSRP caps. Terms apply.
      </p>
      <ul className="flex font-semibold text-center w-full pt-8 flex-row justify-center space-x-4 md:px-42">
        <li className="mx-[10px] mt-4">Tesla © 2024</li>
        <li className="mx-[10px] mt-4">Privacy & Legal</li>
        <li className="mx-[10px] mt-4">Vehicle Recalls</li>
        <li className="mx-[10px] mt-4">Contact</li>
        <li className="mx-[10px] mt-4">News</li>
        <li className="mx-[10px] mt-4">Get Updates</li>
        <li className="mx-[10px] mt-4">Locations</li>
      </ul>
    </div>
  </div>
</div>

            






                  

           

                    
        
        </>
    );
}

export default Header;