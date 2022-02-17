import React, {useEffect} from "react";
import Home from "./components/Hbody/Home";
import './App.css'
import {connect} from "react-redux";
import {active} from "./reducer/functionreducer";
import {useState} from "react";
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Headerthird from "./components/SotibOlish/headerthird";
import {useHistory} from "react-router-dom";
import functionreducer from "./reducer/functionreducer";
import Sidebar from "./components/SotibOlish/Sidebar/Sidebar";
import users from "./reducer/users";
function App({functionreducer,active,users}) {
    const history = useHistory()

    useEffect(() => {
        history.push('/home')
        }, [])

    const [link, Setlink] = useState('')

    function linkpost() {
            history.push('')
            Setlink('/headerthird')
    }

    return (
        <div className={'app-css'}>
            <div className={`${functionreducer.func.class1}`}>
                {
                    functionreducer.func.actives ? <Sidebar/>
                        : ''
                }

            </div>
            <div className={`${functionreducer.func.class2}`}>
                <Switch>
                    <Route path={'/home'} render={() => <Home linkpost={linkpost}/>}/>
                    <Route path={'/headerthird'} component={Headerthird}/>
                    <Redirect to={link}/>
                </Switch>
            </div>
        </div>

    );
}

export default connect((functionreducer,users),{active})(App);
