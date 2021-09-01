import api from "../../services/apis";
import {
  SAVE_HIJACKED_TREND,
  GET_HIJACKED_CONTENT,
  GET_LEADS,
  LOAD_PROFILE,
  USER_LOGGED_IN,
  USER_PROFILE_UPDATED,
  SAVE_BRAND,
  GET_BRANDS,
  SAVE_MESSAGE,
  GET_MESSAGES,
} from "./types";

import mockHijackedTrends from "../../mock/hijacked-articles";
import { api_brands } from "../../mock/brands";
import mockMessages from "../../mock/messages";

//Show error on catch
import Alert from "../../Components/Layout/Alert/Alert";
import { setAlert } from "./alertAction";

import { useDispatch } from "react-redux";
import axios from "axios";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const user = await api.user.login(credentials);
    dispatch({
      type: USER_LOGGED_IN,
      payload: user,
    });
    localStorage.setItem("user-token", user.token);
  } catch (err) {}
};

export const registerUser = (credentials) => async (dispatch) => {
  try {
    const user = await api.user.register(credentials);
    dispatch({
      type: USER_LOGGED_IN,
      payload: user,
    });
    localStorage.setItem("user-token", user.token);
  } catch (err) {}
};

export const updateProfile = (data) => async (dispatch) => {
  try {
    const user = await api.user.profileUpate(data);
    dispatch({
      type: USER_PROFILE_UPDATED,
      payload: user,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Load user
export const loadProfile = () => async (dispatch) => {
  const user = await api.user.getProfileData();
  try {
    dispatch({
      type: LOAD_PROFILE,
      payload: user,
    });
  } catch (err) {
    console.log(err.mesage);
  }
};

export const getBrands = () => async (dispatch) => {
  const brands = await api.user.fetchBrands();
  //const brands = api_brands;
  try {
    dispatch({
      type: GET_BRANDS,
      payload: brands,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const saveBrand = (brandData, history) => async (dispatch) => {
  const brand = await api.user.brandSaved(brandData);
  try {
    dispatch({
      type: SAVE_BRAND,
      payload: brand,
    });
    alert("Brand saved successfully");
    history.push("/dashboard");
  } catch (err) {
    console.log(err.message);
  }
};

export const saveMessage = (content, history) => async (dispatch) => {
  try {
    const message = await api.user.messageSaved(content);
    dispatch({
      type: SAVE_MESSAGE,
      payload: message,
    });
    history.push("/dashboard");
  } catch (err) {
    console.log(err.message);
  }
};

export const getMessages = () => async (dispatch) => {
  try {
    const messages = await api.user.fetchMessages();
    //const messages = mockMessages;
    dispatch({
      type: GET_MESSAGES,
      payload: messages,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getLeads = () => async (dispatch) => {
  try {
    const leads = await api.user.fetchLeads();
    dispatch({
      type: GET_LEADS,
      payload: leads,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getHiJacks = () => async (dispatch) => {
  try {
    //const hijackedContent = await api.user.fetchHijack();
    const hijackedContent = mockHijackedTrends;
    dispatch({
      type: GET_HIJACKED_CONTENT,
      payload: hijackedContent,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const saveTrendHijacked = (content) => async (dispatch) => {
  try {
    const hijackedContent = await api.user.saveHijackedContent(content);
    dispatch({
      type: SAVE_HIJACKED_TREND,
      payload: hijackedContent,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchHijackedVideos = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://traffic-application.herokuapp.com/api/user/activity/hijack/video"
    );
    dispatch({
      type: "HIJACKED_VIDEOS",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
