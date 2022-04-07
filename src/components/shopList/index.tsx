import { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import { Image } from 'antd';
import { List } from 'assets/interface/shop';

interface Props {
	list: List[]
	onJumpDetail: Function
}
export default function ShopList(props: Props) {
	let navigate = useNavigate();

	function jumpDetail(id: number) {//跳转详情页
	  navigate(`/detail/${id}`);
		props.onJumpDetail(id)
	}
	return (
		<div className={styles.list}>
			{
				props.list.map(v => {
					return <div className={styles.item} key={v.id} onClick={() => jumpDetail(v.id)}>
						<Image
							className={styles.imgContainer}
							preview={{ visible: false }}
							src={require(`assets/imgs/models/${v.src}`)}
							width={300}
							height={170}
						/>
					</div>
				})
			}
		</div>
	)
}