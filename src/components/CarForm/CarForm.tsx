import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carAction} from "../../redux/slices/car.slice";

const CarForm: FC = () => {
    const {reset, register, handleSubmit} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(carAction.create({car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model<input type="text" {...register('model')}/></label></div>
            <div><label>price<input type="text" {...register('price')}/></label></div>
            <div><label>year<input type="text" {...register('year')}/></label></div>
            <button>create</button>
        </form>
    );
};

export {CarForm};
