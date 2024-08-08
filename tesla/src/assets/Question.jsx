import React from 'react';

function Question() {
    return (
        <>  
            {/* Background Image */}
            <div className="relative w-full bg-white text-black" style={{ height: '1060px' }}>
            <div className="relative w-full text-white" style={{ height: '280px' }}>
                <img 
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Support-Main-Hero-01-Desktop.jpg" 
                    alt="Background" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            {/* Navigation Bar */}
            <nav className="w-full h-10 flex justify-between px-4 md:px-4 items-center" style={{ position: 'relative', zIndex: 1 }}>
                <div>
                    <img 
                        src='https://static.wixstatic.com/media/8bd7bd_b17690d37c6f471ca0f58cb34f4d72b6~mv2.png/v1/crop/x_452,y_459,w_382,h_153/fill/w_469,h_188,al_c,lg_1/8bd7bd_b17690d37c6f471ca0f58cb34f4d72b6~mv2.png'
                        className="w-16"
                        alt="Logo"
                    />
                </div>
                <ul className="md:flex hidden font-semibold">
                    <li className="mx-[10px]">Model S</li>
                    <li className="mx-[10px]">Model 3</li>
                    <li className="mx-[10px]">Model X</li>
                    <li className="mx-[10px]">Model Y</li>
                    <li className="mx-[10px]">Cybertruck</li>
                    <li className="mx-[10px]">Solar Roof</li>  
                    <li className="mx-[10px]">Solar Panel</li>
                    <li className="mx-[10px]">Powerwall</li>
                </ul>
                <div className="md:flex hidden p-4 font-semibold">
                    <p className="w-7 mx-[1px]">Shop</p>
                    <p className="w-7 mx-[40px]">Account</p>
                    <p className="w-7 mx-[20px]">Menu</p>
                </div>
                <div className="md:hidden px-2 py-2 bg-gray-300 text-white rounded font-bold bg-opacity-50">
                    Menu</div>
                
            </nav>
            {/* Transparent White Box */}
            <div className="relative  h-10 bg-white bg-opacity-90 flex items-center justify-center rounded-lg" style={{ zIndex: 1, top:'73px',width:'350px',left:'550px' }}>
                <img 
                src="https://th.bing.com/th/id/OIP.uMbuKUIoGoRq7rX5wt7j2QAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
                className='h-10 rounded-lg'
                />
                    <p className="text-gray-400 " style={{zIndex: 1,top:'73px',width:'350px',left:'50px' }}>Search Support</p>
                    
            </div>
            
            
        </div>
        </div>
        {/* Trending Topics and List */}
        <div className="absolute top-[370px] left-0 pl-14">
                <div className="text-black font-semibold text-3xl mb-8 ">
                    Trending Topics
                </div>
                <ul className="flex text-black space-x-[120px]">
                    <li className='mx-[0px]'>Add a Vehicle</li>
                    <li className='mx-[100px]'>Supercharging Credits</li>
                    <li className='mx-[50px]'>Leasing</li>
                    <li className='mx-[50px]'>IRA Clean Vehicle Report</li>
                    <li className='mx-[50px]'>Cost of Solar</li>
                    <li className='mx-[50px]'>Troubleshoot Solar</li>
                </ul>
                <div className="absolute top-[200px] left-20 pl-14 mx-[550px]  transform -translate-x-1/2 flex gap-80">
                <div className="text-black font-semibold text-2xl mb-8">
                    Vehicles
                </div>
                <div className="text-black font-semibold text-2xl mb-8">
                    Energy
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '50px', height: '1px', backgroundColor: 'gray', width: '1000px' }}></div>
                <div className="absolute left-0" style={{ top: '50px', height: '3px', backgroundColor: 'black', width: '300px' }}></div>
                <div className="flex flex-row justify-center items-start mt-20">
        {/*Resources*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <p className=" text-gray-500 font-semibold" style={{ marginLeft: '70px' }}>Resources</p>
            <div className="flex gap-5 font-semibold" style={{ marginLeft: '69px' }}>
                <ul>
                    <li className="text-black">Demo Drive</li>
                    <li className="text-black">Insurance</li> 
                    <li className="text-black">Military Purchase Program</li>
                    <li className="text-black">Video Guides</li>
                    <li className="text-black">Customer Stories</li>
                    <li className="text-black">Events</li> 
                </ul>
            </div>
          </div>



          {/*Location Services*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <p className=" text-gray-500 font-semibold" style={{ marginLeft: '70px' }}>Location Services</p>
            <div className="flex gap-5 font-semibold" style={{ marginLeft: '69px' }}>
                <ul>
                    <li className="text-black">Find Us</li>
                    <li className="text-black">Find a Collision Center</li> 
                    <li className="text-black">Find a Certified Installer</li>
                </ul>
            </div>
          </div>
          {/*Company*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <p className=" text-gray-500 font-semibold" style={{ marginLeft: '70px' }}>Company</p>
            <div className="flex gap-5 font-semibold" style={{ marginLeft: '69px' }}>
                <ul>
                    <li className="text-black">About</li>
                    <li className="text-black">Careers</li> 
                    <li className="text-black">Investor Relations</li>
                </ul>
            </div>
          </div>
          </div>
            </div>
            </div>

            
        </>
    );
}

export default Question;
