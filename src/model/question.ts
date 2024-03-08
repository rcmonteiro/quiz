import { shuffle } from "../utils/common"
import AnswerModel from "./answer"

class QuestionModel {

  private _id: number
  private _title: string
  private _answers: AnswerModel[]
  private _correct: boolean

  constructor (
    id: number, 
    title: string, 
    answers: AnswerModel[], 
    correct: boolean = false, 
  ) {
    this._id = id
    this._title = title
    this._answers = answers
    this._correct = correct
  }

  public get id(): number {
    return this._id
  }

  public get title(): string {
    return this._title
  }

  public get answers(): AnswerModel[] {
    return this._answers
  }

  public get correct(): boolean {
    return this._correct
  }

  public get answered(): boolean {
    // TODO: Implementar usando Array.reduce()
    for (let answer of this._answers)
      if (answer.unveiled) return true
    return false
  }

  public toObject(): any {
    const answers = this._answers.map(answer => answer.toObject())
    return {
      id: this._id,
      title: this._title,
      correct: this._correct,
      answered: this.answered,
      answers: answers      
    }
  }

  static fromObject(json: any): QuestionModel {
    const answers = json.answers.map((answer: any) => AnswerModel.fromObject(answer))
    return new QuestionModel(json.id, json.title, answers, json.correct)
  }

  public shuffleAnswers(): QuestionModel {
    let shuffledAnswers = shuffle(this._answers)
    return new QuestionModel(this._id, this._title, shuffledAnswers, this._correct)
  }

  public answerQuestion(index: number): QuestionModel {
    const correct = this._answers[index]?.correct
    const answers = this._answers.map((answer,i) => {
      // Retorna a questão revelada para a resposta do usuário e também a correta
      if (index === i || answer.correct)
        return answer.unveil()
      return answer
    })
    console.log(correct)
    return new QuestionModel(this._id, this.title, answers, correct)
  }

}

export default QuestionModel