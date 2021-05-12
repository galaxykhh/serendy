import {keyframes} from 'styled-components';

export const arrowPop = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-35px);
  }
`;

export const tabOpen = keyframes`
    from {
        right: -900px;
    }
    to {
        right: 0px;
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

export const slideUp = keyframes`
    from {
        transform: translateY(1300px);
        
    }
    to {
        transform: translateY(0px);
    }
`;

export const zoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.6);
    }
    to {
        opacity: 1;
        transform: scale(1);
    };
`;

export const zoomOut = keyframes`
    60% {
        opacity: 1;
        transform: scale(1.05);
    } 100% {
        opacity: 0;
        transform: scale(0);
    }
`;