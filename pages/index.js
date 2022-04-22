import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import link from 'next/link';
import food1 from '../public/Images/food1.jpg';
import logo from '../public/7-eleven_logo.png';
import par1 from '../public/Spare_Assets/par1bg.jpg';
import useTranslation from 'next-translate/useTranslation'
import NavigationBar from '../components/navigation-bar';

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')

  return (

    // Whole Page div
    <div className="w-screen">

      {/* Head */}
      <Head>
        <title>7-Eleven</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/7-eleven_96.ico" />
      </Head>

      {/* Body */}
      <main>

      <NavigationBar/>

        <div className="bg-white flex w-full h-[760px]">
          {/* <Image layout='fill' src=""/> */}
          <div className="px-8 py-16">
            <p className="py-4 text-2xl font-extrabold">
              DEALS
            </p>
            <p className="pb-8 text-left text-5xl font-extrabold decoration-solid font-[RightGrotesk-CompactDark,Helvetica,Arial,sans-serif;]">
              Special offers just for you.
            </p>
            <div className="">
              <a className="p-2 text-center bg-green-800 hover:bg-green-700 whitespace-nowrap text-white w-48 h-10 absolute rounded-3xl">
                View All Promotions
              </a>
            </div>
            <div className="py-32 justify-between flex">
              <div className="inline-flex border-[1px] active:bg-blue-800 border-gray-500 w-28 h-28"><Image layout="intrinsic" src={"/Images/food1_Offers.png"} alt="Offers1" width={112} height={112} /></div>
              <div className="inline-flex border-[1px] active:bg-red-800 border-gray-500 w-28 h-28"><Image layout="intrinsic" src={"/Images/food2_Offers.png"} alt="Offers2" width={112} height={112} /></div>
              <div className="inline-flex border-[1px] active:bg-green-800 border-gray-500 w-28 h-28"><Image layout="intrinsic" src={"/Images/food3_Offers.png"} alt="Offers3" width={112} height={112} /></div>
            </div>
          </div>
          <div className="bg-green-800 w-full h-full px-4 pt-16 pb-4 text-center">
            <div className="p-2">
              <Image layout="intrinsic" src={"/Images/food1_Offers.png"} alt="Offers1" width={400} height={400} />
            </div>
            <div className="py-2 mx-44 px-44">
              <p className="px-4 py-2 w-50 h-10 lexend bg-yellow-400 ">Only with 7 rewards®</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-4xl w-full h-10 text-white">Buy 6 cups, get the 7th FREE.</p>
            </div>
            <div className="px-4 py-2 ">
              <p className="text-xs w-full h-10 text-white">Valid on any coffee, Slurpee® and Big Gulp® drinks thru 5/24/2022.†</p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white">
          <div className="flex font-serif h-56 overflow-auto">
            <a>
              <h2>
                {t('common:Food')}
              </h2>
              <p>
                {t('common:food_section')}
              </p>
            </a>
          </div>

          <div className="px-2 py-2 bg-gray-300 text-black">
            <div className="flex font-serif h-56 overflow-auto">
              <a>
                <h2>
                  {t('common:Drinks')}
                </h2>
                <p>
                  :)
                </p>
              </a>
            </div>
          </div>

          <div className="px-2 py-2 bg-white text-black">
            <div className="flex font-serif h-56 overflow-auto">
              <a>
                <h2>
                  {t('common:Download')}
                </h2>
                <p>
                  {t('common:download_section')}
                </p>
              </a>
            </div>
          </div>

          <div className="px-2 py-2 bg-green-700 text-black">
            <div className="flex font-serif h-56 overflow-auto">
              <a>
                <h2>
                  {t('common:Contact')}
                </h2>
                <p>
                  {t('common:contact_section')}
                </p>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer>
        <a >
          Powered by{' '}
          <span>
            <Image src="/7-eleven_logo.svg" alt="711 Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
