import styled from 'styled-components';

export const NotificationStatusStyled = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;

  .ant-badge {
    margin-right: 0.5rem;
  }

  .ant-badge-status-dot {
    width: 8px;
    height: 8px;
  }

  .ant-btn {
    margin-left: 1rem;

    .bx {
      margin-top: 5px;
    }
  }
`;
