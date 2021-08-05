const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

const learning = {
  //learning is empty object -> object literal
  topic: "JavaScript", //object property (topic: "JS") always comes with key-value pairs
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs"
  ], //an array that contains four learning goals as elements
  category: "Front End Development",
  topicImportance: "high",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  achivedStudyGoal: false,

  //ADD VALUEA & CREATE A CONDITIONAL STATEMENT
  addStudyTime: function (hours) {
    //A property that is a function is called a method
    this.hoursThisWeek += hours; //Use this keyword to access object properties inside the method
    if (this.hoursThisWeek >= this.weeklyHourGoal) {
      this.achivedStudyGoal = true;
      //Call the celebrate function
      this.celebrate();
    }
  },
  //ADD A METHOD TO CELEBRATE
  celebrate: function () {
    body.classList.add("celebrate");
    success.classList.remove("hide");
    dance.classList.remove("hide");
  }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`; //.length identify the number of elements in the array

topicElement.classList.remove("hide");
countElement.classList.remove("hide");

learning.addStudyTime(); //argument
