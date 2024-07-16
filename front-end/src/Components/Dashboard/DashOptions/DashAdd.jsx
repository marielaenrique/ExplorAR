import React, { useState, useEffect, useContext } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import CategoriesService from "../../../Services/Categories.js"
import ExperienceService from "../../../Services/Experiences.js"
import { GlobalStateContext } from '../../Context/GlobalStateContext.jsx';
import {Content, DashAddContainer, ErrorMsj} from "../../../Styles/DashAddComponents.js"

const VALIDATION_TITLE = /^(?=\S)(?=.*\S$).{8,}$/;


const DashAdd = () => {

    const {state} = useContext(GlobalStateContext);
    const [errorMsj, setErrorMsj] = useState("");


    const [images, setImages] = useState([
        {
            id: "1",
            url: ""
        },
        {
            id: "2",
            url: ""
        },
        {
            id: "3",
            url: ""
        },
        {
            id: "4",
            url: ""
        },
        {
            id: "5",
            url: ""
        }
    ]);

    const experienceRequest = {
        token: `${state.token}`,
        values: {}
    }
    
    const getInitialValues = () => ({
        "title": "",
        "description": "",
        "images": images.map(image => ({...image})), 
        "category": { id: undefined },
        "location": "",
        "pricePerDay": 0
    });

    const [allCategories, setAllCategories] = useState();

    useEffect(() => {
        getCategories();
    }, []);
  
    const getCategories = async () => {
      try {
        const response = await CategoriesService.listCategory();
        setAllCategories(response);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    const getValidationSchema = () => (
        Yup.lazy(() =>
            Yup.object().shape({
                title: Yup.string()
                    .min(5, 'El titulo debe tener al menos 5 caracteres')
                    .required("Campo Obligatorio")
                    .matches(VALIDATION_TITLE,'No puede haber espacios al inicio ni al final de este campo'),
                description: Yup.string()
                    .required("Campo Obligatorio")
                    .min(10, 'la decripcion debe tener al menos 10 caracteres')
            })
        )
    );

    const onSubmit = async (values) => {

        const categoryIDAsNumber = Number(values.category.id);
    
        const newValues = {
            ...values,
            category: { id: categoryIDAsNumber },
            images: values.images.map(image => ({ url: image.url })),
        };
    
        experienceRequest.values = newValues;
        console.log("QUE ES ESTO NEWVALUES",newValues);

        try{
            await ExperienceService.create(experienceRequest);
            setErrorMsj("")
        }catch(error){
            if(error.response && error.response.status === 409){
                setErrorMsj("El producto con ese titulo ya esta siendo usando en nuestro sistema, por favor elija otro nombre");
            }
            console.log(error);
        }
    }


    const {values, setFieldValue, errors, handleSubmit} = useFormik({ 
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validationOnChange: false,
        validateOnBlur: false,
        onSubmit,
    });



    return (
        <DashAddContainer>
            <Content id='experience-form' onSubmit={handleSubmit}>
            {errorMsj && <ErrorMsj>{errorMsj}</ErrorMsj>}
                <input 
                    name='title'
                    placeholder='Ingrese un título'
                    value={values["title"]}
                    onChange={(e) => setFieldValue("title", e.target.value)}
                />
                <textarea
                    name='description'
                    placeholder='Ingrese una descripcion para la experiencia'
                    value={values["description"]}
                    onChange={(e)=> setFieldValue("description", e.target.value)}
                />
                <select 
                    name='category'
                    placeholder='Ingrese una categoria'
                    value={values["category"].id || ""} 
                    onChange={(e) => setFieldValue("category", { id: e.target.value })}
                >
                    <option value="">Selecciona una categoría</option>
                    {allCategories && allCategories.map((category) => (
                        <option key={category.id} value={category.id}>{category.title}</option>
                    ))}
                </select>
                {images.map((imageInput, index) => (
                    <input 
                        key={imageInput.id}
                        name={`images[${index}].url`}
                        placeholder={`Ingrese la url de la imagen ${index + 1}`}
                        value={values.images[index] ? values.images[index].url : ""}
                        onChange={(e) => {
                            const newImages = [...values.images];
                            newImages[index].url = e.target.value;
                            setFieldValue("images", newImages);
                        }}
                    />
                ))}
                <input 
                    name='location'
                    placeholder='Ingrese la ubicacion de la experiencia'
                    value={values["location"]}
                    onChange={(e) => setFieldValue("location", e.target.value)}
                />
                <input 
                    name='pricePerDay'
                    placeholder='Ingrese el precio por día'
                    value={values["pricePerDay"]}
                    onChange={(e) => setFieldValue("pricePerDay", e.target.value)}
                />
                <button form="experience-form" type="submit">Guardar</button>
            </Content>
        </DashAddContainer>
    )
}

export default DashAdd;