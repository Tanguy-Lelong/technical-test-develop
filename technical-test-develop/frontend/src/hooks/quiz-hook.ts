import { useMutation, useQuery, useQueryClient } from "react-query";
import { IQuiz } from "../data-interfaces/quiz.interfaces";
import { getQuizzes, deleteQuiz } from "../services/quiz-service";

export const useQuizzes = () => {
  // Access the client
  const queryClient = useQueryClient();
  // Queries
  const quizzesQuery = useQuery<IQuiz[]>("quizzes", getQuizzes);
  // Mutations
  const deleteQuizMutation = useMutation(deleteQuiz, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("quizzes");
    },
  });

  return {
    quizzes: quizzesQuery.data || [],
    deleteQuiz: (quizId: string) => {
      deleteQuizMutation.mutateAsync(quizId);
    },
  };
};
