import { AppRouter } from "@/ui/router/AppRouter.tsx";
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

function App() {
  return <QueryClientProvider client={queryClient}>
    <AppRouter />
    </QueryClientProvider>
}

export default App
