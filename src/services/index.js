import axios from "axios";
import { useNavigate } from "react-router-dom";
const logIn = async (data) => {
  try {
    const url = `${process.env.REACT_APP_API}/logIn`;
    let res = await axios.post(url, data);
    localStorage.setItem("token", JSON.stringify(res.data.token));
    return res;
  } catch (err) {
    return err;
  }
};


export { logIn };
