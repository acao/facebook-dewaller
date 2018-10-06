const LOGGED_OUT_CLASS = "UIPage_LoggedOut";
const GARDEN_WALL_ID = "pagelet_growth_expanding_cta";

const styles = document.createElement('style');

styles.innerText = `
  .${LOGGED_OUT_CLASS} #${GARDEN_WALL_ID} {
    display: none;
  }
`;

document.body.appendChild(styles);

console.log(`
There was a big high wall there that tried to stop me\n
Sign was painted, it said private property\n
But on the back side it didn't say nothing\n
This site was made by you and me\n
- Woody Guthrie, 2018\n
☭ 🐈 ;) ☭\n
`);