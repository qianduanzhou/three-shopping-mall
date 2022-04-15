//获取补充div的数量
function getFixDom(count: number, lstLength: number): number[] {
	let len = lstLength % count === 0 ? 0 : count - (lstLength % count);
	let fixList = []
	for(let i = 0; i < len; i ++) {
		fixList.push(i)
	}
    return fixList;
}

export { getFixDom }