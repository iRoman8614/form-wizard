import React from 'react';
import { Form, Slider, Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const Form3: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const navigate = useNavigate();
    const { formData, setFormData } = useFormContext();

    const onFinish = (values: any) => {
        setFormData(values);

        const postData = {
            title: `${formData.firstName} ${formData.lastName}`,
            loanAmount: values.loanAmount,
            loanTerm: values.loanTerm,
        };

        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from API:', data);
                setModalContent(`Поздравляем, ${formData.firstName} ${formData.lastName}. Вам одобрена сумма ${values.loanAmount}$ на ${values.loanTerm} дней.`);
                setIsModalOpen(true);
            })
            .catch(error => {
                console.error('Error:', error);
                setModalContent('Произошла ошибка при отправке данных.');
                setIsModalOpen(true);
            });
    };

    const handleModalOk = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    return (
        <Form
            layout="vertical"
            style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}
            onFinish={onFinish}
            initialValues={formData}
        >
            <Form.Item
                name="loanAmount"
                label="Сумма займа ($)"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, выберите сумму займа',
                    },
                ]}
            >
                <Slider
                    min={200}
                    max={1000}
                    step={100}
                    marks={{ 200: '200', 1000: '1000' }}
                    tooltip={{ placement: 'top' }}
                />
            </Form.Item>

            <Form.Item
                name="loanTerm"
                label="Срок займа (дни)"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, выберите срок займа',
                    },
                ]}
            >
                <Slider
                    min={10}
                    max={30}
                    step={1}
                    marks={{ 10: '10', 30: '30' }}
                    tooltip={{ placement: 'top' }}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Подать заявку
                </Button>
            </Form.Item>

            <Modal
                title="Заявка подана"
                open={isModalOpen}
                onOk={handleModalOk}
                onCancel={() => setIsModalOpen(false)}
            >
                <p>{modalContent}</p>
            </Modal>
        </Form>
    );
};

export default Form3;
