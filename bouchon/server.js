const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const PORT = 8000;

app.use(cors());

//////////GET METHODS

app.get("/token", (req, res) => {
    // Données à renvoyer au format JSON
    const data = { token: "test" };

    // Renvoyer les données au format JSON
    res.json(data);
});

app.get("/qrcode", (req, res) => {
    // Données à renvoyer au format JSON
    const data = { hash: "test hash" };

    // Renvoyer les données au format JSON
    res.json(data);
});

//////////POST METHODS
// app.use(express.json()); //!!!! necessaire pour récupérer le body des requêtes POST

// //pour ajouter un log à un user (USER)
// app.post("/api/stuff", async (req, res, next) => {
//   console.log("post request received");
//   const newData = req.body.logs;
//   console.log("New Data sent by POST request");
//   console.log(newData);
//   try {
//     console.log("appel de mongo en cours");
//     await client.connect();
//     console.log("connect done");
//     await client
//       .db("gymlogger")
//       .collection(COLLECTION)
//       .updateOne({ user: USER }, { $push: { logs: { $each: newData } } });
//     res.status(201).send("Successfully updated document!");
//   } catch (e) {
//     console.error(e);
//     res.status(500).send("Error updating document");
//   } finally {
//     client.close();
//   }
// });

//RUN SERVER
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("server start on port " + PORT);
});
