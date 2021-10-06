import BackendService from './BackendService';

async function login(data = {}) {
  return BackendService.post('/login', data);
}
async function register(data={}){
  return BackendService.post('/register',data);
}


const AuthService = {
    login,
    register,
};

export default AuthService;
