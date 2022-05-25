import React from 'react';
import styled from 'styled-components';
import thumbnai from '../../../images/hero-bg.png'

const HeroSection = () => {
    return (
        <HeroContainer>
            <Wraper>
                <img src={thumbnai} alt="" />
                <span></span>
            </Wraper>
        </HeroContainer>
    );
};

export default HeroSection;

const HeroContainer = styled.section`

`;
const Wraper = styled.div`
position: relative;

img{
    width: 100%;
    height: auto;
    display: flex;
    margin-top: -1px;
}

span{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(8, 1, 16, 0.5) 0%, rgba(16, 6, 18, 0.68) 100%);
}
`;
