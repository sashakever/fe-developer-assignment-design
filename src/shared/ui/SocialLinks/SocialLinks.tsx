import React, {FC} from 'react';

import {DiscordIcon, TelegramIcon, TwitterIcon} from '@/shared/assets';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  className?: string;
};

const SocialLinks: FC<Props> = ({className = ''}) => {
  return (
    <div className={clsx('flex gap-2.5', className)}>
      <Link href='/' target='_blank'>
        <TelegramIcon />
      </Link>
      <Link href='/' target='_blank'>
        <DiscordIcon />
      </Link>
      <Link href='/' target='_blank'>
        <TwitterIcon />
      </Link>
    </div>
  );
};

export default SocialLinks;
