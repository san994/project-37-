class Quiz{


constructor(){

this.title = createElement("h2")

}

getState(){

var gameStateref = database.ref("gameState");
 gameStateref.on("value",function(data){

  gameState = data.val();

 })


}

updateState(state){

database.ref('/').update({

 gameState : state

})

}

async start(){
  
if(gameState === 0){
  contestant = new Contestant();
  var contestantC = await database.ref('ContestantCount').once("value")
   if(contestantC.exists()){

    contestentCount = contestantC.val()
    contestant.getCount();

   }
}

question = new Question();
question.display();

}

play(){

 // question.hide();
 
  Contestant.getContestentInfo();
 
  if(allcontestants !== undefined){

  var display_position = 150
 
  for(var con in allcontestants){
 
  var correctAns = "answer2"


  if(correctAns === allcontestants[con].answer){
 
   fill("green")
 
 
  }else{
 
   fill("red")
 
  }

  display_position = display_position+40
  
  textSize(25)
  text(allcontestants[con].answer+" : "+allcontestants[con].name,300,display_position)

  }
 
 
 
  }

  
 
 }

 display(){

  

   question.title.hide();
   question.input.hide();
   question.button.hide();
   question.question.hide();
   question.ans.hide();
   question.greeting.hide();
   question.solution1.hide();
   question.solution2.hide(); 
   question.solution3.hide();
   question.solution4.hide();

   this.title.html("QUIZ RESULT")
   this.title.position(300,50)
   




 }


}