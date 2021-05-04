const Url = "";
import Page from "./page.js";
class CookieFrame extends Page {
  get cookieAgree() {
    return $('[id="introAgreeButton"]');
  }
}
export default new CookieFrame();