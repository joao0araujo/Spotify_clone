'use client';

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Caixa from "./Caixa";

interface BarraLateralProps {
    children: React.ReactNode;
}

const BarraLateral: React.FC<BarraLateralProps> = ({children}) => {

    const pathname = usePathname();

    const rotas = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return(
    <div className="flex h-full">
        <div 
            className="
                hidden 
                md:flex 
                flex-col 
                gap-y-2 
                bg-black 
                h-full 
                w-[300px] 
                p-2
            "
        >
            <Caixa>
                Barra Lateral
            </Caixa>

        </div>
    </div>
    )
}


export default BarraLateral;