// console.log("Hello World"); 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors & more Designing</title>
      <style>
          * {
              box-sizing: border-box;
  
          }
  
          .container {
              border: 5px solid purple;
              background-color: rgb(237, 221, 255);
              padding: 40px;
              margin: 40px auto;
              width: 600px; 
          }
          a{
              text-decoration: none;
          }
         
          a:hover{                   /* when activated  */
              color: rgb(243, 243, 243);
              background-color: rgb(59, 4, 4);
          }
          a:visited{
              background-color: rgb(127, 127, 202);
          }
          a:active{                 /* when hold*/
              background-color: darkcyan;
          }
          .btn{
              background-color: rgb(107, 184, 107);
              padding: 5px;
              border: none;
              font-size: 15px;
              font-weight: bold;
              cursor: pointer;
              margin: 5px 20px;
              border-radius: 10px;
              color: rgb(2, 44, 2);
          }
  
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>This is the heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi amet quisquam non, quam vero labore in
              mollitia velit sapiente inventore, veniam tenetur libero aut ducimus asperiores. Sint sapiente alias
              inventore illo neque, natus fugit eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, assumenda quam tempora adipisci ab, vel nisi, in harum iste nam dicta at commodi quasi
              molestias modi perferendis. Laboriosam, repudiandae. Dicta fuga iure debitis incidunt sit!</p>
          <a href="https://1anime.to/home" class="btn">learn more</a>
          <button class="btn" >contact us</button>
  
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// NOTES:
// REPL refers to the node program opened in a terminal 
// _ is used to get the previous variable 
// use double tab to get all the included node functions