import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-900 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">PIZZARELLA</Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer