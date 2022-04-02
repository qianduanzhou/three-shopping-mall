import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import TopNav from 'components/topNav';//顶部导航栏
import Swiper from 'components/swiper';//轮播图
import Search from 'components/search';//搜索框
import ShopList from 'components/shopList';//商品列表

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
						<Search />
						<div className={styles.shopContainer}>
							<Swiper />
							<ShopList />
						</div>
					</Content>
					<Footer className={styles.footer}>Footer</Footer>
				</Layout>
				<Outlet />
			</div>
		)
	}
}
export default Home;