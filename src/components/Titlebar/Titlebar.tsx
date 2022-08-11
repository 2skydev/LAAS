import clsx from 'clsx';

import { TitlebarStyled } from './styled';

export interface TitlebarProps {
  className?: string;
}

const Titlebar = ({ className }: TitlebarProps) => {
  const appControl = (action: string) => {
    window.electron.ipcRenderer.send('appControl', action);
  };

  return (
    <TitlebarStyled className={clsx('Titlebar', className)}>
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
