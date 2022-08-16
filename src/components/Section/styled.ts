import styled from 'styled-components';

export const SectionStyled = styled.div`
  & + .Section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  }

  .section-left {
    h3 {
      font-size: 1.2rem;
    }

    p {
      color: ${props => props.theme.colors.textColor2};
    }
  }

  .inputs {
    width: 400px;

    .ant-space-item {
      width: 100%;
    }
  }

  .spacing {
    height: 0.6rem;
  }
`;
