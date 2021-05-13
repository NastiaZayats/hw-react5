import {useEffect, useState} from "react";

export default function UserDetails(props) {
    let {match: {params: {id}}, location: {state}} = props;

    let [user, setUser] = useState(null);
    useEffect(() => {
        setUser(state);
    }, [id]);

    return (
        <div>
            {user && JSON.stringify(user)}
        </div>
    )
}