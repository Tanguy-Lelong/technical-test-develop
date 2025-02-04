import './App.css';
import { QuizList } from '../QuizList';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {

  // Create a client
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <div className="header"><h1>Quiz app</h1></div>
        <div className="content"><QuizList /></div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
