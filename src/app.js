/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#name").innerHTML = generatename();
  console.log("Hello Rigo from the console!");
};

let generatename = () => {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var point = [".com", ".net", ".es", ".it"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let y = 0; y < point.length; y++) {
          let name = "www." + pronoun[i] + adj[j] + noun[x] + point[y];
          console.log(name);
        }
      }
    }
  }

  return name;
};
