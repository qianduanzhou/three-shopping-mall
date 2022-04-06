import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import TopNav from 'components/topNav';//顶部导航栏


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
						<Outlet />
					</Content>
					<Footer className={styles.footer}>Footer</Footer>
				</Layout>
			</div>
		)
	}
}
export default Home;