import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="w-full h-14 flex justify-between px-4 md:px-4 items-center" style={{ position: 'relative', zIndex: 1 }}>
                <div>
                    <Link to="/" >
                        <img 
                        src='https://www.carlogos.org/car-logos/tesla-logo-2007-wordmark-download.png'
                        className="w-16"
                        alt="Logo" />
                    </Link>
                </div>
                <ul className="md:flex hidden font-semibold">
                    <li className="mx-[10px]"><Link to="vehicles">Vehicles</Link></li>
                    <li className="mx-[10px]"><Link to="Energy">Energy</Link></li>
                    <li className="mx-[10px]"><Link to="Charging">Charging</Link></li>
                    <li className="mx-[10px]"><Link to="Discover">Discover</Link></li>
                    <li className="mx-[10px]"><Link to="Shop">Shop</Link></li>
                </ul>
                <div className="md:flex hidden p-4">
                    <img
                        src='https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Background.png'
                        className="w-7 mx-[10px]"
                        alt='question' />
                    <img
                        src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3868264/earth-icon-md.png'
                        className="w-7 mx-[10px]"
                        alt='earth' />
                    <img
                        src='https://static.wixstatic.com/media/710aa2_6684568f236a4c099e2200f3f33ba547~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_auto/user.png'
                        className="w-7 mx-[10px]"
                        alt='user' />
                </div>
                <div className="md:hidden px-2 py-2 bg-blue-300 text-black rounded font-bold">
                    Menu
                </div>
            </nav>

            {/* Model 3 */}
            <div className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-5xl font-semibold text-center py-12">
                <p>Model 3</p>
                <div className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-2xl font-medium text-center">
                    <p>$7,500 Federal Tax Credit Available</p>
                    <p>From $29,990 After Est. Savings</p>
                </div>
            </div>
            <div style={{ position: 'absolute', top: '570px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px' }}> 
                <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
                    Order Now
                </div>
                <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
                    Demo Drive
                </div>
            </div>
            {/*Model Y */}
            <div style={{ height: '60vh' }}></div>
            <div style={{ width: '100%' }}>
                <img 
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" 
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
                    <div style={{ position: 'absolute', top: '4150px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
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
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'4584px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-4xl font-semibold text-center">Solar Panel</p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-white font-sans text-2xl font-medium text-center">
                            <p>Schedule a Virtual Consultation</p> 
                        </div>  
            </div>
                    <div style={{ position: 'absolute', top: '5070px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
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
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'768px',top:'5520px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-4xl font-semibold text-center">Solar Roof</p>
                        <div className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-2xl font-medium text-center">
                            <p>Produce Clean Energy From Your Roof</p> 
                        </div>  
            </div>
                    <div style={{ position: 'absolute', top: '5990px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
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
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'738px',top:'6428px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-4xl font-bold text-center">Powerwall</p>
            </div>
                    <div style={{ position: 'absolute', top: '6999px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
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
            <div style={{position: 'absolute',width: '497px',height:'167px',left:'738px',top:'7358px', transform: 'translateX(-50%)'}}>
            <p className="w-full h-auto flex flex-wrap flex-col text-black font-sans text-4xl font-semibold text-center">Accessories</p>
            </div>
                    <div style={{ position: 'absolute', top: '7800px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px'}}> 
                        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[244px] text-center">
                            Order Now
                        </div>
                    </div>
            </div>

            {/*footer*/}
            <div style={{ height: '0vh' }}>
  <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 bg-black text-white" 
    style={{height: '1289px', width: '1480px'}}
  >
    <div style={{ position: 'absolute', width: '727px', height: '167px', left: '738px', top: '8100px', transform: 'translateX(-50%)' }}>
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