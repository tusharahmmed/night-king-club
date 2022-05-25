const size = {
    mobileM: '500px',
    mobileL: '700px',
    tablate: '800px',
    pad: '900px',
    MobileMenu: '1000px',
    laptop: '1200px',
    desktop: '1920px'
  }
  
  export const device = {
    desktop: `(max-width: ${size.desktop})`,
    laptop: `(max-width: ${size.laptop})`,
    menuMobile: `(max-width: ${size.MobileMenu})`,
    pad: `(max-width: ${size.pad})`,
    tab: `(max-width: ${size.tablet})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileM: `(max-width: ${size.mobileM})`,
  };