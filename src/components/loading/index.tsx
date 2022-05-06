import svg from "assets/imgs/loading-bars.svg"

interface Props {
    width?: number | string
    height?: number | string
}

export default function Loading(props: Props) {
    let { width, height } = props;
    let fixWidth, fixHeight;
    if(typeof width === "number" || !isNaN(Number(width))) fixWidth = width + 'px';
    if(typeof height === "number" || !isNaN(Number(height))) fixHeight = height + 'px';
    if(typeof width === "string" && isNaN(Number(width))) {
        if((width.includes('px') || width.includes('%'))) {
            fixWidth = width;
        } else {
            throw Error('请传入正确的width值')
        }
    }
    if(typeof height === "string" && isNaN(Number(height))) {
        if(height.includes('px') || height.includes('%')) {
            fixHeight = height;
        } else {
            throw Error('请传入正确的height值')
        }
    }

    return <img src={svg} alt="" style={{width: fixWidth, height: fixHeight}}/>
}