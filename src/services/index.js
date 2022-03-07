import axios from "axios";

const logIn = async (data) => {
  try {
    const url = `${process.env.REACT_APP_API}/logIn`;
    let res = await axios.post(url, data);
    localStorage.setItem("data-user", JSON.stringify(res.data));
    return res;
  } catch (err) {
    return err;
  }
};

const getQuote = async (data) => {
  try {
    const url = `${process.env.REACT_APP_API}/quote/${data.provider}`;
    let res = await axios.post(url, data);
    return res;
  } catch (err) {
    return err;
  }
};

const getAllUsers = async () => {
  try {
    const url = `${process.env.REACT_APP_API}/usuario`;
    let res = await axios.get(url);
    return res;
  } catch (err) {
    return err;
  }
};

const createUser = async (data) => {
  try {
    const url = `${process.env.REACT_APP_API}/usuario`;
    let res = await axios.post(url, data);
    return window.location.reload();
  } catch (err) {
    return err;
  }
};

const deleteUser = async (dni) => {
  try {
    const url = `${process.env.REACT_APP_API}/usuario/${dni}`;
    let res = await axios.delete(url);
    return window.location.reload();
  } catch (err) {
    return err;
  }
};

const isUser = async () => {
  try {
    const url = `${process.env.REACT_APP_API}/isUser`;
    let dataUser = JSON.parse(localStorage.getItem("data-user"));
    let token = dataUser.token;
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let res = await axios.post(url, null, config);
    return res.data.success;
  } catch (err) {}
};

export { logIn, getQuote, getAllUsers, createUser, deleteUser, isUser };
