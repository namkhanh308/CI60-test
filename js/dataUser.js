import user from "./user.js";
export default class dataUser {
  user1;

  constructor(user1) {
    this.user1 = [];
  }
  addData(a) {
    if (a instanceof user) {
      this.user1.push(a);
      return;
    }
  }
  findUserByName(name1) {
    for (let i = 0; i < this.user1.length; i++) {
      if (this.user1[i].name == name1) {
        this.user1[i].infor();
      }
    }
  }
  countUserFromCountry(country1) {
    let d = 0;
    for (let i = 0; i < this.user1.length; i++) {
      if (this.user1[i].country == country1) {
        d = d + 1;
      }
    }
    console.log("so luong ng dung la =" + d);
  }
  findUserByGenderAndFavorites(gender, favorites) {
    for (let i = 0; i < this.user1.length; i++) {
      if (this.user1[i].gender == gender && this.user1[i].favorites == favorites) {
        this.user1[i].infor;
      }
    }
  }
}
