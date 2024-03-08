class AnswerModel {
  
  private _value: string
  private _correct: boolean
  private _unveiled: boolean

  constructor(
    value: string,
    correct: boolean,
    unveiled: boolean = false
  ) {
    this._value = value
    this._correct = correct
    this._unveiled = unveiled
  }

  static correct(value: string): AnswerModel {
    return new AnswerModel(value, true)
  }

  static incorrect(value: string): AnswerModel {
    return new AnswerModel(value, false)
  }

  public get value(): string {
    return this._value
  }

  public get correct(): boolean {
    return this._correct
  }

  public get unveiled(): boolean {
    return this._unveiled
  }

  public toObject(): any {
    return {
      value: this._value,
      correct: this._correct,
      unveiled: this._unveiled
    }
  }

  static fromObject(json: any): AnswerModel {
    return new AnswerModel(json.value, json.correct, json?.unveiled ?? false)
  }

  public unveil() {
    return new AnswerModel(this._value, this.correct, true)
  }

}

export default AnswerModel