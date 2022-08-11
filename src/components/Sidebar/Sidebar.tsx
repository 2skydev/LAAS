import { Link } from '@tanstack/react-location';

import clsx from 'clsx';
import { motion, LayoutGroup } from 'framer-motion';

import { SidebarStyled } from './styled';

export interface SidebarProps {
  className?: string;
}

export const menus = [
  {
    title: '검색',
    items: [
      {
        icon: 'bell',
        link: '/',
        text: '매물 알림 관리',
      },
    ],
  },
  {
    title: '로그',
    items: [
      {
        icon: 'receipt',
        link: '/logs/notification',
        text: '매물 알림 로그',
      },
    ],
  },
  {
    title: '설정',
    items: [
      {
        icon: 'cog',
        link: '/settings',
        text: '일반 설정',
      },
      {
        icon: 'bell',
        link: '/settings/notification',
        text: '알림 설정',
      },
    ],
  },
];

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <SidebarStyled className={clsx('Sidebar', className)}>
      <div className="logo">LAAS</div>

      <LayoutGroup>
        <div className="menus">
          {menus.map(menuGroup => (
            <div key={menuGroup.title} className="menuGroup">
              <div className="title">{menuGroup.title}</div>

              <div className="items">
                {menuGroup.items.map(item => {
                  const isActive = location.pathname === item.link;

                  return (
                    <Link
                      key={item.text}
                      to={item.link}
                      className={clsx('item', isActive && 'active')}
                    >
                      {isActive && (
                        <motion.div
                          className="menuActiveBG"
                          layoutId="menuActiveBG"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}

                      <i className={`bx bx-${item.icon}`} />
                      <span>{item.text}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </LayoutGroup>
    </SidebarStyled>
  );
};

export default Sidebar;
