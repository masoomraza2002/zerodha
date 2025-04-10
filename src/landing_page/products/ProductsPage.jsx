import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                logo="pics/kite.png"  // Access image from the public folder
                heading="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                link1="Try Demo"
                link2="Learn more"
                img1="pics/googlePlayBadge.svg"  // Access image from the public folder
                img2="pics/appstoreBadge.svg"  // Access image from the public folder
            />
            <RightSection
                logo="pics/console.png"  // Access image from the public folder
                heading="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                link1="Learn more"
            />
            <LeftSection
                logo="pics/coin.png"  // Access image from the public folder
                heading="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="Coin"
                img1="pics/googlePlayBadge.svg"  // Access image from the public folder
                img2="pics/appstoreBadge.svg"  // Access image from the public folder
            />
            <RightSection
                logo="pics/kiteconnect.png"  
                heading="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                link1="Kite Connect"
            />
            <LeftSection
                logo="pics/varsity.png"  // Access image from the public folder
                heading="Varsity mobile"
                description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                img1="pics/googlePlayBadge.svg"  // Access image from the public folder
                img2="pics/appstoreBadge.svg"  // Access image from the public folder
            />
            <Universe />
        </>
    );
}

export default ProductPage;
