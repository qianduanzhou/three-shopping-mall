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
	function onChange(a: number) {
		// console.log(a);
	}
	return (
		<div className={styles.swiper}>
			<Carousel afterChange={onChange}>
				{props.list.map(v => {
					return <div className={styles.swiperItem} key={v.id}>
						<Image
							height={400}
							preview={{ visible: false }}
							src={require(`assets/imgs/models/${v.bigSrc}`)}
						/>
					</div>
				})}
			</Carousel>
		</div>
	)
}