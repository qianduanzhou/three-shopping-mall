import { useParams } from "react-router-dom";
function Detail() {
    let params = useParams();
    return (
        <div className="list">Detail/{params.id}</div>
    )
}
export default Detail;