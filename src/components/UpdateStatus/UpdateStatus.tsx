import { UpdateStatus as UpdateStatusType } from '@app/utils/updater';
import { Button } from 'antd';
import clsx from 'clsx';
import dayjs from 'dayjs';

import { UpdateStatusStyled } from './styled';

export interface UpdateStatusProps {
  className?: string;
  status: UpdateStatusType;
}

const UpdateStatus = ({ className, status }: UpdateStatusProps) => {
  const handleCheckForUpdate = () => {
    window.electron.checkForUpdate();
  };

  const handleUpdateNow = () => {
    window.electron.quitAndInstall();
  };

  return (
    <UpdateStatusStyled className={clsx('UpdateStatus', className)}>
      {status.event === 'checking-for-update' && <div>업데이트를 확인중입니다...</div>}

      {status.event === 'update-available' && <div>업데이트가 있습니다. 다운로드중입니다...</div>}

      {status.event === 'update-not-available' && (
        <div>
          최신 버전입니다. ({dayjs(status.time).format('YYYY-MM-DD HH:mm:ss')})
          <br />
          <Button onClick={handleCheckForUpdate}>업데이트 확인</Button>
        </div>
      )}

      {status.event === 'error' && (
        <div>
          업데이트를 확인하는 도중 오류가 발생했습니다.
          <br />
          <Button onClick={handleCheckForUpdate}>업데이트 확인</Button>
        </div>
      )}

      {status.event === 'download-progress' && (
        <div>{Number(status.data.percent).toFixed(1)}% 다운로드중입니다...</div>
      )}

      {status.event === 'update-downloaded' && (
        <div>
          업데이트가 다운로드 되었습니다.
          <br />
          앱을 재시작하면 업데이트가 적용됩니다.
          <br />
          <Button onClick={handleUpdateNow}>지금 설치</Button>
        </div>
      )}
    </UpdateStatusStyled>
  );
};

export default UpdateStatus;
