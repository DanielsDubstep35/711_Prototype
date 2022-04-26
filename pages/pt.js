import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'
import NavigationBar from '../components/NavBars/pt';
import PageFooter from '../components/PageFooters/pt';

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

        {<NavigationBar />}

        <div className="bg-white flex w-full h-[760px]">
          {/* <Image layout='fill' src=""/> */}
          <div className="px-16 py-16 w-2/5">
            <p className="py-4 text-2xl font-extrabold">
              {t('Body1_Deals')}
            </p>
            <p className="pb-8 text-left text-5xl font-extrabold decoration-solid font-[RightGrotesk-CompactDark,Helvetica,Arial,sans-serif;]">
              {t('Body1_Special_offers_just_for_you')}
            </p>
            <div className="">
              <a className="p-2 font-bold text-center bg-blue-500 hover:bg-green-600 whitespace-nowrap text-white w-auto h-10 absolute rounded-3xl hover:translate-y-2 ease duration-700">
                {t('Body1_View_All_Promotions')}
              </a>
            </div>
            <div className="py-32 justify-between flex">
              <div className="inline-flex border-[1px] active:bg-green-800 border-gray-500 w-28 h-28"><Image layout="intrinsic" src={"/Images/en/Food/food1_Offers.png"} alt="Offers1" width={112} height={112} /></div>
              <div className="inline-flex border-[1px] active:bg-red-800 border-gray-500 w-28 h-28"><Image layout="intrinsic" src={"/Images/en/Food/food2_Offers.png"} alt="Offers2" width={112} height={112} /></div>
              <div className="inline-flex border-[1px] active:bg-green-800 border-gray-500 w-28 h-28"><Image layout="intrinsic" src={"/Images/en/Food/food3_Offers.png"} alt="Offers3" width={112} height={112} /></div>
            </div>
          </div>
          <div className="bg-blue-500 w-3/5 mx-auto h-full px-60 pt-16 pb-4 text-center">
            <div className="p-2">
              <Image layout="intrinsic" src={"/Images/en/Food/food1_Offers_big.webp"} alt="Offers1" width={400} height={400} />
            </div>
            <section className="py-2 align-center mx-auto">
              <p className="p-2 text-center bg-yellow-500 whitespace-nowrap m-auto text-black lexend font-extrabold w-auto h-10 ">{t('Body1_Only_with_7REWARDS®')}</p>
            </section>
            <div className="px-4 py-2">
              <p className="text-4xl w-full font-extrabold text-center h-auto text-white">{t('Body1_Buy_6_cups_get_the_7thFREE')}</p>
              <p className="py-4 text-xs w-auto h-auto text-white">{t('Body1_Valid_on_any_coffee_Slurpee®_andBigGulp®_drinks_thru_5/24/2022')}</p>
            </div>
            <div className="px-4 py-2 ">
              
            </div>
          </div>
        </div>

        <div className="bg-black text-white text-right flex font-serif w-full h-[450px]">
          <section className="container mx-auto px-1 py-20 w-{1/5} overflow-hidden h-full">
            <Image layout="intrinsic" src={"/Images/en/Food/Phone_Rewards.png"} alt="7REWARDS_PHONE" width={450} height={450} />
          </section>
          <section className="container ml-2 mr-20 pl-1 pr-32 py-16 w-{4/5} h-full inline-flex">
            <div className="text-left px-2 py-24 flex-nowrap">
              <p className="lexend font-bold p-2 text-2xl">
                {t('Body2_7REWARDS')}
              </p>
              <p className="lexend text-4xl pb-2">
                {t('Body2_JoinEarnGetRewarded')}
              </p>
              <section>
                <p className="pb-4">
                  {t('Body2_GetExclusiveDeals_BonusPointsFuelRewards_and_more')}
                </p>
                <a className="inline-flex mx-2 px-8 lexend py-2 bg-blue-500 hover:bg-green-600 text-white w-auto h-10 rounded-3xl hover:translate-y-2 ease duration-700">
                  {t('Body2_Get_theApp')}
                </a>
                <a className="inline-flex mx-2 px-8 lexend py-2 bg-gray-700 hover:bg-gray-500 text-white w-auto h-10 rounded-3xl hover:translate-y-2 ease duration-700">
                  {t('Body2_LearnMore')}
                </a>
              </section>
            </div>
          </section>
        </div>

        <div className="px-8 py-32 bg-gray-300 text-black flex w-full h-[760px]">
          <div className="font-serif overflow-auto">
            <a>
              <h2 className="font-extrabold text-5xl lexend p-4">
                {t('Body3_Inside_7-Eleven')}
              </h2>
              <p className="px-4 pb-8 lexend">
                {t('Body3_Theres_more_to_7-Eleven_than_taquitos_andSlurpee®_drinks')}
              </p>
              <div className="flex w-full text-center justify-center mx-auto">
                <div className="inline-flex px-4 w-auto h-48 sm:h-64 xl:h-80 2xl:h-96">
                  {/* Adverts */}
                  <Image layout="intrinsic" src="/Images/en/Advertisements/Advert1.jpg" width={598} height={200} alt="Advert" className="border-2 border-[#147350] text-center justify-center"/>
                </div>
                <div className="inline-flex px-4 w-auto h-48 sm:h-64 xl:h-80 2xl:h-96">
                  {/* Adverts */}
                  <Image layout="intrinsic" src="/Images/en/Advertisements/Advert2.jpg" width={598} height={200} alt="Advert" className="border-2 border-[#147350] text-center justify-center"/>
                </div>
                <div className="inline-flex px-4 w-auto h-48 sm:h-64 xl:h-80 2xl:h-96">
                  {/* Adverts */}
                  <Image layout="intrinsic" src="/Images/en/Advertisements/Advert3.jpg" width={598} height={200} alt="Advert" className="border-2 border-[#147350] text-center justify-center"/>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="px-8 py-16 bg-blue-500 text-black">
          <div className="font-serif overflow-auto text-center lexend text-white">
            <p>{t('Body4_StoreLocator')}</p>
          </div>
          <div className="flex font-serif h-12 overflow-auto mx-auto px-4 justify-center">
            <Image src={"/location.svg"} alt="location logo 2" width={16} height={16} className="text-center"/>
            <input type="search" className="text-base font-normal transition ease-in-out text-gray-700 bg-blue-500 border-b-2 border-solid outline-none">
              
            </input>
            {/* Button with arrow */}
            <button className="text-base font-normal pt-4 w-4 h-4 transition ease-in-out text-white bg-transparent outline-none">
              <Image src={"/arrow.png"} alt="arrow" width={16} height={16} className="text-center"/>
            </button>
          </div>
        </div>

      </main>

      {<PageFooter />}

    </div>
  )
}
