const DESKTOP_LOGGED_OUT_CLASS = "UIPage_LoggedOut";
const DESKTOP_GARDEN_WALL_ID = "pagelet_growth_expanding_cta";
const DESKTOP_GARDEN_EXTRA_WALL_CLASS = "timelineLoggedOutSignUpDesktopCtaNewDesign";

const MOBILE_GARDEN_WALL_ID = "mobile_login_bar";
const MOBILE_HEADER_ID = "header"
const MOBILE_GARDEN_WALL_PERIMITER = "msite-pages-header-contents";
const MOBILE_LOGIN_URL = "https://m.facebook.com/login/"


function appendStyle (styles) {
  const styleEl = document.createElement('style');
  styleEl.innerText = styles;
  document.body.appendChild(styleEl);
}


/** 
 * The three selectors are:
 * 1: both desktop captive/footer CTAs, only for logged in context
 * 2: the initial login CTA that displays in the header
 * 3: the popover wrapper that appears when scrolling that contains 2
 */

const desktopStyles = `
  .${DESKTOP_LOGGED_OUT_CLASS} #${DESKTOP_GARDEN_WALL_ID},
  #${MOBILE_GARDEN_WALL_ID},
  .${DESKTOP_GARDEN_EXTRA_WALL_CLASS}
  {
    display: none;
  }
`;

appendStyle(desktopStyles)

// since we couldn't find css selectors to detect if a user is logged
// out on mobile, we have to do this.. :(

const logo = document.querySelectorAll(`#${MOBILE_HEADER_ID} a`);

const isMobileLoggedOut = logo && logo.length > 0 && logo[0].href === MOBILE_LOGIN_URL;

// Don't try to apply these potentally risky style changes that are fragile at best
// unless we know they are logged out. 
// Hiding the 2nd child div of msite-pages-header-contents during the logged in
// experience will always hide the first element after the cover image.
// there is no distinctive selector for this element, because it's 
// minified react, and they provided no body id.
// I bet thats a snag for their e2e testing... 

const mobileStyles = `
  #${MOBILE_GARDEN_WALL_PERIMITER} > div:nth-child(2)
  {
    display: none;
  }
`;

if (isMobileLoggedOut) {
  appendStyle(mobileStyles)
}

// @TODO
// This was to append the login button, but the logo already routes to login?
// This just moves the login button element, which will redirect the user back
// to that page when they login, different from logo
//
// const buttons = document.querySelectorAll(`#${MOBILE_GARDEN_WALL_ID} a.btn`);
// const header = document.getElementById(`${MOBILE_HEADER_ID}`);
// header.insertBefore(buttons[1], header.firstElementChild)


console.log(`
There was a big high wall there that tried to stop me\n
Sign was painted, it said private property\n
But on the back side it didn't say nothing\n
This site was made by you and me\n
- Woody Guthrie, 2018\n
☭ 🐈 ;) ☭\n
`);
