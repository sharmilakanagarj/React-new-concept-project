import { BrowserRouter } from 'react-router-dom'
import Indexroutes from './Indexroutes'
import { LanguageProvider } from './components/LanguageProvider';
function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Indexroutes />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
