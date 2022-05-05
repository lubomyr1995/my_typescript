import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carsService} from "../../services";

interface IStore {
    cars: ICar[]
}

const initialState: IStore = {
    cars: []
}

const getAll = createAsyncThunk<ICar[], void>( // перший елемент те що повертаємо а другий що приймаємо
    'carSlice/getAll',
    async () => {
        const {data} = await carsService.getAll();
        return data
    });
const create = createAsyncThunk<ICar, { car: ICar }>(
    'carSlice/create',
    async ({car}) => {
        const {data} = await carsService.create(car);
        return data
    });
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => (
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
    )
});

let {reducer: carReducer} = carSlice;
const carAction = {getAll, create}

export {carReducer, carAction}