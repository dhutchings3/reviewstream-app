import React from "react";

const Reviews = ({ reviews, deleteReview }) => {
  const reviewsList = reviews.length ? (
    reviews.map(review => {
      return (
        <div className="collection-review" key={review.id}>
          <h2>{review.showName}</h2>
          <p>{review.text}</p>
          <p>{review.rating}</p>
          <button
            onClick={() => {
              deleteReview(review.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">Add a review!</p>
  );
  return <div className="reviews collection">{reviewsList}</div>;
};

export default Reviews;
