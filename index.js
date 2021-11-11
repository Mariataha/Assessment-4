const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.


//REST Methods
app.get(`/api/todo`, getToDo);
app.put(`/api`/goals/:id`, updateList);
app.post(`/accomplishments`, createAccomplishments);
app.delete(`/api/list/id:`, deleteList`)


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  const toDoCtrl = require('.controllers/toDoListsController');
  const todoURL = '/api/todo';

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
