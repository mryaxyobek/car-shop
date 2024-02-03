import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'


import logo from '../img/logo.svg'
import Hero from './Hero'


const Header = () => {
    // navbar
    const [openNavbar, setOpenNavbar] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        };
        setOpenNavbar(false);
    }, [location]);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpenNavbar(false);
        };
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            setOpenNavbar(false);
        };
    });

    return (
        <div className={`${isHome ? 'bg-heroBg' : 'bg-white'} bg-cover bg-bottom bg-no-repeat`}>
            <header className='py-5 border-b-2 border-white/40 z-10 backdrop-filte backdrop-blur-3x'>
                <div className="flex justify-between items-center w-full max-w-base mx-auto px-5">
                    <Link aria-label='home' title='mashina bozor' className='flex items-center justify-center text-xl text-white font-semibold leading-none space-x-1' to='/'>
                        <img width={36} height={36} src={logo} alt="logo" />
                        <h1 className='text-main max-410:hidden'>Mashina <span className={`${isHome ? 'text-white' : 'text-111'}`}>bozor</span></h1>
                    </Link>

                    {/* navbar wrapper + responsive navbar*/}
                    <div className={`${openNavbar ? 'translate-x-0' : 'max-768:-translate-x-full'} transition-transform duration-300 flex flex-col top-0 left-0 max-768:fixed max-768:bg-white max-768:h-screen max-768:z-30 max-768:py-6 max-768:px-5 max-768:overflow-y-auto`}>
                        <Link aria-label='home' title='mashina bozor' className='hidden max-768:flex items-center text-xl text-white font-semibold leading-none space-x-1 mb-6' to='/'>
                            <img width={36} height={36} src={logo} alt="logo" />
                            <h1 className='text-main'>Mashina <span className='text-111'>bozor</span></h1>
                        </Link>

                        <nav className='mb-auto'>
                            <ul className={`${isHome ? 'text-white' : 'text-111'} flex items-center gap-8 text-lg font-medium leading-7 max-768:flex-col max-768:!text-111 max-768:items-start max-768:gap-3`}>
                                <li>
                                    <NavLink to='/catalog'>Katalog</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/news'>Yangiliklar</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>Bog'lanish</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/* call */}
                        <a title='contact' aria-label='contact' className='hidden max-768:flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-main w-64 mt-5 max-360:w-auto' href="tel:+998881690033">
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9727 19.0348L18.6721 17.3346C18.9336 17.0699 19.245 16.8595 19.5882 16.7161C19.9315 16.5726 20.2998 16.4989 20.6717 16.4989C21.0438 16.4989 21.412 16.5726 21.7554 16.7161C22.0986 16.8595 22.4099 17.0699 22.6714 17.3346L24.6646 19.3288C24.9292 19.5903 25.1394 19.9016 25.2828 20.245C25.4261 20.5884 25.5 20.957 25.5 21.3291C25.5 21.7013 25.4261 22.0699 25.2828 22.4133C25.1394 22.7567 24.9292 23.0679 24.6646 23.3294L23.7574 24.2498C23.1324 24.8812 22.3239 25.2992 21.4474 25.4438C20.5709 25.5883 19.6711 25.4525 18.8765 25.0552C12.0385 21.5338 6.46884 15.9662 2.94327 9.12839C2.54581 8.33259 2.41085 7.43118 2.55779 6.55381C2.70473 5.67642 3.126 4.86816 3.76104 4.24542L4.66818 3.32512C5.19962 2.79667 5.91851 2.5 6.66782 2.5C7.41714 2.5 8.13602 2.79667 8.66747 3.32512L10.6735 5.33204C11.2018 5.86371 11.4983 6.5828 11.4983 7.33242C11.4983 8.08204 11.2018 8.80113 10.6735 9.3328L8.97411 11.033C10.0978 12.5535 11.332 13.9888 12.6667 15.3276C13.9938 16.6575 15.4205 17.8841 16.9344 18.9964L16.9727 19.0348Z" stroke='#fff' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='font-medium text-lg text-white'>Telefon raqam</span>
                        </a>
                    </div>


                    <div className="flex items-center gap-8 z-20">
                        {/* search */}
                        <button title='search' aria-label='search button'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.7929 25.2071C24.1834 25.5976 24.8166 25.5976 25.2071 25.2071C25.5976 24.8166 25.5976 24.1834 25.2071 23.7929L23.7929 25.2071ZM18.3484 19.7624L23.7929 25.2071L25.2071 23.7929L19.7627 18.3482L18.3484 19.7624ZM12.3889 20.2775C8.03198 20.2775 4.5 16.7456 4.5 12.3886H2.5C2.5 17.8501 6.92741 22.2775 12.3889 22.2775V20.2775ZM20.2778 12.3886C20.2778 16.7456 16.7458 20.2775 12.3889 20.2775V22.2775C17.8504 22.2775 22.2778 17.8501 22.2778 12.3886H20.2778ZM12.3889 4.49976C16.7458 4.49976 20.2778 8.03173 20.2778 12.3886H22.2778C22.2778 6.92716 17.8504 2.49976 12.3889 2.49976V4.49976ZM12.3889 2.49976C6.92741 2.49976 2.5 6.92716 2.5 12.3886H4.5C4.5 8.03173 8.03198 4.49976 12.3889 4.49976V2.49976Z"
                                    fill={`${isHome ? '#fff' : '#111'}`} />
                            </svg>
                        </button>


                        {/* favorites link */}
                        <Link aria-label='favorites' to='/favorites' className='relative btn-normal'>
                            <svg width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='transition-colors' d="M13.2261 6.99763L14.2996 7.91784C14.3548 7.96512 14.4362 7.96512 14.4914 7.91784L15.5649 6.99763C18.5678 4.42372 23.1789 5.26951 25.0728 8.74164C26.4382 11.2449 25.9265 14.356 23.8312 16.2901L14.6961 24.7225C14.5264 24.8792 14.2647 24.8792 14.0949 24.7225L4.95978 16.2901C2.86453 14.356 2.35283 11.2449 3.71825 8.74164C5.61214 5.26951 10.2232 4.42372 13.2261 6.99763Z" stroke={`${isHome ? '#fff' : '#111'}`} strokeWidth="2" />
                            </svg>

                            {/* count */}
                            <span className="flex items-center justify-center absolute w-5 h-5 rounded-full text-white bg-main -top-1 -right-3 text-xs leading-none font-bold">0</span>
                        </Link>

                        {/* call */}
                        <a title='contact' aria-label='contact' className='max-768:hidden' href="tel:+998881690033">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9727 19.0348L18.6721 17.3346C18.9336 17.0699 19.245 16.8595 19.5882 16.7161C19.9315 16.5726 20.2998 16.4989 20.6717 16.4989C21.0438 16.4989 21.412 16.5726 21.7554 16.7161C22.0986 16.8595 22.4099 17.0699 22.6714 17.3346L24.6646 19.3288C24.9292 19.5903 25.1394 19.9016 25.2828 20.245C25.4261 20.5884 25.5 20.957 25.5 21.3291C25.5 21.7013 25.4261 22.0699 25.2828 22.4133C25.1394 22.7567 24.9292 23.0679 24.6646 23.3294L23.7574 24.2498C23.1324 24.8812 22.3239 25.2992 21.4474 25.4438C20.5709 25.5883 19.6711 25.4525 18.8765 25.0552C12.0385 21.5338 6.46884 15.9662 2.94327 9.12839C2.54581 8.33259 2.41085 7.43118 2.55779 6.55381C2.70473 5.67642 3.126 4.86816 3.76104 4.24542L4.66818 3.32512C5.19962 2.79667 5.91851 2.5 6.66782 2.5C7.41714 2.5 8.13602 2.79667 8.66747 3.32512L10.6735 5.33204C11.2018 5.86371 11.4983 6.5828 11.4983 7.33242C11.4983 8.08204 11.2018 8.80113 10.6735 9.3328L8.97411 11.033C10.0978 12.5535 11.332 13.9888 12.6667 15.3276C13.9938 16.6575 15.4205 17.8841 16.9344 18.9964L16.9727 19.0348Z" stroke='#fff' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        {/* hamburger */}
                        <button
                            title='hamburger button'
                            aria-label='hamburger button'
                            className={`hamburger-btn ${openNavbar ? 'hamburger-btn-active' : ''}`}
                            onClick={() => {
                                setOpenNavbar(!openNavbar);
                            }}
                        >
                            <span className='hamburger-btn_items-wrapper'>
                                <span className={`hamburger-btn_item ${(isHome) ? '' : (openNavbar ? 'bg-white' : '!bg-111')}`}></span>
                                <span className={`hamburger-btn_item ${(isHome) ? '' : (openNavbar ? 'bg-white' : '!bg-111')}`}></span>
                                <span className={`hamburger-btn_item ${(isHome) ? '' : (openNavbar ? 'bg-white' : '!bg-111')}`}></span>
                            </span>
                        </button>

                        {/* overlay */}
                        <div
                            className={`${openNavbar ? 'max-768:block' : 'hidden'} fixed top-0 right-0 z-20 bg-black/70 w-full min-h-screen`}
                            onClick={() => {
                                setOpenNavbar(false);
                            }}
                        ></div>
                    </div>


                </div>
            </header>
            {
                isHome &&
                <Hero />
            }
        </div>
    )
}

export default Header