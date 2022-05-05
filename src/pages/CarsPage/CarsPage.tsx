import {FC} from "react";
import {CarForm, Cars} from "../../components";
import {Outlet} from "react-router-dom";
import css from './CarPage.module.css';

const CarsPage: FC = () => {
    return (
        <div>
            <div className={css.wrap}><CarForm/>
                <Outlet/></div>
            <hr/>
            <hr/>
            <Cars/>

        </div>
    );
};

export {CarsPage};
