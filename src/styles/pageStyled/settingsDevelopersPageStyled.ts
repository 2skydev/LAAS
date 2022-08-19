import styled from 'styled-components';

export const SettingsDevelopersPageStyled = styled.div`
  .date {
    > span {
      color: ${props => props.theme.colors.textColor2};
    }
  }

  .logs {
    margin-top: 1rem;

    > .item {
      padding: 1rem;
      background-color: ${props => props.theme.colors.sidebarBG};
      border-radius: 6px;
      color: ${props => props.theme.colors.textColor2};

      > .path {
        font-weight: bold;
      }

      > .ant-divider {
        margin: 1rem 0;
      }

      > .texts {
        overflow: auto;
        max-height: 30rem;
      }
    }
  }
`;
