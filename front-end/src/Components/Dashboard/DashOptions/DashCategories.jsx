import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import CategoriesService from "../../../Services/Categories.js";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStateContext } from "../../Context/GlobalStateContext";
import {
  DashCategoryContainer,
  AddCategories,
  ListCategories,
  CategoryOption,
} from "../../../Styles/DashCategoryComponents";

const VALIDATION_TITLE = /^(?=\S)(?=.*\S$).{8,}$/;

const DashCategories = () => {
  const { state } = useContext(GlobalStateContext);
  const [allCategories, setAllCategories] = useState();
  const [refresh, setRefresh] = useState(false);

  const categoryRequest = {
    token: `${state.token}`,
    values: {},
    catId: "",
  };

  const getInitialValues = () => ({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getCategories();
  }, [refresh]);

  const getCategories = async () => {
    try {
      const response = await CategoriesService.listCategory();
      setAllCategories(response);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleDelete = async (id) => {
    categoryRequest.catId = id;
    try {
      await CategoriesService.deleteCat(categoryRequest);
      await getCategories();
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (values) => {
    categoryRequest.values = values;
    try {
      await CategoriesService.create(categoryRequest);
      await getCategories();
      setRefresh(!refresh);
      setFieldValue("title", "");
      setFieldValue("description", "");
      setFieldValue("image", "");
    } catch (error) {
      console.log(error);
    }
  };

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        title: Yup.string()
          .min(5, "El titulo debe tener al menos 5 caracteres")
          .required("Campo Obligatorio")
          .matches(
            VALIDATION_TITLE,
            "No puede haber espacios al inicio ni al final de este campo"
          ),
        description: Yup.string()
          .required("Campo Obligatorio")
          .min(10, "la decripcion debe tener al menos 10 caracteres"),
      })
    );

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validationOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <DashCategoryContainer>
      <ListCategories>
        <h2>Categorías</h2>
        <div>
          {allCategories?.map((category, index) => (
            <CategoryOption key={index}>
              <p>{category.id}</p>
              <p>{category.title}</p>
              <div onClick={() => handleDelete(category.id)}>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "#636974" }}
                />
              </div>
            </CategoryOption>
          ))}
        </div>
      </ListCategories>
      <AddCategories>
        <form id="category-form" onSubmit={handleSubmit}>
          <h2>Añadir Categoria: </h2>
          <input
            name="title"
            placeholder="Ingrese un título"
            value={values["title"]}
            onChange={(e) => setFieldValue("title", e.target.value)}
          />
          <textarea
            name="description"
            placeholder="Ingrese una descripcion para la experiencia"
            value={values["description"]}
            onChange={(e) => setFieldValue("description", e.target.value)}
          />
          <input
            name="image"
            placeholder="Portada de categoria"
            value={values["images"]}
          />
        </form>
        <button form="category-form" type="submit">
          Guardar
        </button>
      </AddCategories>
    </DashCategoryContainer>
  );
};

export default DashCategories;
