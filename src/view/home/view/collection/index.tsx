import styles from './index.module.scss';
import { selectCollectionList } from 'store/shop';
import { useSelector } from 'react-redux';
import ShopList from 'components/shopList';
import { useEffect, useState } from 'react';
import { shopDetailMin } from 'assets/interface/shop';
import { shop as shopApi } from 'request/mock';

export default function Collection() {
    let [list, setList] = useState<shopDetailMin[]>([]);
    let lstId = useSelector(selectCollectionList);
    async function getCollectList() {
        let list = await shopApi.getCollectList(lstId);
        setList(list);
    }
    useEffect(() => {
        getCollectList();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={styles.collection}>
            <ShopList list={list}></ShopList>
        </div>
    )
}