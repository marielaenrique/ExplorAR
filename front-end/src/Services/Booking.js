import axios from "axios";

const register = async (userId,reservationData, state) => {
    try {
        const response = await axios.post(`http://18.219.139.64:8080/api/v1/reservation/${userId}`,
        {
            startingDate: reservationData.startDate,
            endingDate: reservationData.endDate,
            experience: {
                        id: reservationData.experience
            },
            name: reservationData.name,
            lastName: reservationData.lastName,
            email: reservationData.email,
            identification: reservationData.identification,
            userPhoneNumber: reservationData.userPhoneNumber,
            userAddress: reservationData.userAddress,
            numberOfPeople: reservationData.numberOfPeople
        }
        ,
        {
            headers: {
                Authorization:`Bearer ${state.token}`
            }
        })
        return response.status;
    } catch (error) {
        console.log(error) 
    }
};

const unavaiableDates = async (id) =>{
    try{
        const response = await axios.get(`http://18.219.139.64:8080/api/v1/reservation/date/${id}`);
        return response;
    }catch(error){
        console.log(error);
    }
};

export default {register, unavaiableDates}

