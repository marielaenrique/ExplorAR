import axios from "axios";

const createRequest = "http://18.219.139.64:8080/api/v1/experience";

const list = async (pageNumber) => {
  const { data } = await axios.get(
    `http://18.219.139.64:8080/api/v1/experience?page=${pageNumber}`
  );
  return data;
};

const create = async (credentials) => {
  const { data } = await axios.post(
    createRequest,
    {
      title: credentials.values.title,
      description: credentials.values.description,
      images: credentials.values.images,
      category: credentials.values.category,
      location: credentials.values.location,
      pricePerDay: credentials.values.pricePerDay
    },
    {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    }
  );
  return data.status;
};

const deleteExp = async (values) => {
  const { data } = await axios.delete(
    `http://18.219.139.64:8080/api/v1/experience/${values.expId}`,
    {
      headers: {
        Authorization: `Bearer ${values.token}`,
      },
    }
  );

  return data.status;
};

const getById = async (experienceId) => {
    const { data } = await axios.get(
        `http://18.219.139.64:8080/api/v1/experience/${experienceId}`
    )
    return data;
};

export default { list, create, deleteExp, getById };
