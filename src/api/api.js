import api from 'lib/api';

  api.new('http://localhost:3000');

export function register(username, password) {
  api.post('/register', {username:username, password: password})
    .then(function(resp){
      console.log(resp);
    }).catch(function(err){
      console.log('oops')
      console.dir(err.message);
    })
}

export function login(username, password) {
  api.login(username, password)
    .then(function(resp){
      console.log(resp)
    });
}

export function getUser() {
  api.get('/user').then(function(resp){
    console.log(resp);
  })
}

export function logout() {
  api.logout();
}