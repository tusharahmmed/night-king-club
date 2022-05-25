import React from 'react';
import './Testimonial.css';
import styled from 'styled-components';
import TestimonialItem from './TestimonialItem';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { device } from '../../../constants/ScreenSize';

const Testimonial = () => {

    return (
        <TestimonialContainer className='section-padding'>

            <Title>What do people say about <span>Night King Club?</span></Title>

            <Swiper
                className='testimonial'
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
            >

                {[...Array(6)].map((x, i) =>
                    <SwiperSlide>
                        <TestimonialItem></TestimonialItem>
                    </SwiperSlide>
                )}

            </Swiper>

        </TestimonialContainer>
    );
};

export default Testimonial;

const TestimonialContainer = styled.section`

`;

const Title = styled.h2`
font-size: 42px;
line-height: 54px;
font-family: var(--title-font);
text-transform: uppercase;
text-align: center;
padding: 2rem 0rem;

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
