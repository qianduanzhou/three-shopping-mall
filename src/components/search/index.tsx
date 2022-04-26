import styles from './index.module.scss';
import { Input } from 'antd';
const { Search } = Input;
interface Props {
	searchChange: Function
}
export default function SearchCom(props: Props) {
	function onSearch(e: string) {
		props.searchChange(e);
	}
	return (
		<div className={styles.search}>
			<Search placeholder="请输入物品名称" onSearch={onSearch} enterButton allowClear size="large" />
		</div>
	)
}