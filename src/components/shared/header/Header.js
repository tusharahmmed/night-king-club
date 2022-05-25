import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo/logo.png'
import twitter from '../../../images/icon/twitter.svg';
import telegram from '../../../images/icon/telegram.svg';
import { device } from '../../../constants/ScreenSize';
import { Sling as Hamburger } from 'hamburger-react'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const MenuLinks = () => (
        <>
            <a href="#">HOME</a>
            <a href="#">TEAM VISION</a>
            <a href="#">FOUNDER STORY</a>
            <a href="#">MINT</a>
            <a href="#">FAQ</a>
        </>
    )

    return (
        <HeaderContainer className='section-padding'>
            <Wraper>

                <Logo>
                    <img src={logo} alt="logo" />
                    <h1>NIGHT KING CLUB</h1>
                </Logo>

                <NavSection>
                    <Nav>
                        <MenuLinks />
                    </Nav>

                    <Social>
                        <a href='#'><img src={twitter} alt="twitter" /></a>
                        <a href='#'><img src={telegram} alt="telegram" /></a>
                    </Social>

                    <MobileMenu>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={38} />
                    </MobileMenu>

                </NavSection>

            </Wraper>
        </HeaderContainer>
    );
};

export default Header;


const HeaderContainer = styled.header`
height: 120px;
background: var(--section-bg);

@media ${device.laptop}{
    height: 100px;
}
@media ${device.mobileL}{
    height: 80px;
}
`;

const Wraper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
`;

const Logo = styled.div`
display: flex;
align-items: center;

img{
    width: auto;
}

h1{
    color: var(--theme-color);
    font-family: var(--title-font);
    margin-left: 1rem;
    font-size: 32px;
    line-height: 76px;

    @media ${device.laptop}{
        font-size: 28px;
        line-height: 68px;
    }
    @media ${device.mobileL}{
        display: none;
    }
}
`;

const NavSection = styled.div`
display: flex;
align-items: center;


`;
const Nav = styled.nav`

@media ${device.menuMobile}{
    display: none;
}

a{
    color: var(--font-color);
    margin-right: 20px;
    font-size: 18px;
    line-height: 27px;
    padding: 10px 10px;
 
    &:hover{
        border-bottom: 4px solid;
        border-image: linear-gradient(90deg, rgba(255, 55, 68, 0) 1.85%, #FFC508 50.04%, rgba(252, 163, 17, 0) 96.91%);
        border-image-slice: 1;
    }

    @media ${device.laptop}{
        margin-right: 20px;
        font-size: 16px;
        padding: 10px 0px;
    }

}
`;
const Social = styled.div`
display: flex;
align-items: center;

@media ${device.mobileM}{
    display: none;
}
a{
    &:last-child{
        margin-left: 20px;

        @media ${device.laptop}{
            margin-left: 15px;
        }
    } 
}

`;


const MobileMenu = styled.div`
display: none;
@media ${device.menuMobile}{
    display: block;
    color: var(--theme-color);
    margin-left: 2rem;
}
`;
