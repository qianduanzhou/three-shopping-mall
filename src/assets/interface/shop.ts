export interface shopDetailMin {//商品列表
	id: number
	name: string
	src: string
	bigSrc: string
}

export interface shopDetail extends shopDetailMin {
	type: string
	fileName: string
	modelPosition: [number, number, number]
	cameraPosition: [number, number, number]
}
