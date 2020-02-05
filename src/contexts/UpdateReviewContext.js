import React from "react";

const UpdateJobContext = React.createContext({
    reviews: [],
    userData: [],
    singleReview: [],
    userId: '',
    error: null,
    setReviews: () => {},
    deleteReview: () => {},
    setSingleReview: () => {},
    setError: () => {},
    setUserData: () => {},
  })
  
  export default UpdateJobContext;