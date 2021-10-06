import BackendService from "./BackendService";

async function getUsers() {
  return BackendService.get("/users?page=1");
}
async function getUsersById(id = 1) {
  return BackendService.get(`/users/${id}`);
}
const UsersService = {
  getUsers,
  getUsersById,
};

export default UsersService;
