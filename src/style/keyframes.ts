import {keyframes} from 'styled-components';

export const arrowPop = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(-10px);
  }
`;

export const tabOpen = keyframes`
    from {
        right: -900px;
    }
    to {
        right: 10px;
    }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;