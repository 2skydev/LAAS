import { AppControlAction } from '@app/electron/ipcs/general';

import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

import { configStore } from '~/stores/config';

import { TitlebarStyled } from './styled';

export interface TitlebarProps {
  className?: string;
}

const Titlebar = ({ className }: TitlebarProps) => {
  const {
    general: { developerMode },
  } = useRecoilValue(configStore);

  const appControl = (action: AppControlAction) => {
    window.electron.appControl(action);
  };

  return (
    <TitlebarStyled className={clsx('Titlebar', className)}>
      {developerMode && (
        <div onClick={() => appControl('devtools')}>
          <i className="bx bx-code-alt" />
        </div>
      )}

      <div onClick={() => appControl('minimize')}>
        <i className="bx bx-minus" />
      </div>

      <div onClick={() => appControl('maximize')}>
        <i className="bx bx-square" />
      </div>

      <div className="close" onClick={() => appControl('close')}>
        <i className="bx bx-x" />
      </div>
    </TitlebarStyled>
  );
};

export default Titlebar;
