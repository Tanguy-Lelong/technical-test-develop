import { IQuiz } from "../data-interfaces/quiz.interfaces";

export async function deleteQuiz(quizId: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/api/quizzes/${quizId}`, {
    method: "DELETE",
  });
  try {
    if (response.ok) return;
  } catch (e) {
    console.error(e);
  }
}

export async function getQuizzes(): Promise<IQuiz[]> {
  const response = await fetch("http://localhost:3001/api/quizzes", {
    method: "GET",
  });
  try {
    const bodyJson = await response.json();
    if (bodyJson && bodyJson.data) {
      let result: IQuiz[] = [];
      result = bodyJson.data;
      return result;
    }
  } catch (e) {
    console.error(e);
  }
  return [];
}

export async function addQuiz(quiz: IQuiz): Promise<IQuiz> {
  const response = await fetch("http://localhost:3001/api/quizzes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quiz),
  });
  try {
    const bodyJson = await response.json();
    if (bodyJson && bodyJson.data) {
      return bodyJson.data;
    }
  } catch (e) {
    console.error(e);
  }
  return {} as IQuiz;
}

export async function exportData(): Promise<void> {
  const response = await fetch('http://localhost:3001/api/quizzes/export', {
    method: "POST",
  });
  try {
    if (response.ok) return;
  } catch (e) {
    console.error(e);
  }
}
