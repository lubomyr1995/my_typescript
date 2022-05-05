import {FC} from "react";
import {IUser} from "../../interfaces";
interface IProps {
    user: IUser
}
const User: FC<IProps> = ({user: {id, email,name,username,address:{street, city, suite, zipcode}}}) => {
    return (
        <div>
            <h2>{id}) {name}</h2>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <ul>address:
                <ol>street: {street}</ol>
                <ol>suite: {suite}</ol>
                <ol>suite: {suite}</ol>
                <ol>zipcode: {zipcode}</ol>
            </ul>
            <hr/>
        </div>
    );
};

export {User};
