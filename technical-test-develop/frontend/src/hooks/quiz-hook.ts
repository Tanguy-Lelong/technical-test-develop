import { useMutation, useQuery, useQueryClient } from "react-query";
import { IQuiz } from "../data-interfaces/quiz.interfaces";
import { getQuizzes, deleteQuiz, addQuiz, exportData } from "../services/quiz-service";

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
  
  const addQuizMutation = useMutation(addQuiz, {
    onSuccess: () => queryClient.invalidateQueries("quizzes")
  });

  const exportDataMutation = useMutation(exportData, {
    onSuccess: () => queryClient.invalidateQueries("export")
  });

  return {
    quizzes: quizzesQuery.data || [],
    deleteQuiz: (quizId: string) => {
      deleteQuizMutation.mutateAsync(quizId);
    },
    addQuiz: (quiz: IQuiz) => {
      addQuizMutation.mutateAsync(quiz);
    },
    exportData: () => {
      exportDataMutation.mutateAsync();
    }
  };
};
