import React from 'react';
import GoogleAdsLogo from '@/assets/google-ads.svg';
import FacebookLogo from '@/assets/facebook.svg';
import TikTokAdsLogo from '@/assets/tiktok-ads-logo.svg';

const Button: React.FC = () => {
  
  return (
    <div className="flex justify-center items-center h-screen m-0">

        {/* SVG Facebook */}
        <FacebookLogo width="250" height="250" />
        {/* SVG Google Ads */}
        <GoogleAdsLogo width="250" height="250" />
        {/* SVG TikTok Ads */}
        <TikTokAdsLogo width="510" height="250" />
    </div>
  );
};

export default Button;
