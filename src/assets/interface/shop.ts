export interface List {//商品列表
	id: number
	name: string | number
	src: string
}

export interface ListRes {//商品列表返回值
	records: List
	total: number
}

export interface shopDetail {
	id: number
	name: string
	type: string
	fileName: string
	src: string
}