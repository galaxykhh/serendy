import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComments, faUsers, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons';
import { WHALE } from '../../config';
import { whalePop, zoomIn } from '../../style/keyframes';

const iconList = [
    {
        id: 1,
        icon: faPaperPlane,
    },
    {
        id: 2,
        icon: faPlus,
    },
    {
        id: 3,
        icon: faComments,
    },
    {
        id: 4,
        icon: faEquals,
    },
    {
        id: 5,
        icon: faUsers,
    },
];

const Manual: React.FC = () => {
    return (
        <Column>
            <LogoBox>
            <Logo />
            </LogoBox>
                <Box>
                    {iconList.map(x => (
                        <Icons icon={x.icon}
                            key={x.id}
                        />
                    ))}
                </Box>
        </Column>
    );
};

export default Manual;

const Icons: React.FC<{ icon: any }>= ({icon}) => {
    return (
        <Icon icon={icon} />
    )
}

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    animation: ${zoomIn} .8s
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    margin-top: 20px;
    @media only screen and (max-width: 600px) {
        justify-content: center;
    };
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
    font-size: 50px;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    };
`;

const LogoBox = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: center;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 600px) {
        width: 250px;
        height: 250px;
    };
`;


const Logo = styled.div`
    width: 500px;
    min-width: 500px;
    height: 500px;
    margin-right: 150px;
    background-image: url(${WHALE});
    background-size: cover;
    background-position: center;
    animation: ${whalePop} .5s ease-out alternate infinite;
    @media only screen and (max-width: 600px) {
        min-width: 250px;
        height: 250px;
    };
`;
