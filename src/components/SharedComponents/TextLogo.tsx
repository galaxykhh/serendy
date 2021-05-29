import styled from "styled-components";
import { TEXTLOGO_URL } from "../../config";

export const TextLogo = styled.div`
    width: 600px;
    height: 200px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
    @media only screen and (max-width: 600px) {
        display: none;
    };
`;