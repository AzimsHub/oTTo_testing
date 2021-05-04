const Url = "";
import Page from "./page.js";
class HomePage extends Page {
    get logo() {
        //return $('[id="hplogo"]');
        return $('[class="lnXdpd"]');
    }

    get searchBar() {
      return $('[class="RNNXgb"]');
  }

  get voiceIcon() {
    return $('[class="HPVvwb"]');
}

get searchIcon() {
  return $('[class="wFncld z1asCe MZy1Rb"]');
}

  open() {
    super.open(`${Url}`);
  }
}
export default new HomePage();