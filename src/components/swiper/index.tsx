import styles from './index.module.scss';
import { Carousel, Image } from 'antd';
import { useState } from 'react';
import { List } from 'assets/interface/shop'

interface ImageList {
	id: number
	src: string
}

interface Props {
	list: List[]
}

export default function Swiper(props: Props) {
	let [imgList, setImgList] = useState<ImageList[]>([{
		id: 1,
		src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
	}, {
		id: 2,
		src: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
	}, {
		id: 3,
		src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
	}])
	function onChange(a: number) {
		// console.log(a);
	}
	return (
		<div className={styles.swiper}>
			<Carousel afterChange={onChange}>
				{props.list.map(v => {
					return <div className={styles.swiperItem} key={v.id}>
						<Image
							width="100%"
							height={400}
							preview={{ visible: false }}
							src={require(`assets/imgs/models/${v.src}`)}
						/>
					</div>
				})}
			</Carousel>
		</div>
	)
}