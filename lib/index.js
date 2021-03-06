const DESKTOP_LOGGED_OUT_CLASS = "UIPage_LoggedOut";
const DESKTOP_GARDEN_WALL_ID = "pagelet_growth_expanding_cta";
const DESKTOP_GARDEN_EXTRA_WALL_CLASS = "timelineLoggedOutSignUpDesktopCtaNewDesign";
const DESKTOP_EXPANDING_CTA_CLOSE_BUTTON_ID = "expanding_cta_close_button";
const DESKTOP_EXPANDING_CTA_ID = "pagelet_growth_expanding_cta";
const DESKTOP_EXPANDING_HEADER_AREA_CTA_ID = "headerArea";

const MOBILE_GARDEN_WALL_ID = "mobile_login_bar";
const MOBILE_HEADER_ID = "header";
const MOBILE_GARDEN_WALL_PERIMITER = "msite-pages-header-contents";
const MOBILE_LOGIN_URL = "https://m.facebook.com/login/";

const MOBILE_POPOUT_ID = "popup_xout";

/**
 * Defaults, for simplicity's sake:
 *
 * 1. logged out expanding cta
 * 2. mobile header cta
 * 3. desktop cta for person page
 */
const defaultStyles = `
  .${DESKTOP_LOGGED_OUT_CLASS} #${DESKTOP_GARDEN_WALL_ID},
  #${MOBILE_GARDEN_WALL_ID},
  .${DESKTOP_GARDEN_EXTRA_WALL_CLASS},
  #${DESKTOP_EXPANDING_HEADER_AREA_CTA_ID},
  #mFinchContainer > div:nth-child(2)
  {
    display: none;
  }
`;

// Don't try to apply these potentally risky style changes that are fragile at best
// unless we know they are logged out.
// Hiding the 2nd child div of msite-pages-header-contents during the logged in
// experience will always hide the first element after the cover image.
// there is no distinctive selector for this element, because it's
// minified react, and theres no id for the cta element.

// @TODO: find more definite ways of applying this change (maybe with the observer?)

const mobileStyles = `
  #${MOBILE_GARDEN_WALL_PERIMITER} > div:nth-child(2)
  {
    display: none;
  }
`;

function appendStyle(styles) {
  const styleEl = document.createElement("style");
  styleEl.innerText = styles;
  document.body.appendChild(styleEl);
}

function observeVisibility(element, callback) {
  if (!IntersectionObserver) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        callback(entry.intersectionRatio > 0);
      });
    },
    {
      root: document.documentElement
    }
  );

  observer.observe(element);
}

function hideDesktopCTA(visible) {
  const notNow = document.getElementById(DESKTOP_EXPANDING_CTA_CLOSE_BUTTON_ID);
  if (visible) {
    appendStyle(defaultStyles);
    const timeout = parseInt(Math.floor(Math.random() * 1400) + 1100, 10);
    setTimeout(() => {
      if (notNow) {
        notNow.click();
      }
    }, timeout);
  }
}

function observeAndCloseExpandingCTA() {
  const expandingWall = document.getElementById(DESKTOP_GARDEN_WALL_ID);
  const headerWall = document.getElementById(DESKTOP_EXPANDING_HEADER_AREA_CTA_ID);
  if (expandingWall) {
    observeVisibility(expandingWall, hideDesktopCTA);
  }
  if (headerWall) {
    observeVisibility(headerWall, hideDesktopCTA);
  }
}

function hidePopout() {
  const popoutIcon = document.getElementById(MOBILE_POPOUT_ID);
  const popout = popoutIcon.parentElement.parentElement;
  if (popout) {
    console.log(popout);
    popout.style = `display: none`;
  }
}

/**
 * invoke all of the above!
 */
function invokeFacebookDewaller() {
  // append these styles by default, always
  appendStyle(defaultStyles);

  // since we couldn't find css selectors to detect if a user is logged
  // out on mobile, we have to do this.. :(

  const logo = document.querySelectorAll(`#${MOBILE_HEADER_ID} a`);

  const isMobileLoggedOut = logo && logo.length > 0 && logo[0].href === MOBILE_LOGIN_URL;
  hidePopout()
  if (isMobileLoggedOut) {

    appendStyle(mobileStyles);
  }
  // else if its desktop, start observing changes
  else if (logo.length < 1) {
    observeAndCloseExpandingCTA();
  }
}

try {
  invokeFacebookDewaller();
} catch (err) {
  console.table(err)
  throw err;
}

console.log(`
🐈 ~ 🐈 ~ 🐈
There was a big high wall there that tried to stop me\n
Sign was painted, it said private property\n
But on the back side it didn't say nothing\n
This site was made by you and me\n
- Woody Guthrie, 2018\n
🐈 ~ 🐈 ~ 🐈 \n
`);
