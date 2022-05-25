import React from 'react';
import styled from 'styled-components';
import thumb from '../../../images/sidebar-image-2.png'
import quote from '../../../images/icon/quote.svg'
import { device } from '../../../constants/ScreenSize';

const TestimonialItem = () => {
    return (
        <SlideItem>
            <Reviews>
                <ReviewItem>
                    <Description>Night King is super well-connected in the entertainment industry and always throws the best parties.</Description>
                    <Author>Hollywood actress</Author>
                    <img src={quote} alt="" />
                </ReviewItem>
                <ReviewItem>
                    <Description>Night King’s parties are always jam-packed with gorgeous women, even from a plastic surgeon’s perspective.</Description>
                    <Author>Seoul plastic surgeon</Author>
                    <img src={quote} alt="" />
                </ReviewItem>
            </Reviews>

            <Thumbs>
                <img src={thumb} alt="" />
            </Thumbs>

        </SlideItem>

    );
};

export default TestimonialItem;




const SlideItem = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 60px;
padding: 0 8rem 5rem 8rem;

@media ${device.laptop}{
    grid-template-columns: repeat(1, 1fr);
}
@media ${device.pad}{
    padding: 0 6rem 5rem 6rem;
}
@media ${device.mobileL}{
    padding: 0 0rem 5rem 0rem;
}
`;
const Reviews = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

@media ${device.laptop}{
    flex-direction: row;
}
@media ${device.pad}{
    flex-direction: column;
}
`;
const ReviewItem = styled.div`
background: #1E1930;
border-radius: 72px 72px 0px 72px;
padding: 50px 60px;
position: relative;

@media ${device.laptop}{
    margin-right: 20px;
}
@media ${device.pad}{
    margin-right: 0px;
    margin-bottom: 30px;
}

img{
    position: absolute;
    top: 35px;
    right: 35px;
}
`;
const Author = styled.h3`
font-size: 22px;
line-height: 32px;
font-family: var(--title-font);
margin-top: 5px;
`;
const Description = styled.p`
font-size: 18px;
line-height: 32px;
font-style: italic;
`;
const Thumbs = styled.div`
img{
    width: 100%;
}
`;