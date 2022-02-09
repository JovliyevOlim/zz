import {useState} from 'react'

export default function BoshSahifaDukonSozlama(){

    const [input,setInput] = useState(
        {
            muddat:''
        }
    )

    function muddat(e){
        input.muddat = e.target.value
        let a = {...input}
        setInput(a)
    }

    return(
        <div className={'col-md-10'}>
            <div className="col-md-6 mt-4">
                <p>Necha kun qolganida muddati o'tayotgan mahsulotlar bosh sahifada chiqsin?:*</p>
                <input  type="text" className={'form-control'} value={input.muddat} onChange={muddat}/>
            </div>
        </div>
    )
}