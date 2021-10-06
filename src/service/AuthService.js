import BackendService from './BackendService';

async function login(data = {}) {
  return BackendService.post('/users/login', data);
}
async function register(data={}){
  return BackendService.post('/users/register',data);
}
async function getUsers(){
  return BackendService.get('/users?page=1');
}
const AuthService = {
    login,
    register,
    getUsers
};

export default AuthService;
