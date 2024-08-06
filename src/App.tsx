import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import { useFormContext } from './context/FormContext';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
    const { form1Completed, form2Completed } = useFormContext();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form1" element={<Form1 />} />
            <Route
                path="/form2"
                element={<ProtectedRoute
                    component={Form2}
                    pathToRedirect="/form1"
                    condition={form1Completed}
                />}
            />
            <Route
                path="/form3"
                element={<ProtectedRoute
                    component={Form3}
                    pathToRedirect={form2Completed ? "/form2" : "/form1"}
                    condition={form1Completed && form2Completed}
                />}
            />
        </Routes>
    );
};

export default App;
