import { useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
interface Nav {
	left: NavItem[]
	right: NavItem[]
	activedId: number
}
interface NavItem {
	id: number
	text: string
}
export default function TopNav() {
	let [nav, setNav] = useState<Nav>({//导航栏对象
		left: [{//左侧
			id: 0,
			text: "首页"
		}],
		right: [{//右侧
			id: 1,
			text: "商品"
		}, {
			id: 2,
			text: "购物车"
		}, {
			id: 3,
			text: "我的"
		}],
		activedId: 0,//当前导航栏
	});
	function getNavClass(id: number) {//获取导航栏类
		return cx({
			[styles.nav]: true,
			actived: id === nav.activedId
		})
	}
	function clickNav(id: number) {//点击导航栏
		setNav({
			...nav,
			activedId: id
		})
	}
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				{nav.left.map(v => {
					return <div className={getNavClass(v.id)} key={v.id} onClick={() => clickNav(v.id)}>{v.text}</div>
				})}
			</div>
			<div className={styles.right}>
				{nav.right.map(v => {
					return <div className={getNavClass(v.id)} key={v.id} onClick={() => clickNav(v.id)}>{v.text}</div>
				})}
			</div>
		</div>
	)
}