import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const { Option } = Select;

const Form1: React.FC = () => {
    const navigate = useNavigate();
    const { formData, setFormData, setForm1Completed } = useFormContext();

    const onFinish = (values: any) => {
        setFormData(values);
        setForm1Completed(true);
        navigate('/form2');
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const charCode = event.which ? event.which : event.keyCode;
        const charStr = String.fromCharCode(charCode);
        if (!/[\d()+\-\s]/.test(charStr)) {
            event.preventDefault();
        }
    };

    return (
        <Form
            layout="vertical"
            style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}
            onFinish={onFinish}
            initialValues={formData}
        >
            <Form.Item
                name="phone"
                label="Телефон"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите ваш номер телефона',
                    },
                ]}
            >
                <Input
                    placeholder="0XXX XXX XXX"
                    type="tel"
                    onKeyPress={handleKeyPress}
                />
            </Form.Item>

            <Form.Item
                name="firstName"
                label="Имя"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите ваше имя',
                    },
                ]}
            >
                <Input placeholder="Введите ваше имя" type="text" />
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Фамилия"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите вашу фамилию',
                    },
                ]}
            >
                <Input placeholder="Введите вашу фамилию" type="text" />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Пол"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, выберите ваш пол',
                    },
                ]}
            >
                <Select placeholder="Выберите ваш пол">
                    <Option value="male">Мужской</Option>
                    <Option value="female">Женский</Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Далее
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Form1;
