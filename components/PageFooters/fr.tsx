import React from 'react';
import Image from 'next/image';
import Logo from '../Logos/logo';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'

export default function PageFooter() {

    const router = useRouter()
    const { locale } = router
    const { t } = useTranslation('common')

    {/* Footer */}
    return <footer className="bg-red-700">
    <div className="mx-4 pt-32 pb-16 border-b-[1px] border-gray-500 lexend text-white flex flex-row items-center justify-center">
    <div className="inline-flex px-16 flex-col text-left items-left">
        <p className="font-extrabold text-md">{t('Footer_GetToKnowUs')}</p>
        <ul>
        <li>{t('GetToKnowUs_About_7-Eleven')}</li>
        <li>{t('GetToKnowUs_Blog')}</li>
        <li>{t('GetToKnowUs_Careers')}</li>
        <li>{t('GetToKnowUs_Newsroom')}</li>
        </ul>
    </div>
    <div className="inline-flex px-16 flex-col items-left text-left">
        <p className="font-extrabold text-md">{t('Footer_FranchiseInfo')}</p>
        <ul>
        <li>{t('FranchiseInfo_OurBusinessModel')}</li>
        <li>{t('FranchiseInfo_FranchiseProcess')}</li>
        <li>{t('FranchiseInfo_Franchising_forVeterans')}</li>
        </ul>
    </div>
    <div className="inline-flex px-16 flex-col items-left text-left">
        <p className="font-extrabold text-md">{t('Footer_HowCanWeHelp')}</p>
        <ul>
        <li>{t('HowCanWeHelp_ContactUs')}</li>
        <li>{t('HowCanWeHelp_NewVendorInformation')}</li>
        <li>{t('HowCanWeHelp_FinancialServices')}</li>
        <li>{t('HowCanWeHelp_BusinessFuelCards')}</li>
        </ul>
    </div>
    <div className="inline-flex px-16 flex-col items-left text-left">
        <p className="font-extrabold text-md">{t('Footer_Download')}</p>
        <ul>
        <li>{t('Download_7-ElevenApp')}</li>
        <li>{t('Download_7NOWDeliveryApp')}</li>
        </ul>
    </div>
    <div className="inline-flex px-16 flex-col items-left text-left">
        <Image src={"/7-eleven_logo.png"} alt="Logo Footer" width={128} height={64} className="text-center"/>
    </div>
    </div>

    <div className="lexend text-sm mx-4 pt-16 pb-4 px-16 text-gray-500 items-center justify-center">
    <div>
        <ul className="flex flex-row">
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_Terms&Conditions')}</li>
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_PrivacyPolicy')}</li>
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_FAQs')}</li>
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_CaliforniaPrivacy')}</li>
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_DoNotSellMyPersonalInformation')}</li>
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_CaliforniaTransparencyInSupplyChainsAct')}</li>
        <li className="border-r-2 px-1 border-gray-500">{t('Footer2_CACleaningProductsRight_toKnow')}</li>
        </ul>
    </div>
    </div>

    <div className="mx-4 px-16 pt-4 pb-8 flex lexend text-xs text-gray-700 flex-col items-center justify-center">
    <p>{t('Footer2_LEGAL_NOTICE')}</p>
    </div>
    </footer>
}
