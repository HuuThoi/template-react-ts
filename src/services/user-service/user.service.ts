import axios from "axios";

const getAllUsers = () => {
  return axios.get(`/users/plexus-account`);
};

export const UserService = {
  getAllUsers
}

