import { Link, useLocation } from 'react-router-dom';

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
        link: '/search/items',
        text: '매물 검색 목록',
      },
    ],
  },
  {
    title: '로그',
    items: [
      {
        icon: 'receipt',
        link: '/search/logs',
        text: '매물 검색 로그',
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
  const { pathname } = useLocation();

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
                  const isActive = pathname === item.link;

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
