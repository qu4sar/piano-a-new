import { GET_DATA, GET_SINGLE_NFT } from "./type";

const fatahData = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
};


export const getNfts = () => async (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: await fatahData("/static/collections.json"),
  });
};

export const getSingleNft = (id) => async (dispatch) => {
  const data = await fatahData("/static/works.json");

  dispatch({
    type: GET_SINGLE_NFT,
    payload: data.find((data) => data.id === Number(id)),
  });
};


export const getWorks = (id) => async (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: await fatahData("/static/works.json"),
  });
};

export const getColletions = (id) => async (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: await fatahData("/static/collections.json"),
  });
};

export const getSingleCollection = (id) => async (dispatch) => {
  const data = await fatahData("/static/collections.json");

  dispatch({
    type: GET_SINGLE_NFT,
    payload: data.find((data) => data.id === Number(id)),
  });
};


export const getSlides = () => async (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: await fatahData("/static/slider.json"),
  });
};