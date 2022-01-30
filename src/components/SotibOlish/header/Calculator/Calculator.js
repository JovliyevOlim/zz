import './calculator.css'
import {useState} from "react";
import button from "bootstrap/js/src/button";

function Calculator(){
    const [data,setData] = useState('')
    const [counter,setCounter] = useState(0)
    return(
        <div className={'row'}>

            <div className="col-md-10 offset-1">
        <div style={{width:'10%',height:'1%'}}>

            <ReactCalculator/>

        </div>
                {/*<div className={'calc'}>*/}

                {/*    <div className={'calc-window'}>*/}
                {/*        <div className="count">*/}
                {/*            {counter}*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="buttons">*/}
                {/*        <button value={'%'} className={'b'}>%</button>*/}
                {/*        <button className={'b'}>c</button>*/}
                {/*        <button className={'b'}>x</button>*/}
                {/*        <button className={'b'}>/</button>*/}
                {/*    </div>*/}
                {/*    <div className="buttons">*/}
                {/*        <button value={7}  className={'b'}>7</button>*/}
                {/*        <button className={'b'}>8</button>*/}
                {/*        <button className={'b'}>9</button>*/}
                {/*        <button className={'b'}>X</button>*/}
                {/*    </div>*/}
                {/*    <div className="buttons">*/}
                {/*        <button className={'b'}>4</button>*/}
                {/*        <button className={'b'}>5</button>*/}
                {/*        <button className={'b'}>6</button>*/}
                {/*        <button className={'b'}>-</button>*/}
                {/*    </div>*/}
                {/*    <div className="buttons">*/}
                {/*        <button className={'b'}>1</button>*/}
                {/*        <button className={'b'}>2</button>*/}
                {/*        <button className={'b'}>3</button>*/}
                {/*        <button className={'b'}>+</button>*/}
                {/*    </div>*/}
                {/*    <div className="buttons">*/}
                {/*        <button className={'b'}>'</button>*/}
                {/*        <button className={'b'}>0</button>*/}
                {/*        <button className={'b'}>,</button>*/}
                {/*        <button className={'b'}>=</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

        </div>
    )
}
export default Calculator