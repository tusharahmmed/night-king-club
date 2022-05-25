import React, { useState } from 'react';
import './TeamVision.css';
import styled from 'styled-components';
import { device } from '../../../constants/ScreenSize';
import videoThumb from '../../../images/video.png';



const TeamVision = () => {

    return (
        <VisionContainer className='section-padding vision'>

            <Title><span>It’s Time</span> to Transform Your <span>Dream Life</span> into <span>Reality</span></Title>
            <VideoThumb>
                <img src={videoThumb} alt="" />
            </VideoThumb>
            <Description>Are you ready to have unforgettable experiences alongside the stunning models, crypto whales, and elite businessmen? <br /> It’s time to start living life as if you’re in a movie.</Description>
            <Button>Elevate Your Life. Get Your NKG Clubber NFT NOW</Button>

        </VisionContainer>
    );
};

export default TeamVision;


const VisionContainer = styled.section`

text-align: center;
padding-top: 4rem;
padding-bottom: 5rem;
margin-top: -1px;
`;
const Title = styled.h2`
font-size: 42px;
line-height: 72px;
font-family: var(--title-font);
padding-bottom: 2rem;
text-transform: uppercase;

@media ${device.laptop}{
    font-size: 36px;
    line-height: 61px;
}
@media ${device.mobileL}{
    font-size: 28px;
    line-height: 47px;
}
span{
    color: var(--theme-color);
}
`;
const VideoThumb = styled.div`

img{
    cursor: pointer;
    width: 70%;

    @media ${device.desktop}{
        width: 70%;
    }
    @media ${device.laptop}{
        width: 80%;
    }
    @media ${device.pad}{
        width: 100%;
    }
    
}
`;
const Description = styled.p`
margin-top: 3rem;
margin-bottom: 20px;
line-height: 36px;

@media ${device.mobileL}{
    margin-top: 2rem;
    font-size: 16px;
    line-height: 26px;
}
`;
export const Button = styled.button`
background: linear-gradient(127.55deg, #FFC603 6.49%, #FF7C00 71.73%);
box-shadow: 0px 15px 60px rgba(232, 80, 91, 0.1);
border-radius: 5px;
color: #010101;
font-size: 20px;
line-height: 30px;
padding: 10px 20px; 
border: none;
outline: none;
cursor: pointer;

@media ${device.mobileL}{
    font-size: 16px;
    line-height: 26px;
}
`;