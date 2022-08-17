import { Badge, Button, Tooltip } from 'antd';
import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

import { searchStore } from '~/stores/search';

import { NotificationStatusStyled } from './styled';

export interface NotificationStatusProps {
  className?: string;
}

const NotificationStatus = ({ className }: NotificationStatusProps) => {
  const { status } = useRecoilValue(searchStore);

  const handleRequestNowSearch = () => {};

  return (
    <NotificationStatusStyled className={clsx('NotificationStatus', className)}>
      <Badge status={status.status as any} />

      <span className="description">{status.description}</span>

      {status.id === 'nextSearchSec' && (
        <Button
          icon={
            <Tooltip title="대기시간 무시하고 바로 검색 시작하기">
              <i className="bx bx-skip-next" />
            </Tooltip>
          }
          onClick={handleRequestNowSearch}
        />
      )}
    </NotificationStatusStyled>
  );
};

export default NotificationStatus;
