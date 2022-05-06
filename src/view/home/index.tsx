import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import TopNav from 'components/topNav';//顶部导航栏
import { connect } from 'react-redux';
import {
  initCollectionList
} from 'app/shop'
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
class Home extends Component<any, any> {
	constructor(props: any) {
		super(props);
		props.initCollectionList();//初始化收藏列表
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
					<Footer className={styles.footer}>
						备案/许可证编号为：粤ICP备2022018683号
					</Footer>
				</Layout>
			</div>
		)
	}
}

function mapStateToProps(state: any) {
	return {
		shop: state.shop,
		user: state.user
	}
}
function mapDispatchToProps(dispatch: Function) {
	return {
		initCollectionList: () => dispatch(initCollectionList())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);