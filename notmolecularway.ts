let question1Instance = new Question();
let question2Instance = new Question();
let question3Instance = new Question();

question1Instance.setValue(5);
question2Instance.setValue(question1Instance.getValue());
question3Instance.setValue(question1Instance.getValue());
