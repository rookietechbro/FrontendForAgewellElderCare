import axios from "axios";


// const apiClient = axios.create({
//     // providerBaseURL: 'http://localhost:8080/api/v1/ServiceFusion',
//     customerBaseURL:'http://localhost:8080/api/v1/CareGiver/register',
//     // adminBaseURL:'http://localhost:8080/api/v1/admin/',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
// });
//
// export const register = async (data) => {
//     try {
//         const response = await apiClient.post('http://localhost:8080/api/v1/CareApp', data);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error registering a service provider', error);
//         throw error;
//     }
// };

class ApiService{
    static BASE_URL = "http://localhost:8080"

    static async Register(userData){
        try{
            const response = await axios.post(`${ApiService.BASE_URL}/api/v1/User/register`,userData,{
                headers: {
                  'Content-Type': 'application/json',

    },
            })
            localStorage.setItem("message", response.data.message);
            console.log("registration successful: ",response)
            return response

        }catch (e) {
            console.log("The error: ", e)
            return e;

        }
    }

    static async login(userData){
        try{
            const response = await axios.post(`${ApiService.BASE_URL}/api/v1/User/login`,userData,{
                headers: {
                    'Content-Type': 'application/json',

                },
            })
            localStorage.setItem("error", response.data.message)
            console.log("registration successful: ",response)
            return response

        }catch (e) {
            console.log("The error: ", e)
            return e;

        }
    }





    static logut(){
       localStorage.clear();
       console.log("Logout Successful")
    }
}

export default ApiService;