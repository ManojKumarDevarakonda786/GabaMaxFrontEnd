import './App.css'
import { H1, P } from './components/TextTags'
import Login from './pages/Login'

function App() {

  return (
    <>
      <div className='main-div'>
        <P val="Hello World" />
        <H1 val="This is a Heading"/>
        <Login />
      </div> 
    </>
  )
}

export default App
