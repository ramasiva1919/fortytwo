import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BasicTable from "./notes/tableSample";
import TableIdTwo from "./notes/tableTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePictureUploader from "./notes/ProfilePicUpload";
import MaterialRadioButtons from "./notes/clientForm";
import DynamicForm from "./notes/dynamicForm";
import Crud from "./notes/crud";
import SearchComponent from "./notes/search";
import HidingInput from "./notes/hidingInput";
import TablePagination from "./notes/pagination";
import DropdownWithTable from "./notes/dropdownTable";
import ImageUploader from "./notes/imageUploader";
import Download from "./notes/download";
import FileUpload from "./notes/fileupload";
import Sms from "./notes/sms";
import Model from "./notes/modal";
import ScheduleForm from "./notes/schedule";
import "./App.css";
import ToastProvider from "./notes/toasterProvider";
import ToasterComponent from "./notes/toaster";
import Counter from "./notes/hoocks/useState";
function App() {
  const [count, setCount] = useState(0);

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
        <ToastProvider>
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
              <Route path="/client" element={<MaterialRadioButtons />} />
              <Route path="/crud" element={<Crud />} />

              <Route path="/dynamic" element={<DynamicForm />} />
              <Route path="/search" element={<SearchComponent />} />
              <Route path="/dropdowntable" element={<DropdownWithTable />} />

              <Route path="/hidinginput" element={<HidingInput />} />
              <Route path="/schedule" element={<ScheduleForm />} />
              <Route path="/sms" element={<Sms />} />
              <Route path="/toaster" element={<ToasterComponent />} />
              <Route path="/fileupload" element={<FileUpload />} />
              <Route path="/modal" element={<Model />} />

              <Route path="/download" element={<Download />} />

              <Route path="/imageuploader" element={<ImageUploader />} />

              <Route path="/pagination" element={<TablePagination />} />
              <Route path="/usestate" element={<Counter />} />

              <Route path="/user/:id" element={<TableIdTwo />} />
              <Route path="/profilepic" element={<ProfilePictureUploader />} />
            </Routes>
          </Router>
        </ToastProvider>
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
  );
}

export default App;
