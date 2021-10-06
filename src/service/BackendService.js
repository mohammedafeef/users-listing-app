import axios from "axios";
import { BACKEND_URL } from "../const";

async function post(path, data) {
  const url = `${BACKEND_URL}${path}`;
  const resp = await axios.post(url, data);
  console.log(resp);
  if (!resp.data || resp.status !== 200) {
    throw new Error((resp.data || {}).message);
  }

  return resp.data;
}

async function get(path) {
  const url = `${BACKEND_URL}${path}`;
  const resp = await axios.get(url);
  if (!resp.data || resp.status !== 200) {
    console.log("called");
    throw new Error((resp.data || {}).message);
  }

  return resp.data;
}

// function _genParams(headers = {}) {
//   //   const authToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
//   //   const shopId = localStorage.getItem(STORAGE_KEYS.SHOP_ID);

//   const localHeaders = {
//     ...headers,
//     // [HEADERS.AUTH]: authToken ? `Token ${authToken}` : undefined,
//   };
//   //   if (shopId) {
//   //     localHeaders[HEADERS.SHOP_ID] = shopId;
//   //   }

//   return {
//     data: localHeaders,
//     // params,
//     // responseType,
//   };
// }

const BackendService = {
  get,
  post,
};

export default BackendService;
