import React from 'react';

import Image from 'next/image';

export default function Logo() {
    return <a className="w-[30px] h-[40px] mx-[17px] my-[12px]"><Image src={"/Logos/logo.svg"} width={30} height={40} alt="711 Logo" /></a>;
}