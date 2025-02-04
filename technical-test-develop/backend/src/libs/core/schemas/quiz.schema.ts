import { Model, model, Schema, Types } from 'mongoose'

export interface IQuiz {
  _id: Types.ObjectId
  name: string
  questions: IQuestion[]
}

export interface IQuestion {
  _id: Types.ObjectId
  name: string
  answers: IAnswer[]
}

export interface IAnswer {
  _id: Types.ObjectId
  name: string
  isCorrect: boolean
}

const AnswerSchema = new Schema<IAnswer>(
  {
    name: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: false, versionKey: false, id: true },
)

const QuestionSchema = new Schema<IQuestion>(
  {
    name: {
      type: String,
      required: true,
    },
    answers: {
      type: [AnswerSchema],
      required: true,
    },
  },
  { timestamps: false, versionKey: false, id: true },
)

const QuizSchema = new Schema<IQuiz>(
  {
    name: {
      type: String,
      required: true,
    },
    questions: {
      type: [QuestionSchema],
      required: true,
    },
  },
  { timestamps: false, versionKey: false, id: true },
)

type IQuizModel = Model<IQuiz>
const QuizModel = model<IQuiz, IQuizModel>('Quiz', QuizSchema)
export default QuizModel
