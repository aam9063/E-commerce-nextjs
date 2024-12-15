'use client';

import { inter } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu); // Abrir Sidebar

    return (
        <div>
            <nav className="flex px-5 justify-between items-center w-full">

                {/* Logo */}
                <div>
                    <Link href="/">
                        <span className={`${inter.className} antialiased font-bold`}>Teslo</span>
                        <span> | Shop </span>
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden sm:block">
                    <Link className="m-2 p-2 rounded-md transition-all font-bold hover:bg-gray-100" href="/gender/men">Hombres</Link>
                    <Link className="m-2 p-2 rounded-md transition-all font-bold hover:bg-gray-100" href="/gender/women">Mujeres</Link>
                    <Link className="m-2 p-2 rounded-md transition-all font-bold hover:bg-gray-100" href="/gender/kid">Niños/as</Link>
                </div>

                {/* Buscar, Carrito, Menú */}
                <div className="flex items-center">
                    <Link href="/search" className="mx-2">
                       <IoSearchOutline className="w-5 h-5" /> 
                    </Link>

                    <Link href="/cart" className="mx-2">
                       <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full  font-bold -top-2 -right-2 bg-black text-white">
                           3 
                        </span>
                       <IoCartOutline className="w-5 h-5" /></div> 
                    </Link>

                    <button
                        onClick={() => openSideMenu()} 
                        className="m-2 p-2 rounded-md transition-all font-bold hover:bg-gray-100">
                        Menu
                    </button>
                </div>

                

            </nav>
        </div>
    );
}