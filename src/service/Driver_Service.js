import axios from "axios";

const DRIVER_BASE_REST_API_URL="http://localhost:8080/api/v1/employee_driver";

class DriverService{

    getAllDrivers(){
        return axios.get(DRIVER_BASE_REST_API_URL)
    }
    createDriver(driver){
        return axios.post(DRIVER_BASE_REST_API_URL,driver)
    }
    getDriverById(id){
        return axios.get(DRIVER_BASE_REST_API_URL +"/"+id);
    }
    updateDriver(id,driver){
        return axios.put(DRIVER_BASE_REST_API_URL+"/"+id,driver)
    }
    deleteDriver(id){
        return axios.delete(DRIVER_BASE_REST_API_URL+"/"+id)
    }
}

export default new DriverService();