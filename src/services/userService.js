import axios from "axios";

const USER_URL_API = "http://localhost:3002/users";
const userSevice = {
  getUser: async (data) => {
    try {
      const response = await axios.get(`${USER_URL_API}`);
      const user = response.data.filter(
        (items) => items.password === data.password
      );
      return user;
    } catch (error) {
      console.log("user not found");
      throw new Error(error);
    }
  },
};

export default userSevice;
