import * as businessActions from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


const BusinessCard = ({ business }) => {
  const curr_user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [avg, setAvg] = useState();

  useEffect(() => {
    const avgRating = function (reviews) {
      let total = 0;
      reviews?.forEach((review) => (total += review.rating));
      return total / reviews?.length;
    };

    setAvg(avgRating(business?.Reviews));
  }, [business?.Reviews, avg]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(businessActions.deleteBusiness(business.id));
    history.push("/");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await dispatch(businessActions.getOneBusiness(business.id));
    history.push(`/businesses/${business.id}/edit`);
  };
  return (
    <li className="home-business-card">
      <NavLink className={'home-business-card-link'} to={`/businesses/${business.id}`}>
        <h3 className="home-business-card-title">{business.name}</h3>
      </NavLink>
      <div className="home-business-img-container">
        <img
          className="home-business-img"
          src={business.img_link}
          alt="business"
        />
      </div>
      <div className="home-business-card-content">
        <p>Rating: {avg ? avg.toFixed(2) : 0} ({business?.Reviews.length})</p>
      </div>
      {curr_user?.id === business.userId && (
        <div className="home-business-card-actions">
          <button className="home-delete-btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="home-edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </li>
  );
};

export default BusinessCard;
