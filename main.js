// const geocode=(address,callback)=>{
//     setTimeout(()=>{
//         const data={
//             latitude:0,
//             longitude:0


//         }
//         callback(data);
//     })

// }
// geocode("",(scale)=>{
// console.log(scale);
// })
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
// const add=(a,b,callback)=>{
// setTimeout(()=>{
// callback(a+b)
// },2000)
// }
// add(1,4,(sum)=>{
//     console.log(sum);
// })
// const age=78;
// const email="haqjunaidul5@gmail.com";
// const gender="male";
// const address="era-gardenia estate"

// const book={
//     name:"harry potter",
//    age,
//     email,
//     gender,
//     address,
//     rating:4.6
// }

// const {label="it is a label",rating=6} = book
// console.log(label);
// console.log(rating);
// console.log(book.email);
// const transaction=(type,{name,age})=>{
//     console.log(type,name,age);
// }
// // transaction("order",book);
// const hbs=require("hbs");
// const path=require("path");
// const express=require("express");
// const res = require("express/lib/response");
// const { hasSubscribers } = require("diagnostics_channel");
// const app=express();
// console.log(__dirname);
// console.log(__filename);
// const dirpath=path.join(__dirname,"./include");
// app.use(express.static(dirpath));
// // const dirname=path.join(__dirname);
// // app.use(express.static(dirname));
// app.set("view engine","hbs");
// const viewpath=path.join(__dirname,"./template/views");
// app.set("views",viewpath);
// const partialpath=path.join(__dirname,"./template/partials");
// hbs.registerPartials(partialpath);
// app.get("/",(req,res)=>{
//   res.render("",{
//     title:"this is the title of root page",
//     name:"junaidul haq",
//     age:23
//   });
// })
// app.get("/index",(req,res)=>{
//   res.render("index",{
//     title:"this is the title of index page",
//     name:"junaidul haq",
//     age:23
//   });
// })
// app.get("/about",(req,res)=>{
//   res.render("about",{
//     title:"this is the title of about page",
//     name:"junaidul haq",
//     age:23
//   });
// })
// app.get("/help",(req,res)=>{
//   res.render("help",{
//     title:"this is the title of help page",
//     name:"junaidul haq",
//     age:23
//   });
// })
// app.get("/",(req,res)=>{
//   res.send("your root directory is working fine");
// })

// app.get("/help",(req,res)=>{
//     res.send("<h1>This is a help page can I help you</h1>")
//     })
//   app.get("/details",(req,res)=>{
//     res.send({
//         name:"junaidul haq",
//         age:23,
//         phone:9997558701
//     });
//   })
//   app.get("/about",(req,res)=>{
//     res.send('<h2>This is our about page </h2>');
//   })
//   app.get("/help/*",(req,res)=>{
//     res.render("404",{
//       title:"404",
//       name:"junaidul haq",
//       errormessage:"this is an error page cannot be found"
//     });
//   })
//   app.get("*",(req,res)=>{
//     res.render("404",{
//       title:"404 ",
//       name:"junaidul haq",
//       errormessage:"this is an error page cannot be found"
//     });
//   })
//   app.listen(3007,()=>{
//       console.log("your server is running on port number 3007");
//   });