class Reflector  {

  mainQuestion;
  subQuestions: any = [];
  setMainQuestion(_questionInstance) {
    this.mainQuestion = _questionInstance
  }
  
  setSubQuestion(_questionInstance) {
    this.subQuestions.push(_questionInstance);
  }
  
  relect() {
    this.subQuestion.forEach((_questionInstance) => {
      _questionInstance.setValue(this.mainQuestion.getValue())
    })
  }
}
