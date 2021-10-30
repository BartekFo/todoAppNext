import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import bgMobileLight from '@assets/bg-mobile-light.jpg';
import bgDesktopLight from '@assets/bg-desktop-light.jpg';
import bgMobileDark from '@assets/bg-mobile-dark.jpg';
import bgDesktopDark from '@assets/bg-desktop-dark.jpg';

const BackgroundImage = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="absolute top-0 left-0 w-full -z-10 sm:hidden">
        {theme === 'dark' ? (
          <Image
            src={bgMobileDark}
            alt="background image"
            layout="responsive"
            width={375}
            height={200}
            className="object-contain"
          />
        ) : (
          <Image
            src={bgMobileLight}
            alt="background image"
            layout="responsive"
            width={375}
            height={200}
            className="object-contain"
          />
        )}
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full xl:w-3/4 2xl:w-3/5 -z-10 hidden sm:block">
        {theme === 'dark' ? (
          <Image
            src={bgDesktopDark}
            alt="background image"
            layout="responsive"
            width={1440}
            height={300}
            className="object-scale-down"
          />
        ) : (
          <Image
            src={bgDesktopLight}
            alt="background image"
            layout="responsive"
            width={1440}
            height={300}
            className="object-scale-down"
          />
        )}
      </div>
    </>
  );
};

export default BackgroundImage;
