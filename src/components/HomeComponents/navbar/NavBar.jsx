'use client'
import React, { use, useEffect, useState } from 'react'
import './Nav.css'
import logo from '../../../../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { ButtonGroup, Container, Dropdown } from 'react-bootstrap'
import { ChevronDown, CircleUser, IceCreamBowl, Search, SearchCheck, ShoppingBasket, Truck, Utensils } from 'lucide-react';
import { usePathname } from 'next/navigation'
// slideable menu
import { slide as Menu } from 'react-burger-menu';


const NavBar = () => {
    // links of dropdown in nav 
    const DropdownMenu = [
        {
            item: 'حَلوَى',
            num: "220 عنصر"
        },
        {
            item: 'طعام',
            num: "220 عنصر"
        },
        {
            item: 'مشروبات',
            num: "220 عنصر"
        }, {
            item: 'المقبلات',
            num: "220 عنصر"
        },
    ];
    const Dropdownprofile = [
        {
            icon: '/profile-circle.svg',
            item: 'حسابي الشخصي',
        },
        {
            icon: 'noun-food-6849124 1.svg',
            item: 'طلباتي السابقة',
        },
        {
            icon: 'noun-food-6849124 1 (1).svg',
            item: 'حالة الطلب',
        }, {
            icon: '/noun-table-restaurant-2283231 1.svg',
            item: 'حجز الطاولات',
        },
    ];




    const pathname = usePathname()
    console.log(pathname);
    // color Nav
    const isHome = pathname === '/';
    let linkStyle = {
        color: isHome ? '#FFFFFF' : '#544827',
    };
    // change color when scrolle
    if (window.scrollY > 200) {
        linkStyle = {
            color: isHome ? '#544827' : '#544827',
        };
    } else {
        linkStyle = {
            color: isHome ? '#FFFFFF' : '#544827',
        };
    }
    // search icon
    // useState hook to manage the visibility of the search bar
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearchBar = () => {
        setShowSearch(!showSearch);
    };

    // navBar stickry
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 200);
        });
    }, []);

    return (
        <>
        <header className={`navbar headerMain ${scroll ? "sticky" : ""}`}>
            <Container className='pt-1'>
                <div className='nav-logo'>
                    <Link href={'/'}> <Image src={logo} alt='' /></Link>
                </div>
                <div className={`nav-links ${scroll ? "color" : ""}`}>
                    <ul>
                        <Link style={linkStyle} className={pathname === '/' ? 'active' : ''} href={'/'}><li>
                            الرئيسية</li>
                        </Link>

                        <div className='d-flex align-items-center'>
                            <Link style={linkStyle} className={pathname === '/menu' ? 'active' : ''} href={'/menu'}>القائمة </Link>
                            <Dropdown>
                                <Dropdown.Toggle className='p-1' variant="" id="dropdown-basic">
                                    <ChevronDown style={linkStyle} className='icon' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {DropdownMenu.map((link, index) => {
                                        return (
                                            <Link key={index} href={'#'} className='d-flex align-items-center justify-content-between py-2 px-3'>
                                                <p>{link.item}</p>
                                                <p className='NumItems'>{link.num}</p>
                                            </Link>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Link style={linkStyle} className={pathname === '/reservation' ? 'active' : ''} href={'/reservation'}>حجز VIP</Link>
                        <Link style={linkStyle} className={pathname === '/contact' ? 'active' : ''} href={'/contact'}>تواصل معنا</Link>
                        <Link style={linkStyle} className={pathname === '/about' ? 'active' : ''} href={'/about'}>من نحن</Link>
                    </ul>
                </div>
                <div className='nav-icons'>
                    <Search onClick={toggleSearchBar} style={linkStyle} className='icon-search' />
                    {showSearch && (
                        <input style={linkStyle} className={`icon-nav-search ${showSearch ? 'visible' : 'hidden'}`} type="text" />
                    )}

                    <ShoppingBasket style={linkStyle} className='icon' />
                    <div className='account'>
                        <CircleUser style={linkStyle} className='icon' />
                        <p style={linkStyle}>مرحبا عمر</p>
                        <Dropdown>
                            <Dropdown.Toggle className='p-1' variant="" id="dropdown-basic">
                                <ChevronDown style={linkStyle} className='icon' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdownProfile'>
                                {Dropdownprofile.map((link, index) => {
                                    return (
                                        <Link key={index} href={'/menu'} className='d-flex p-1 align-items-center gap-2'>
                                            <Image src={link.icon} width={30} height={30} alt='' />
                                            <p>{link.item}</p>
                                        </Link>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* slideable menu in small screen */}
                    <div className='me-5 menuSlide'>
                        <Menu>
                            <ul>
                                <Link className={pathname === '/' ? 'active' : ''} href={'/'}><li>
                                    الرئيسية</li>
                                </Link>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Link className={pathname === '/menu' ? 'active' : ''} href={'/menu'}>القائمة </Link>
                                    <Dropdown>
                                        <Dropdown.Toggle className='p-1' variant="" id="dropdown-basic">
                                            <ChevronDown className='icon' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {DropdownMenu.map((link, index) => {
                                                return (
                                                    <Link key={index} href={'#'} className='d-flex align-items-center justify-content-between py-2 px-3'>
                                                        <p>{link.item}</p>
                                                        <p className='NumItems'>{link.num}</p>
                                                    </Link>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Link className={pathname === '/reservation' ? 'active' : ''} href={'/reservation'}>حجز VIP</Link>
                                <Link className={pathname === '/contact' ? 'active' : ''} href={'/contact'}>تواصل معنا</Link>
                                <Link className={pathname === '/about' ? 'active' : ''} href={'/about'}>من نحن</Link>
                            </ul>
                            <div className='account d-flex mt-5 justify-content-center'>
                                <CircleUser style={linkStyle} className='icon' />
                                <p style={linkStyle}>مرحبا عمر</p>
                                <Dropdown>
                                    <Dropdown.Toggle className='p-1' variant="" id="dropdown-basic">
                                        <ChevronDown style={linkStyle} className='icon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdownProfile'>
                                        {Dropdownprofile.map((link, index) => {
                                            return (
                                                <Link key={index} href={'/menu'} className='d-flex p-1 align-items-center gap-2'>
                                                    <Image src={link.icon} width={30} height={30} alt='' />
                                                    <p>{link.item}</p>
                                                </Link>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Menu>
                    </div>
                </div>

            </Container>
        </header>
        </>
    )
}

export default NavBar
