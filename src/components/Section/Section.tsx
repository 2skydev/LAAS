import { ReactNode } from 'react';

import 'antd';
import { Col, Row } from 'antd';
import clsx from 'clsx';

import { SectionStyled } from './styled';

export interface SectionProps {
  className?: string;
  children?: ReactNode;
  title: string;
  description?: ReactNode;
}

const Section = ({ className, children, title, description }: SectionProps) => {
  return (
    <SectionStyled className={clsx('Section', className)}>
      <Row gutter={16}>
        <Col className="section-left" span={10}>
          <h3 className="title">{title}</h3>

          {description && <div className="description">{description}</div>}
        </Col>

        <Col span={14}>{children}</Col>
      </Row>
    </SectionStyled>
  );
};

export default Section;
