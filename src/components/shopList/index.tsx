import { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import { Image } from 'antd';
interface List {
	id: number
	name: string | number
	src: string
}
interface Props {
	onJumpDetail: Function
}
export default function ShopList(props: Props) {
	let navigate = useNavigate();

	let [list, setList] = useState<List[]>([{
		id: 1,
		name: 1,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 2,
		name: 2,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 3,
		name: 3,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 4,
		name: 4,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 5,
		name: 5,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 6,
		name: 6,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 7,
		name: 7,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 8,
		name: 8,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}, {
		id: 9,
		name: 9,
		src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	}])
		
	function jumpDetail(id: number) {//跳转详情页
	  navigate(`/detail/${id}`);
		props.onJumpDetail(id)
	}
	return (
		<div className={styles.list}>
			{
				list.map(v => {
					return <div className={styles.item} key={v.id} onClick={() => jumpDetail(v.id)}>
						<Image
							className={styles.imgContainer}
							preview={{ visible: false }}
							src={v.src}
							width={300}
							height={170}
						/>
					</div>
				})
			}
		</div>
	)
}