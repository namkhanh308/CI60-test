export default class user {
  id;
  name;
  gender;
  country;
  phoneNumber;
  favorites;
  avatar;
  constructor(id, name, gender, country, phoneNumber, favorites, avatar) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.country = country;
    this.phoneNumber = phoneNumber;
    this.favorites = favorites;
    this.avatar = avatar;
  }
  infor() {
    console.log("id=" + this.id + " name=" + this.name + " gender=" + this.gender + " country=" + this.country + " phone=" + this.phoneNumber + " favorites=" + this.favorites + " avatar=" + this.avatar);
  }
}
