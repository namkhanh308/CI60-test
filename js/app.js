import user from "./user.js";
import dataUser from "./dataUser.js";
import UserContainer from "./component/UserContainer.js";

let a = new user("1", "khanh", "nam", "vietnam", "113", "choigame", "132");
let d = new dataUser();
d.addData(a);
d.findUserByName("khanh");
d.countUserFromCountry("vietnam");
d.findUserByGenderAndFavorites("nam", "choigame");
