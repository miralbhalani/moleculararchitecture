let question1Instance = new Question();
let question2Instance = new Question();
let question3Instance = new Question();


let reflectorInstance = new Reflector();

reflectorInstance.setMainQuestion(question1Instance);
reflectorInstance.setSubQuestion(question2Instance);
reflectorInstance.setSubQuestion(question3Instance);

//when question1Instance value changes as from old value 5 to new value 6 do following
question1Instance.setValue('6')
reflectorInstance.reflect()

question1Instance.setValue('7')
reflectorInstance.reflect()


//Now if somewone says from hear it should also reflect in question4Instance also then
let question4Instance = new Question();
reflectorInstance.setSubQuestion(question4Instance);

// Now 
question1Instance.setValue('8')
reflectorInstance.reflect()
// Now it will reflect in question4 also
