import express from "express";
// require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/api/details", (req, res) => {
  const data = [
    {
      id: 1,
      name: "mohd anas",
      description: "he is good boy",
    },
    {
      id: 2,
      name: "mohd ",
      description: "he is very good boy",
    },
    {
      id: 3,
      name: "vipin",
      description: "he is good boy",
    },
    {
      id: 4,
      name: "suhaib",
      description: "he is good boy",
    },
    {
      id: 5,
      name: "danish",
      description: "he is good boy",
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
