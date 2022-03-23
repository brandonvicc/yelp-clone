import BusinessEditForm from "./BusinessEditForm/BusinessEditForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBusiness } from "../../store/business";
import Footer from "../Footer/Footer";
import "./BusinessEdit.css";
const BusinessEditPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch, id]);
  const business = useSelector((state) => state.business.business);

  return (
    <>
      <div className="editBus-container">
        <div className="editBus-content-container">
          <div className="editBus-img-container">
            <img
              src="https://codestoresolutions.com/wp-content/uploads/2020/03/maintenance.png"
              alt=""
              className="editBus-img"
            />
          </div>
          <BusinessEditForm business={business} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessEditPage;
