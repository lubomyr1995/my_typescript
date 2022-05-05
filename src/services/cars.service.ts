import {ICar} from "../interfaces";
import {axiosService, Res} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: (): Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car: ICar): Res<ICar> => axiosService.post(urls.cars, car),
    updateById: (id: string, car: ICar): Res<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    delById: (id: string): Res<void> => axiosService.delete(`${urls.cars}/${id}`)
}

export {carsService};