import { Avatar, Button } from 'antd';
import clsx from 'clsx';

import { DiscordProfileStyled } from './styled';

export interface DiscordProfileProps {
  avatar: string;
  username: string;
  id: string;
  onUnlink?: () => void;
  className?: string;
}

const DiscordProfile = ({ className, avatar, username, id, onUnlink }: DiscordProfileProps) => {
  return (
    <DiscordProfileStyled className={clsx('DiscordProfile', className)}>
      <div className="profile">
        <Avatar src={avatar} size="large" />

        <div>
          <div className="name">{username}</div>
          <div className="id">User ID: {id}</div>
        </div>
      </div>

      <Button onClick={() => onUnlink?.()}>연동해제</Button>
    </DiscordProfileStyled>
  );
};

export default DiscordProfile;
