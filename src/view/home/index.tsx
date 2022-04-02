import { Component } from 'react';
import { Outlet } from "react-router-dom";
import style from './index.module.scss';
import TopNav from "components/topNav";
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'home'
        };
    }
    render() {
        return (
            <div className={style.home}>
                <Layout className={style.layout}>
                    <Header className={style.header}>
                        <TopNav />
                    </Header>
                    <Content className={style.content}>Content</Content>
                    <Footer className={style.footer}>Footer</Footer>
                </Layout>
                <Outlet/>
            </div>
        )
    }
}
export default Home;