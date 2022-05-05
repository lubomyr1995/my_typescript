import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarDetailsPage, CarsPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>
                    <Route path={'cars'} element={<CarsPage/>}>
                        <Route path={':id'} element={<CarDetailsPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
