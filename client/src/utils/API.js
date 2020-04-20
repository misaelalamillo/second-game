import axios from "axios";

export default {

  addUser: function (userData) { 
    return axios.post("/api/signUp", userData);
  },

  getSignIn: function(SignInData) {
    return axios.post("/api/signin", SignInData);
  },

  getThreads: function () {
    return axios.get("/api/search");
  },

  getThread: function(id) {
    return axios.get("/api/search/" + id);
  },

  addNewThread: function (ThreadData) {
    return axios.post("/api/search", ThreadData);
  },
};

