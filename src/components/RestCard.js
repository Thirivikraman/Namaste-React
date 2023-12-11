import { FOOD_URL } from "../utilities/constants";
const RestCard = (props) =>{
    const {restName,cusines,imgId}= props;
    return (
        <div className="res-card">
            <h3>{restName}</h3>
            <img id="foodimg" src={FOOD_URL+imgId} alt="logo"></img>
            <p><b>Cusines :</b> {cusines}</p>
        </div>
    );
}
export default RestCard;