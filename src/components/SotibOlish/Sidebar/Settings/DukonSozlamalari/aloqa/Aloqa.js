import {useState} from 'react'

function Aloqa(){

    const [input,setInput] = useState(
        {
            lang:''
        }
    )
    function lang(e){
        input.lang = e.target.value
    }

    return(
        <div className={'col-md-10'}>
            <label htmlFor={'lang'}>lang_v1 default_credit_limit</label>
            <input value={input.lang} onChange={lang} type="text" className={'form-control'} id={'lang'}/>
        </div>
    )
}
export default Aloqa