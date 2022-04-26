import React from 'react';

import Image from 'next/image';

export default function Logo() {
    return <a className="w-[100px] h-[25px] bg-[#147350] mx-auto my-[12px]"><Image src={"/Logos/jp.png"} width={200} height={25} alt="711 Logo" /></a>;
}