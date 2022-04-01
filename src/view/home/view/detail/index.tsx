import { useParams, useSearchParams, useLocation } from "react-router-dom";

interface LocationState {
    key: number
}

function Detail() {
    let params = useParams();
    let location = useLocation();
    let state = location.state as LocationState;
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="list">Detail/params={params.id},query={searchParams.get("type")},state={state.key}</div>
    )
}
export default Detail;