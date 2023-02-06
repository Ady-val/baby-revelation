import axios from 'axios';
import { useState } from 'react';

const url = process.env.REACT_APP_API_URL

export const useRequest = ({
  path,
  method,
  data,
  onSuccess,
  onFailure,
  ...rest
}) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (newData) => {
    try {
      setErrors(null);
      const response = await axios({
        method,
        url: url + path,
        data: data || newData,
        ...rest,
      });

      if (onSuccess) {
        onSuccess(response.data || null);
      }

      return response.data || null;
    } catch (err) {
      console.error(err);
      console.error(err.response);

      if (onFailure) {
        return onFailure(err);
      }

      // setErrors(err.response?.data.error);
    }
  };

  return { doRequest, errors };
};
