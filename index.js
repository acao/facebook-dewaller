const LOGGED_OUT_CLASS = "UIPage_LoggedOut";
const PAGELET_ID = "pagelet_growth_expanding_cta";

const styles = document.createElement('style');

styles.innerText = `
  .UIPage_LoggedOut #${PAGELET_ID} {
    display: none;
  }
`

console.log(`
There was a big high wall there that tried to stop me\n
Sign was painted, it said private property\n
But on the back side it didn't say nothing\n
This site was made by you and me\n
- Woody Guthrie, 2018\n
☭ 🐈 ;) ☭\n
`)

document.body.appendChild(styles);