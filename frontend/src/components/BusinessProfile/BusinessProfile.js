import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBusiness } from "../../store/business";

const BusinessProfile = () => {
  const dispatch = useDispatch();
  const business = useSelector((state) => state.business);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch, id]);

  console.log(business);
  return (
    <div className="oneBus-container">
      <div className="oneBus-img-container">
        <img src={business.img_link} alt="" />
      </div>
      <h1>{business.name} Profile</h1>
    </div>
  );
};

export default BusinessProfile;
