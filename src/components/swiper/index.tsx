import styles from './index.module.scss';
import { Carousel, Image } from 'antd';
import { useState } from 'react';
interface ImageList {
	id: number
	src: string
}

export default function Swiper() {
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
		console.log(a);
	}
	return (
		<div className={styles.swiper}>
			<Carousel afterChange={onChange} autoplay>
				{imgList.map(v => {
					return <div className={styles.swiperItem} key={v.id}>
						<Image
							preview={{ visible: false }}
							src={v.src}
						/>
					</div>
				})}
			</Carousel>
		</div>
	)
}