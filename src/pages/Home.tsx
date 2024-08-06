import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const Home: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: '#001529', padding: '0 50px' }}>
                <div style={{ color: 'white', fontSize: '24px' }}>Form Wizard</div>
            </Header>
            <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
                <div style={{ textAlign: 'center' }}>
                    <Title level={2}>Форма заявки</Title>
                    <Text style={{ display: 'block', marginBottom: '20px' }}>
                        Нажмите ниже для заполнения формы
                    </Text>
                    <Link to="/form1">
                        <Button type="primary" size="large">Открыть форму</Button>
                    </Link>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Form Wizard ©2024 Создано Барановским Романом</Footer>
        </Layout>
    );
};

export default Home;
