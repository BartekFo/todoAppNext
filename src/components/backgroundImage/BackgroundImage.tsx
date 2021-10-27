import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import bgMobileLight from '@assets/bg-mobile-light.jpg';
import bgMobileDark from '@assets/bg-mobile-dark.jpg';

const BackgroundImage = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute top-0 left-0 w-full -z-10">
      {theme === 'dark' ? (
        <Image
          src={bgMobileDark}
          alt="background image"
          layout="responsive"
          width={375}
          height={200}
          className="object-scale-down"
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
  );
};

export default BackgroundImage;
