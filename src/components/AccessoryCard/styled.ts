import styled from 'styled-components';

import { AccessoryCardProps } from './AccessoryCard';

const relicGradient = `linear-gradient(135deg, #48220b, #a24006)`;
const ancientGradient = `linear-gradient(135deg, #3d3325, #dcc999)`;

export const AccessoryCardStyled = styled.div<Pick<AccessoryCardProps, 'grade'>>`
  display: inline-block;
  background-color: ${props => props.theme.colors.sidebarBG};
  padding: 1rem;
  border-radius: 10px;

  > .profile {
    display: flex;
    align-items: center;

    > .image {
      width: 3rem;
      height: 3rem;
      background: ${props => (props.grade === 'relic' ? relicGradient : ancientGradient)};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin-right: 1rem;

      img {
        display: block;
        width: 90%;
        height: 90%;
        object-fit: cover;
      }
    }

    > .right {
      .name {
        color: ${props => props.theme.colors[props.grade]};
      }

      .quality {
        font-size: 0.85rem;
      }

      .quality0 {
        color: #f44336;
      }

      .quality10 {
        color: #fdd835;
      }

      .quality30 {
        color: #70ac47;
      }

      .quality70 {
        color: #2196f3;
      }

      .quality90 {
        color: #ab47bc;
      }

      .quality100 {
        color: #ffb300;
      }
    }
  }
`;
