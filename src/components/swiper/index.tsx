import styles from './index.module.scss';
import { Carousel, Image } from 'antd';
import { useState } from 'react';
import { List } from 'assets/interface/shop'
import { useNavigate } from 'react-router';

interface ImageList {
	id: number
	src: string
}

interface Props {
	list: List[]
	onJumpDetail: Function
}

export default function Swiper(props: Props) {
	function onChange(a: number) {
		// console.log(a);
	}
	let navigate = useNavigate();
	function jumpDetail(id: number) {//跳转详情页
	  navigate(`/detail/${id}`);
		props.onJumpDetail(id)
	}
	return (
		<div className={styles.swiper}>
			<Carousel afterChange={onChange} autoplay>
				{props.list.map(v => {
					return <div className={styles.swiperItem} key={v.id}>
						<Image
							height={400}
							preview={{ visible: false }}
							src={require(`assets/imgs/models/${v.bigSrc}`)}
							onClick={() => {jumpDetail(v.id)}}
						/>
					</div>
				})}
			</Carousel>
		</div>
	)
}