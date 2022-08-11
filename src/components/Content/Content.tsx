import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { ContentStyled } from './styled';

export interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

const Content = ({ className, children }: ContentProps) => {
  return (
    <ContentStyled className={clsx('Content', className)}>
      <div className="header">
        <i className="bx bx-hash" />

        <motion.span
          initial={{ opacity: 0, x: 3 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          key={location.pathname}
        >
          {'해당 페이지의 이름이 없는거 같네요 :('}
        </motion.span>
      </div>

      <div className="content">
        <AnimatePresence>
          <motion.div
            key="animate"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </ContentStyled>
  );
};

export default Content;
