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

export { logIn };
