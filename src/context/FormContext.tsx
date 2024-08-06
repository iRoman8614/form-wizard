import React, { createContext, useState, ReactNode } from 'react';

interface FormData {
    phone?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    workplace?: string;
    address?: string;
    loanAmount?: number;
    loanTerm?: number;
}

interface FormContextProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
    form1Completed: boolean;
    setForm1Completed: (completed: boolean) => void;
    form2Completed: boolean;
    setForm2Completed: (completed: boolean) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({});
    const [form1Completed, setForm1Completed] = useState(false);
    const [form2Completed, setForm2Completed] = useState(false);

    const updateFormData = (data: FormData) => {
        setFormData(prevData => ({
            ...prevData,
            ...data,
        }));
    };

    return (
        <FormContext.Provider value={{
            formData,
            setFormData: updateFormData,
            form1Completed,
            setForm1Completed,
            form2Completed,
            setForm2Completed,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = React.useContext(FormContext);
    if (context === undefined) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};
