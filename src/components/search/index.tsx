import styles from './index.module.scss';
import { Input } from 'antd';
const { Search } = Input;
export default function SearchCom() {
	function onSearch() {

	}
	return (
		<div className={styles.search}>
			<Search placeholder="input search text" onSearch={onSearch} enterButton size="large" />
		</div>
	)
}