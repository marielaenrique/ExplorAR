import axios from "axios";

const create = async (request) => {
  const { data } = await axios.post(
    `http://18.219.139.64:8080/api/v1/experience/review/${request.userId}`,
    {
      experience: {
        id: request.experienceId,
      },
      rating: request.stars,
    },
    {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    }
  );
  return data.status;
};

export default {create};