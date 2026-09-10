import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
    return (
      <>
        <Hero />
        <LeftSection
          imageURL="media/Images/kite.png"
          productName="TradeDesk"
          productDescription="A fast, focused trading platform built for real-time market data, interactive charts, and a clean trading experience. Track markets, explore price movements, and manage your trades from one seamless interface."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightSection
          imageURL="media/Images/console.png"
          productName="Portfolio Insights"
          productDescription="Your central space for understanding your investments. Track portfolio performance, review your trades, and explore detailed insights through clear reports and intuitive visualisations."
          learnMore=""
          contentTopOffset={120}
        />
        <LeftSection
          imageURL="media/Images/coin.png"
          productName="InvestX"
          productDescription="Discover mutual funds, build your portfolio, and track your investments through a simple, transparent experience designed for long-term investing."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightSection
          imageURL="media/Images/kiteconnect.png"
          productName="Platform API"
          productDescription="Build custom trading and investment experiences with simple, developer-friendly APIs. Connect market data, portfolio insights, and trading capabilities to your own applications with ease."
          learnMore=""
        />
        <LeftSection
          imageURL="media/Images/varsity.png"
          productName="MarketIQ"
          productDescription="A focused collection of stock market lessons covering investing, trading,and key market concepts, explained clearly to help you learn at your own pace."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <p className="text-center mt-5 mb-5 fs-2">
          Explore the technology and engineering behind our platform,
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            built for speed, simplicity, and reliability.
          </a>
        </p>
        <Universe />
      </>
    );
}

export default ProductPage;