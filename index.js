import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const ipAddress = '192.168.1.71'; // Set the specific IP address you want to use

const port = 3010;
const siteData = {
     safeMode: 'true'
}
const baseAPI_URL = "https://v2.jokeapi.dev/joke";
let API_URL;
let joke_Cat = "Any";

const JokeModeSet = (req,res,next) => {
     if(siteData.safeMode == "true"){
          API_URL = `${baseAPI_URL}/${joke_Cat}?safe-mode`
    }else if(siteData.safeMode == "false"){
          API_URL = `${baseAPI_URL}/${joke_Cat}`;
    }else {
          API_URL = `${baseAPI_URL}/${joke_Cat}` ;
    }
    console.log(API_URL);
    next();
}


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(JokeModeSet);


app.get("/", async(req, res) =>{
      try {
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.render("index.ejs",{siteData});
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }

})

app.post("/dark_jokes", (req,res) =>{

     console.log(req.body );
     if(req.body.joke_mode_check == 'false' ){
          siteData.safeMode = 'false';
          console.log(siteData.safeMode)
     }else{
          siteData.safeMode = 'true';
     }
     res.redirect("/")
})

app.post("/programming", async(req,res) =>{
     try {
          joke_Cat = "Programming";
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.redirect("/");
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }
})

app.post("/misc", async(req,res) =>{
     try {
          joke_Cat = "Misc";
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.render("index.ejs",{siteData});
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }
})

app.post("/dark", async(req,res) =>{
     try {
          joke_Cat = "Dark";
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.redirect("/");
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }
})

app.post("/pun", async(req,res) =>{
     try {
          joke_Cat = "Pun";
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.redirect("/");
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }
})

app.post("/spooky", async(req,res) =>{
     try {
          joke_Cat = "Spooky";
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.redirect("/");
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }
})

app.post("/christmas", async(req,res) =>{
     try {
          joke_Cat = "Christmas";
          const result = await axios.get(API_URL);
          siteData.result = result.data;
          // console.log(result.data);
          res.redirect("/");
          console.log("This is site data being sent",siteData);
     } catch (error) {
          console.log(error.response.data);
          res.status(500);
      }
})



app.listen(process.env.PORT || port, () => {
     console.log(`Server running on port:${port}`)
})

