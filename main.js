import './style.css'

var client_id = '6ee5ebe38b0a4599a1db66d707a30ca1';
var redirect_uri = 'https://fabian1420.github.io/';


import jQuery from 'jquery'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
var scope = 'user-read-private user-read-email';




let button = document.querySelector("button");

button.addEventListener("click",() => {

  // console.log("click")

  jQuery.ajax({
  url:`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}` ,
  success: (data) => {
    console.log(data)
  } 

})

  // window.location.replace(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`)

})

// window.redirect_uri

// window.location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}"

// var app = express();


// app.get('/login', function(req, res) {

//   var state = generateRandomString(16);
//   

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });