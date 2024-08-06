import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import App from './App';
import 'antd/dist/reset.css';
import './styles/custom.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <FormProvider>
            <Router>
                <App />
            </Router>
        </FormProvider>
    </React.StrictMode>
);

