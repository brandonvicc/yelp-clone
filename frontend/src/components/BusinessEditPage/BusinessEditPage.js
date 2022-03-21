import BusinessEditForm from "./BusinessEditForm/BusinessEditForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBusiness } from "../../store/business";
const BusinessEditPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch, id]);
  const business = useSelector((state) => state.business.business);

  return (
    <div className="editBus-container">
      <h1>EDIT PAGE</h1>
      <BusinessEditForm business={business} />
    </div>
  );
};

export default BusinessEditPage;
