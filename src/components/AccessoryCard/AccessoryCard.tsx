import clsx from 'clsx';
import { findLast } from 'lodash';

import necklace from '~/assets/images/necklace1.png';

import { AccessoryCardStyled } from './styled';

export interface AccessoryCardProps {
  grade: 'relic' | 'ancient';
  name: string;
  quality: number;
  className?: string;
}

const qualitySteps = [0, 10, 30, 70, 90, 100];

const AccessoryCard = ({ className, grade, name, quality }: AccessoryCardProps) => {
  const qualityStep = findLast(qualitySteps, step => quality >= step);

  return (
    <AccessoryCardStyled className={clsx('AccessoryCard', className)} grade={grade}>
      <div className="profile">
        <div className="image">
          <img src={necklace} />
        </div>

        <div className="right">
          <div className="name">{name}</div>
          <div className={`quality quality${qualityStep}`}>
            품질 {quality} {quality !== 100 && '이상'}
          </div>
        </div>
      </div>
    </AccessoryCardStyled>
  );
};

export default AccessoryCard;
