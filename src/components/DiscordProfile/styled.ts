import styled from 'styled-components';

export const DiscordProfileStyled = styled.div`
  > .profile {
    display: flex;
    align-items: center;

    .ant-avatar {
      margin-right: 0.75rem;
    }

    .name {
      font-weight: 600;
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .id {
      line-height: 1;
      font-size: 0.75rem;
      color: ${props => props.theme.colors.textColor2};
    }
  }

  .ant-btn {
    margin-top: 1rem;
    width: 20rem;
  }
`;
