import './App.scss'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)
// import Banner from './components/Banner'

function App() {

  return (
    <div className="weirdcase-app-wrapper bg-light">
      <div className="weirdcase-app-container">
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
        {/* <Banner>Hello world</Banner> */}
      </div>
    </div>
  )
}

export default App
