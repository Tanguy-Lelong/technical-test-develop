export interface IQuiz {
  _id: string;
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  _id: string;
  name: string;
  answers: IAnswer[];
}

export interface IAnswer {
  _id: string;
  name: string;
  isCorrect: boolean;
}
