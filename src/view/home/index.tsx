import { Component } from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import TopNav from "components/topNav";
import Swiper from "components/swiper";

import { Layout } from "antd";
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
            <div className={styles.home}>
                <Layout className={styles.layout}>
                    <Header className={styles.header}>
                        <TopNav />
                    </Header>
                    <Content className={styles.content}>
                        <Swiper/>
                    </Content>
                    <Footer className={styles.footer}>Footer</Footer>
                </Layout>
                <Outlet/>
            </div>
        )
    }
}
export default Home;