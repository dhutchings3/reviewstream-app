import config from "../config";
import TokenService from "./token-service";

const ReviewsApiService = {
  getData() {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReviewsForUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/user/${user_id}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReviewById(id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${id}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReview(newReview) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newReview)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  updateReview(id, updatedReview) {
    return fetch(`${config.API_ENDPOINT}/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedReview)
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res));
  },

  deleteReview(id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res));
  }
};

export default ReviewsApiService;
