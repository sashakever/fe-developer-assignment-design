import React, {FC} from 'react';

import clsx from 'clsx';

type Props = {
  className?: string;
};

const Divider: FC<Props> = ({className = ''}) => {
  return (
    <div className={clsx('w-full border-t border-[#13171D]', className)} />
  );
};

export default Divider;
