import {useEffect, useState} from "react";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";

export default function Users(props) {
    let {match: {url}} = props
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
                console.log(value);
            });

    }, []);


    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    url={url}
                />)
            }
            <Route path={'/users/:id'} component={UserDetails}/>

        </div>
    )

}