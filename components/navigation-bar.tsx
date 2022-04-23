import React from 'react';
import Image from 'next/image';
import Logo from './logo';

export default function NavigationBar() {

  // Fixes the hydration issue by not rendering the Navbar initially (useState(false))
  // and only rendering it when the initial site has been rendered
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

    return  <nav className="border-b-[1px] border-gray-500 sticky top-0 bg-white z-50">
    <div className="flex items-center text-center w-full">
      <Logo />
      <div className="space-x-[32px] px-[16px] py-4 lexend menu-item md:text-lg lg:text-xl">
        <a className="group hover:underline underline-offset-8 hover:text-2xl ease-out duration-300">
          Food
          <div className="absolute rounded-3xl -translate-y-[445px] border-[1px] border-gray-500 group-hover:bg-white group-hover:translate-y-[0px] w-60 h-80 group-hover:block ease duration-700">
            <ul className="py-4">
              <li><a className="hover:text-orange-500" >Bakery</a></li>
              <li><a className="hover:text-orange-500" >Fresh & Chilled</a></li>
              <li><a className="hover:text-orange-500" >Snacks</a></li>
              <li><a className="hover:text-orange-500" >Candy</a></li>
              <li><a className="hover:text-orange-500" >Hot Foods</a></li>
              <li><a className="hover:text-orange-500" >Breakfast</a></li>
              <li><a className="hover:text-orange-500" >Ice Cream</a></li>
              <li><a className="hover:text-orange-500" >Pizza</a></li>
            </ul>
          </div>
        </a>
        <a className="group hover:underline underline-offset-8 hover:text-2xl ease-out duration-300">
          Drinks
          <div className="absolute rounded-3xl translate-x-16 -translate-y-[455px] border-[1px] border-gray-500 group-hover:bg-white group-hover:translate-y-[0px] w-72 h-[400px] group-hover:block ease duration-700">
            <ul className="py-4">
              <li><a className="hover:text-orange-500" >Coffee</a></li>
              <li><a className="hover:text-orange-500" >Energy Drinks</a></li>
              <li><a className="hover:text-orange-500" >Beer</a></li>
              <li><a className="hover:text-orange-500" >Bottled Tea</a></li>
              <li><a className="hover:text-orange-500" >Cold Pressed Juices</a></li>
              <li><a className="hover:text-orange-500" >Big Gulp®</a></li>
              <li><a className="hover:text-orange-500" >Wine</a></li>
              <li><a className="hover:text-orange-500" >Sports Drinks</a></li>
              <li><a className="hover:text-orange-500" >Energy Shots</a></li>
              <li><a className="hover:text-orange-500" >Slurpee®</a></li>
              <li><a className="hover:text-orange-500" >Bottled Water</a></li>
            </ul>
          </div>
        </a>
        <a className="hover:underline underline-offset-8 hover:text-2xl ease-out duration-300">7REWARDS</a>
        <a className="hover:underline underline-offset-8 hover:text-2xl ease-out duration-300">Order 7NOW Delivery</a>
      </div>
      <span className="ml-auto inline-flex">
        <a className="group inline-flex items-center h-[20px]">
          <p className="scale-0 group-hover:scale-100 ease-out duration-500">Find a store</p>
          <div className="mx-[16px] ease-out duration-500 h-[20px] w-[20px]"><Image width={13.92} height={20} src={"/location.svg"} alt="location logo" /></div>
        </a>
        <span className="group mx-[16px] ease-out duration-500 h-[20px] w-[20px] inline-flex items-center"><Image width={20} height={20} src={"/world.svg"} alt="languages logo" className="w-10 h-10 hover:w-14 hover:h-14 ease-out duration-500" />
          <div className="-translate-x-40 absolute rounded-3xl -translate-y-[445px] border-[1px] border-gray-500 group-hover:bg-white group-hover:translate-y-[180px] w-60 h-80 group-hover:block ease duration-700">
            <ul className="py-4 font-extrabold">
              <li>
                <Image layout="intrinsic" src={"/Language_Images/en.jpg"} alt="en_flag" width={30} height={20} />
                <a href="en" className="hover:text-orange-500 px-4" >English</a>
              </li>
              <li>
                <Image layout="intrinsic" src={"/Language_Images/fr.jpg"} alt="fr_flag" width={30} height={20} />
                <a href="fr" className="hover:text-orange-500 px-4" >Français</a></li>
              <li>
                <Image layout="intrinsic" src={"/Language_Images/jp.png"} alt="jp_flag" width={30} height={20} />
                <a href="jp" className="hover:text-orange-500 px-4" >日本</a></li>
              <li>
                <Image layout="intrinsic" src={"/Language_Images/pt.jpg"} alt="pt_flag" width={30} height={20} />
                <a href="pt" className="hover:text-orange-500 px-4" >Português</a></li>
              <li>
                <Image layout="intrinsic" src={"/Language_Images/de.jpg"} alt="de_flag" width={30} height={20} />
                <a href="de" className="hover:text-orange-500 px-4" >Deutsch</a></li>
            </ul>
          </div>
        </span>
        <a className="mx-[16px] ease-out duration-500 h-[20px] w-[20px] inline-flex items-center"><Image width={19.52} height={20} src={"/user.svg"} alt="person logo" /></a>
      </span>
    </div>
  </nav>;
}