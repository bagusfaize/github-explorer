import Link from 'next/link'
import React from 'react'
import { HiMiniHeart } from 'react-icons/hi2'

export default function Footer() {
    return (
        <div id="footer" className="flex items-center justify-center bg-sunflower p-2 text-xs font-semibold">
            Created with <HiMiniHeart className="text-rose-500 mx-1" />  by
            <Link href="https://www.linkedin.com/in/bagus-faizun-925610187/" target="_blank" className="mx-2 hover:underline">Bagus Faizun</Link>
        </div>
    )
}
