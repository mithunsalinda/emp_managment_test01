import logo from './logo.svg';
import { store, persistor } from './redux/store';
import { Provider } from "react-redux";
import './App.css';
import '../src/assets/scss/app.css';
import { Button } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AddNewEmployee } from './pages/add.employee';
import { EmployeeList } from './pages/emp.lists';
import { EditEmpDetails } from './pages/edit.employee';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route exact path="/employee/list" element={<EmployeeList />} />
            <Route exact path="/employee/add" element={<AddNewEmployee />} />
            <Route exact path="/employee/edit" element={<EditEmpDetails />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
