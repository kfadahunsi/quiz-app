export type Question = {
    id: number
    question: string
    options: string[]
    answer: null| number
}

export type QuestionList = Question []