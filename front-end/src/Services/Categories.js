import axios from "axios";
const Request = "http://18.219.139.64:8080/api/v1/category";

const listCategory = async () => {
  const { data } = await axios.get(Request);
  return data;
};

const listExperience = async (categoryId, pageNumber) => {
  const url = `http://18.219.139.64:8080/api/v1/experience/category/${categoryId}?page=${pageNumber}`;
  const {data} = await axios.get(url);
  return data;
};

const create = async (credentials) => {
  const { data } = await axios.post(
    Request,
    {
      title: credentials.values.title,
      description: credentials.values.description,
      image: credentials.values.image,
    },
    {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    }
  );
  return data.status;
};

const deleteCat = async (values) => {
  const { data } = await axios.delete(
    `http://18.219.139.64:8080/api/v1/category/${values.catId}`,
    {
      headers: {
        Authorization: `Bearer ${values.token}`,
      },
    }
  );

  return data.status;
};

export default { listCategory, create, deleteCat, listExperience };
