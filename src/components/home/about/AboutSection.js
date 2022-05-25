import React from 'react';
import './AboutSection.css';
import styled from 'styled-components';
import topThumb from '../../../images/logo/logo-lg.png'
import bottomThumb from '../../../images/sidebar-image-1.png'
import { Button } from '../teamvision/TeamVision';
import { device } from '../../../constants/ScreenSize';

const AboutSection = () => {
    return (
        <AboutContainer className='section-padding about'>
            <Wraper>

                <SubWraper className='about-wraper'>
                    <TobSection>
                        <img src={topThumb} alt="logo" />
                        <TopInfo>
                            <Title><span>Night King Club:</span> an exclusive Web 3.0 Global social club</Title>

                            <Description>As the Web 3.0 home for business elites and stunning models, Night King Club bridges the gap between the metaverse and the physical world.</Description>

                            <Description> We share a passion for life and ultra-high-energy parties. Here, gorgeous models and top businessmen will share their unique talents, expertise, resources, and <span>ALPHA.</span></Description>

                            <Description>Whether the market is up or down, Night King Club offers a place to unwind and live life to the fullest with members who feel like family.</Description>
                        </TopInfo>
                    </TobSection>

                    <BottomSection>
                        <BottomInfo>
                            <Title>The dream membership NFT you've been waiting for - <span>NKG clubbers</span> are more than just stylish guys</Title>
                            <Description>They're a collection of 5000 utility-enabled PFPs with unique designs and utilities. Each NKG clubber can unlock exclusive Night King Club benefits. The longer you hold and stake, the better the rewards. Of course, we call it clubbing.</Description>
                            <Button>Learn more about the NKG Clubber NFT utilities</Button>
                        </BottomInfo>
                        <img src={bottomThumb} alt="" />
                    </BottomSection>
                </SubWraper>

            </Wraper>
        </AboutContainer>
    );
};

export default AboutSection;


const AboutContainer = styled.section`
padding-top: 40px;
padding-bottom: 40px;
`;
const Wraper = styled.div`
background: #0f0f0f75;
border-radius: 60px;
padding: 60px 100px 70px;

@media ${device.pad}{
    padding: 35px 80px 40px;  
}
@media ${device.mobileL}{
    padding: 10px 20px 15px;  
}
`;

const SubWraper = styled.div`

`;

const TobSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 4rem;
img{
    width: 35%;
    @media ${device.laptop}{
        width: 60%;
    }
}

@media ${device.laptop}{
    flex-direction: column;
    margin-bottom: 6rem;
}
@media ${device.laptop}{
    flex-direction: column;
    margin-bottom: 4rem;
}
`;
const TopInfo = styled.div`
margin-left: 100px;

@media ${device.laptop}{
    width: 100%;
    margin-left: 0px;
    margin-top: 50px;
    text-align: center;
}
`;
const Title = styled.h2`
font-size: 36px;
line-height: 54px;
text-transform: uppercase;
font-family: var(--title-font);
margin-bottom: 20px;

@media ${device.pad}{
    font-size: 30px;
    line-height: 48px;
}
@media ${device.mobileL}{
    font-size: 26px;
    line-height: 38px; 
}

span{
    color: var(--theme-color);
}
`;
const Description = styled.p`
font-size: 18px;
line-height: 28px;
margin-bottom: 20px;

span{
    color: var(--theme-color);
}
`;


const BottomSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media ${device.laptop}{
    flex-direction: column;
}

img{
    width: 40%;

    @media ${device.laptop}{
        width: 60%;
    }
    @media ${device.mobileL}{
        width: 80%;
    }
}
`;
const BottomInfo = styled.div`
width: 60%;
margin-right: 10px;

@media ${device.laptop}{
    width: 100%;
    margin-right: 0px;
    margin-bottom: 5rem;
    text-align: center;
}
`;