import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicTable from './notes/tableSample';
import TableIdTwo from './notes/tableTwo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePictureUploader from './notes/ProfilePicUpload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        {/* <BasicTable /> */}
        {/* <TableIdTwo /> */}
         {/* <Router>
      <Routes>
        <Route path="/tableidtwo" element={<TableIdTwo />} />
      </Routes>
    </Router> */}
     <Router>
      <Routes>
        {/* Home or default route that shows BasicTable */}
        <Route
          path="/"
          element={
            <>
              <BasicTable />
              <h1>Vite + React</h1>
              
             
            </>
          }
        />

        {/* Separate page for TableIdTwo */}
        <Route path="/tableidtwo" element={<TableIdTwo />} />
        <Route path="/user/:id" element={<TableIdTwo />} />
                <Route path="/profilepic" element={<ProfilePictureUploader />} />

      </Routes>
    </Router>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
