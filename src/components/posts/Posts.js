import {useEffect, useState} from "react";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);

            });
    }, []);

    const postDetails = (id) => {
        let sp = posts.find(value => value.id === id);
        setSinglePost(sp)
    }
    return (
        <div>
            <div className={'single-post'}>
                {singlePost && JSON.stringify(singlePost)}
            </div>
            <div className={'all-posts'}>
                {
                    posts.map(value => <div>{value.id} - {value.title} - <button
                        onClick={() => postDetails(value.id)}>details</button></div>)
                }
            </div>
        </div>
    )

}