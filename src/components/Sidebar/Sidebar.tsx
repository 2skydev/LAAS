import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import clsx from 'clsx';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import logo from '~/assets/images/logo@256.png';
import { configStore } from '~/stores/config';

import { SidebarStyled } from './styled';

export interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const config = useRecoilValue(configStore);
  const { pathname } = useLocation();

  const menus = useMemo(
    () => [
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
            icon: 'search',
            link: '/settings/search',
            text: '검색 설정',
          },
          ...(config.general.developerMode
            ? [
                {
                  icon: 'code-alt',
                  link: '/settings/developers',
                  text: '개발자 옵션',
                },
              ]
            : []),
        ],
      },
    ],
    [config.general.developerMode],
  );

  return (
    <SidebarStyled className={clsx('Sidebar', className)}>
      <div className="logo">
        <img src={logo} alt="logo" width={35} />
        LAAS
      </div>

      <LayoutGroup>
        <div className="menus">
          {menus.map(menuGroup => (
            <div key={menuGroup.title} className="menuGroup">
              <div className="title">{menuGroup.title}</div>

              <div className="items">
                <AnimatePresence>
                  {menuGroup.items.map(item => {
                    const isActive = pathname === item.link;

                    return (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
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
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </LayoutGroup>
    </SidebarStyled>
  );
};

export default Sidebar;
