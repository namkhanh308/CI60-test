const $template = document.createElement("template");
$template.innerHTML = `
<div class="user-container">
      <div class="user-image"></div>
      <div class="user-info">
        <div class="user-name">Khanh</div>
        <div class="user-gender">Male</div>
        <div class="user-info-2">
          <div class="user-country">Viet Nam</div>
          <div class="user-phone">113</div>
        </div>
        <div class="user-favourite">Game</div>
      </div>
    </div>`;
export default class UserContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$image = this.querySelector(".user-image");
    this.$name = this.querySelector(".user-name");
    this.$gender = this.querySelector(".user-gender");
    this.$country = this.querySelector(".user-country");
    this.$phone = this.querySelector(".user-phone");
    this.$favourite = this.querySelector(".user-favourite");
  }
  static get observedAttributes() {
    return ["name", "country", "phone", "image", "gender", "favourite"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "country") {
      this.$country.innerHTML = newValue;
    } else if (attrName == "name") {
      this.$name.innerHTML = newValue;
    } else if (attrName == "gender") {
      this.$gender.innerHTML = newValue;
    } else if (attrName == "image") {
      this.$image.style.backgroundImage = url("${newValue}");
    } else if (attrName == "phone") {
      this.$phone.innerHTML = newValue;
    } else if (attrName == "favourite") {
      this.$favourite.innerHTML = newValue;
    }
  }
}
window.customElements.define("user-container", UserContainer);
