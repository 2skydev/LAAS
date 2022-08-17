import { Avatar, Button } from 'antd';
import clsx from 'clsx';

import { DiscordProfileStyled } from './styled';

export interface DiscordProfileProps {
  avatar: string;
  username: string;
  onUnlink?: () => void;
  className?: string;
}

const DiscordProfile = ({ className, avatar, username, onUnlink }: DiscordProfileProps) => {
  return (
    <DiscordProfileStyled className={clsx('DiscordProfile', className)}>
      <Avatar src={avatar} />
      <div className="name">{username}</div>

      <Button onClick={() => onUnlink?.()}>연동해제</Button>
    </DiscordProfileStyled>
  );
};

export default DiscordProfile;
