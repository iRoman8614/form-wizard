import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const { Option } = Select;

const Form2: React.FC = () => {
    const [workplaces, setWorkplaces] = useState<string[]>([]);
    const navigate = useNavigate();
    const { formData, setFormData, setForm2Completed } = useFormContext();

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(response => response.json())
            .then(data => setWorkplaces(data))
            .catch(error => console.error('Error fetching categories:', error));
        console.log('workplaces', workplaces)
    }, []);

    const onFinish = (values: any) => {
        setFormData(values);
        setForm2Completed(true);
        navigate('/form3');
    };

    const handleBack = () => {
        navigate('/form1');
    };

    return (
        <Form
            layout="vertical"
            style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}
            onFinish={onFinish}
            initialValues={formData}
        >
            <Form.Item
                name="workplace"
                label="Место работы"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, выберите ваше место работы',
                    },
                ]}
            >
                <Select placeholder="Выберите ваше место работы">
                    {workplaces.map((workplace) => (
                        <Option key={workplace} value={workplace}>
                            {workplace}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                name="address"
                label="Адрес проживания"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите ваш адрес проживания',
                    },
                ]}
            >
                <Input placeholder="Введите ваш адрес" type="text" />
            </Form.Item>

            <Form.Item>
                <Button type="default" onClick={handleBack} style={{ marginRight: '8px' }}>
                    Назад
                </Button>
                <Button type="primary" htmlType="submit">
                    Далее
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Form2;
