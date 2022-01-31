import React, {useEffect} from "react";
import Home from "./components/Hbody/Home";
import './App.css'
import {connect} from "react-redux";
import {active} from "./reducer/functionreducer";
import SecondPage from "./components/Pricing/SecondPage/SecondPage";
import {useState} from "react";
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Headerthird from "./components/SotibOlish/headerthird";
import {useHistory} from "react-router-dom";
import HodimlarRoyhati from "./components/SotibOlish/Sidebar/Hodimlar/hodimlarRoyxati/HodimlarRoyhati";
import functionreducer from "./reducer/functionreducer";
import Sidebar from "./components/SotibOlish/Sidebar/Sidebar";


function App({func,active}) {
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
            <div className={`${func.class1}`}>
                {
                    func.actives ? <Sidebar/>
                        : ''
                }

            </div>
            <div>
                <h4>pushed</h4>
            </div>
            <div className={`${func.class2}`}>
                <Switch>
                    <Route path={'/home'} render={() => <Home linkpost={linkpost}/>}/>
                    <Route path={'/headerthird'} component={Headerthird}/>
                    <Redirect to={link}/>
                </Switch>
            </div>


        </div>

    );
}

export default connect(({functionreducer: {func}}) => ({func}),{active})(App);
