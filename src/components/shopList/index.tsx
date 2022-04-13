import { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import { Image } from 'antd';
import { List } from 'assets/interface/shop';
import { getFixDom } from 'utils/index';
interface Props {
	list: List[]
	onJumpDetail?: Function
}
export default function ShopList(props: Props) {
	let navigate = useNavigate();
	let { list } = props;

	function jumpDetail(id: number) {//跳转详情页
	  navigate(`/detail/${id}`);
	  props.onJumpDetail && props.onJumpDetail(id)
	}


	let fixList = getFixDom(4, list.length)
	return (
		<div className={styles.list}>
			{
				list.map(v => {
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
			{
				fixList.map(v => <div className={styles.item} key={v}></div>)
			}
		</div>
	)
}