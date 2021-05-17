import { keyframes } from 'styled-components';

export const arrowPop = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-35px);
  }
`;

export const slideLeft = keyframes`
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

export const whalePop = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
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

export const paperPlane = keyframes`
    50% {
        transform: scale(1.3) translateY(100px) translateX(-100px);
        opacity: 1
    }

    100% {
        transform: scale(1) translateY(-1000px) translateX(1000px);
        opacity: 0;
    }
`;

export const setTimeFade = keyframes`
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;