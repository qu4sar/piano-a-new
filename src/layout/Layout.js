import Head from "next/head";
import { Fragment, useEffect } from "react";
import { I18nextProvider } from 'react-i18next';
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { dataBgImg, holdSection, imgToSVG } from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Searchbox from "./Searchbox";
import SearchButton from "./SearchButton";
import Social from "./Social";
import WalletPopUp from "./WalletPopUp";
import { initReactI18next } from "react-i18next";
import i18n from 'i18next';
import { resources } from '../translations';
import { Config } from '../Constants';
const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);


  return (
    <I18nextProvider i18n={_i18n} defaultNS={'translation'}>
      <Fragment>
        <Head>
          <title>Collettivo Piano A | {pageTitle}</title>
        </Head>
        <ImageView />
        <VideoPopup />
        <PreLoader />
        {/* !Preloader */}
        {/* Left Navigation */}
        <Navigation />
        {/* !Left Navigation */}
        {/* Searchbox Popup */}
        {/* <Searchbox /> */}
        {/* !Searchbox Popup */}
        {/* Wallet Popup */}
        <WalletPopUp />
        {/* !Wallet Popup */}
        {/* Main */}
        <div className="metaportal_fn_main">
          {/* Mobile Navigation */}
          <MobileNavigation />
          {/* !Mobile Navigation */}
          {/* Header */}
          <Header />
          {/* !Header */}
          {/* Content */}
          <div className="metaportal_fn_content">
            {children}
            {/* Footer */}
            <Footer />
            {/* !Footer */}
          </div>
          {/* !Content */}
          {/* Social */}
          <Social />
          {/* !Social */}
          {/* Totop */}
          <ScrollTop />
          {/* /Totop */}
          {/* Search Button */}
          <SearchButton />
          {/* !Search Button */}
        </div>
      </Fragment>
    </I18nextProvider>
  );
};
export default Layout;




export const _i18n = i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Config.language,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
