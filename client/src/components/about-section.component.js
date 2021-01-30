import styled from '@emotion/styled';
import BP from '../styles/breakpoints';

const AboutSection = styled.div`
    margin-top: 7%;

    &:last-child {
        margin-top: 4%;
    }

    ${BP.small} {
        margin-top: 50px;
        &:last-child {
            margin-top: 30px;
        }
    }
    p a {
        color: #ed0000;
        font-weight: bold;
        border-bottom: 0.2vh solid #ed0000;
    }
`;

export default AboutSection;
