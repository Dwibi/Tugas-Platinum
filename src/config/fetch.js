import axios from "axios";
import { TOKEN, url } from "./authorize";

export const fetchGetApi = (endpoint, params) => {
  return axios.get(url + endpoint, {
    params: {
      ...params,
    },
    headers: {
      access_token: `${TOKEN}`,
      "content-type": "application/json",
    },
  });
};

export const fetchApi = (endpoint, params) => {
  return axios.get(url + endpoint, {
    params: {
      ...params,
    },
    headers: {
      access_token: `${TOKEN}`,
      "content-type": "application/json",
    },
  });
};

export const tableFetchApi = (endpoint, params) => {
  return axios.get(url + endpoint, {
    params: {
      ...params,
    },
    headers: {
      access_token: `${TOKEN}`,
      "content-type": "application/json",
    },
  });
};

export const putApi = (endpoint, params) => {
  return axios.put(
    url + endpoint,
    {
      ...params,
    },
    {
      headers: {
        access_token: `${TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const postApi = (endpoint, params) => {
  return axios.post(
    url + endpoint,
    {
      ...params,
    },
    {
      headers: {
        access_token: `${TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const deleteApi = (endpoint) => {
  return axios.delete(url + endpoint, {
    headers: {
      access_token: `${TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const loginPostApi = (endpoint, params) => {
  return axios.post(
    url + endpoint,
    {
      ...params,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
