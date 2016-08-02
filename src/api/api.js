import api from 'lib/api';

  api.new('http://localhost:3000');

export function register(username, password) {
  api.post('/register', {username:username, password: password})
    .then(function(resp){
      console.log(resp);
    })
}

export function login(username, password) {
  api.login(username, password);
}

export function getUser() {
  api.get('/user').then(function(resp){
    console.log(resp);
  })
}

export function logout() {
  api.logout();
}