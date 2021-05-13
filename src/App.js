import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to={'/users'}>to users</Link></li>
                    <li><Link to={'/posts'}>to posts</Link></li>
                </ul>
                <Switch>

                    <Route path={'/users/'} render={(props) => {
                        return <Users {...props}/>
                    }}/>

                    <Route path={'/posts'} render={(props) => {
                        return <Posts {...props}/>
                    }}/>

                </Switch>

            </Router>
        </div>
    );
}

export default App;
