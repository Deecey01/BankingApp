'use client';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import React from 'react'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathName = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer"></Image>
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white
                ">
                    <Link href='/'
                        className='mb-12 cursor-pointer flex items-center gap-1 px-4'>
                        <Image src="/icons/logo.svg" width={34} height={34} alt='horizon logo'
                        />
                        <h1 className='text-26 fontt-ibm-plex-serif font-bold text-black'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathName === item.route ||
                                        pathName.startsWith(`${item.route}`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label}
                                                className={cn
                                                    ('mobilenav-sheet_close w-full', {
                                                        'bg-bank-gradient': isActive
                                                    })}
                                            >
                                                {/* <div className="relative size-6"> */}
                                                    <Image width={20} height={20} src={item.imgURL} alt={item.label}
                                                        className={cn({ 'brightness-[3] invert-0': isActive })} />
                                                {/* </div> */}
                                                <p className={cn('text-16 font-semibold text-black-2', {
                                                    "!text.white": isActive
                                                })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </div>


                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
