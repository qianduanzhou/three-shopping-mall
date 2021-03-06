import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import { Image } from 'antd';
import { shopDetailMin } from 'assets/interface/shop';
import { getFixDom } from 'utils/index';
import Loading from 'components/loading';
interface Props {
	list: shopDetailMin[]
	onJumpDetail?: Function
}
export default function ShopList(props: Props) {
	let navigate = useNavigate();
	let [fixList, setFixList] = useState<number[]>([]);
	let { list } = props;

	function jumpDetail(id: number) {//跳转详情页
	  navigate(`/detail/${id}`);
	  props.onJumpDetail && props.onJumpDetail(id)
	}

	useEffect(() => {
		setFixList(getFixDom(4, list.length));
	}, [list])
	return (
		<div className={styles.list}>
			{
				list.map(v => {
					return <div className={styles.item} key={v.id} onClick={() => jumpDetail(v.id)} title={v.name}>
						<Image
							className={styles.imgContainer}
							preview={{ visible: false }}
							src={require(`assets/imgs/models/${v.src}`)}
							width={300}
							height={170}
							placeholder={
								<Loading width={300} height={170}></Loading>
							}
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