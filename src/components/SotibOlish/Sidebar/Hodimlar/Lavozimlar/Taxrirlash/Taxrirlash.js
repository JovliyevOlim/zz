import './taxrirlash.css'
import {useState} from 'react'

function Taxrirlash() {

    const [input,setInput] = useState(
        {
            name:'',

            xBarchasinibelgilash:'',
            xodimkorish:'',
            xodimqoshish:'',
            xodimtaxrirlash:'',
            xodimochirish:'',

            lBarchasinibelgilash:'',
            lavozimkorish:'',
            lavozimqoshish:'',
            lavozimtaxrirlash:'',
            lavozimochirish:'',

            tBarchasinibelgilash:'',
            lang1:'',
            lang2:'',
            dillerqoshish:'',
            dillertaxrirlash:'',
            dillerochirish:'',

            mBarchasinibelgilash:'',
            lang3:'',
            lang4:'',
            lang5:'',
            lang6:'',
            lang7:'',
            lang8:'',
            lang9:'',
            mijozqoshish:'',
            mijoztaxrirlash:'',
            mijozochirish:''
        }
    )

    function changexBarchasini(e){
        input.xBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
    }

    function changename(e){
        input.name = e.target.checked
        let a = {...input}
        setInput(a)
        console.log(input.name)
    }

    function changexodimkorish(e){
        input.xodimkorish = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changexodimqoshish(e){
        input.xodimqoshish = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changexodimtaxrirlash(e){
        input.xodimtaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changexodimochirish(e){
        input.xodimochirish = e.target.checked
        let a = {...input}
        setInput(a)
    }

    function changelBarchasini(e){
        input.lBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changelavozimqoshish(e){
        input.lavozimqoshish = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changelavozimkorish(e){
        input.lavozimkorish = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changelavozitaxrirlash(e){
        input.lavozimtaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changelavozimochirish(e){
        input.lavozimochirish = e.target.checked
        let a = {...input}
        setInput(a)
    }


    function changetBarchasi(e){
        input.tBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changelang1(e){
        input.lang1 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changelang2(e){
        input.lang2 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changedillerqoshish(e){
        input.dillerqoshish = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changedillertaxrirlash(e){
        input.dillertaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changedillerochirish(e){

        input.dillerochirish = e.target.checked
        let a = {...input}
        setInput(a)
    }

    function changemBarchasi(e){
        input.mBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang3(e){
        input.lang3 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang4(e){
        input.lang4 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang5(e){
        input.lang5 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang6(e){
        input.lang6 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang7(e){
        input.lang7 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang8(e){
        input.lang8 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemlang9(e){
        input.lang9 = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemijozqoshish(e){
        input.mijozqoshish = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemijoztaxrirlash(e){
        input.mijoztaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
    }
    function changemijozochrish(e){
        input.mijozochirish = e.target.checked
        let a = {...input}
        setInput(a)
    }



    return(
        <div className={'container mt-2 p-4  group '}>
            <h4 className={'text-center'}>Lavozimni qo`shish </h4>
                <div className="row d-flex justify-content-center blok ">
                    <div className="l1 p-4 mt-4 col-sm-12 col-5 border">
                            <label htmlFor={'l'}>Lavozim nomi</label>
                            <input type="text" className={'form-control mt-2'} checked={input.name} onChange={changename} placeholder={'Lavozim nomi'}/>
                            <div className="ruxsat mt-4">
                                <h5>Ruxsatnomalar</h5>
                                <label htmlFor={'ch'}>Barchasini belgilash</label>
                                <input type="checkbox" checked={input.xBarchasinibelgilash} onChange={changexBarchasini} className="inpt1" id={'ch'}/>
                                
                                <div className={'mt-4'}>
                                    <input type="checkbox" checked={input.xodimkorish} onChange={changexodimkorish} className="inpt"  id={'kor'}/>
                                    <label htmlFor={'kor'}>Xodimlarni korish</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'qosh'} checked={input.xodimqoshish} onChange={changexodimqoshish} className="inpt"/>
                                    <label htmlFor={'qosh'}>Xodimlarni Qo`shish</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.xodimtaxrirlash} onChange={changexodimtaxrirlash} id={'tax'} className="inpt"/>
                                    <label htmlFor={'tax'}>Xodimlarni taxrirlash</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.xodimochirish} onChange={changexodimochirish} id={'och'} className="inpt"/>
                                    <label htmlFor={'och'}>Xodimlarni o`chirish</label>
                                </div>

                            </div>
                    </div>

                    <div className="l1 p-4 mt-4 col-sm-12 col-5  border">
                        <label htmlFor={'l'}>Lavozimlar</label>

                        <div className="ruxsat mt-4">
                            <label htmlFor={'chch'}>Barchasini belgilash</label>
                            <input type="checkbox" checked={input.lBarchasinibelgilash} onChange={changelBarchasini} className="inpt1"/>

                            <div className={'mt-4'}>
                                <input type="checkbox" checked={input.lavozimkorish} onChange={changelavozimkorish}className="inpt"/>
                                <label htmlFor={'korr'}>Lavozimni korish</label>
                            </div>
                            <div>
                                <input type="checkbox" checked={input.lavozimqoshish} onChange={changelavozimqoshish} id={'qoshLavozim'} className="inpt"/>
                                <label htmlFor={'qoshLavozim'}>Lavozim Qo`shish</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'taxLavozim'} checked={input.lavozimtaxrirlash} onChange={changelavozitaxrirlash} className="inpt"/>
                                <label htmlFor={'taxLavozim'}>Lavozimni taxrirlash</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'ochLavozim'} checked={input.lavozimochirish} onChange={changelavozimochirish} className="inpt"/>
                                <label htmlFor={'ochLavozim'}>Lavozimni o`chirish</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center blok">
                    <div className="l1 p-4 mt-4 col-sm-12 col-5 border">
                        <div>
                            <label htmlFor={'l'}>Ta`minotchi diller</label>

                            <div className="ruxsat mt-4">

                                <label htmlFor={'chDiller'}>Barchasini belgilash</label>
                                <input type="checkbox" checked={input.tBarchasinibelgilash} onChange={changetBarchasi} className="inpt1" id={'chDiller'}/>

                                <div className={'mt-4'}>
                                    <input type="radio" checked={input.lang1} onChange={changelang1} name={'radio'} className="inpt" id={'korDiller'}/>
                                    <label htmlFor={'korDiller'}>lang_v1.view_all_supplier</label>
                                </div>
                                <div className='box'>
                                    <input type="radio" checked={input.lang2} onChange={changelang2} name={'radio'} id={'qoshDiller'} className="inpt"/>
                                    <label htmlFor={'qoshDiller'}>lang_v1.view_own <br /> supplier</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.dillerqoshish} onChange={changedillerqoshish} id={'taxDiller'} className="inpt"/>
                                    <label htmlFor={'taxDiller'}>Dillerlarni qoshish</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.dillertaxrirlash} onChange={changedillertaxrirlash} id={'ochDiller'} className="inpt"/>
                                    <label htmlFor={'ochDiller'}>Dillerlarni taxrirlash</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.dillerochirish} onChange={changedillerochirish} id={'och3'} className="inpt"/>
                                    <label htmlFor={'och3'}>Dillerlarni o`chirish</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="l1 p-4 mt-4 col-sm-12 col-5 border">
                        <label htmlFor={'l'}>Mijoz</label>

                        <div className="ruxsat mt-4">
                            <label htmlFor={'ch1'}>Barchasini belgilash</label>
                            <input type="checkbox" checked={input.lang3} onChange={changemlang3} className="inpt1" id={'ch1'}/>

                            <div className={'mt-4 box'}>
                                <input type="radio" checked={input.lang4} onChange={changemlang4} name={'r'}className="inpt"id={'langC'}/>
                                <label htmlFor={'langC'}>lang_v1.view_all <br /> customer</label>
                            </div>

                            <div className={'mt-4 box'} >
                                <input type="radio" checked={input.lang5} onChange={changemlang5} name={'r'} className="inpt" id={'langC2'}/>
                                <label htmlFor={'langC2'}>lang_v1.view_own <br /> customer</label>
                            </div>

                            <div className={'mt-4 box'}>
                                <input type="radio" checked={input.lang6} onChange={changemlang6} name={'r'} className="inpt" id={'langC3'}/>
                                <label htmlFor={'langC3'}>lang_v1._customer_with <br /> no_sell_one_month</label>
                            </div>

                            <div className={'mt-4 box'}>
                                <input type="radio" checked={input.lang7} onChange={changemlang7} name={'r'} className="inpt" id={'langthree'}/>
                                <label htmlFor={'langthree'}>lang_v1._customer_with <br /> sell_three_month</label>
                            </div>

                            <div className={'mt-4 box'}>
                                <input type="radio" checked={input.lang8} onChange={changemlang8} name={'r'} className="inpt" id={'langsix'}/>
                                <label htmlFor={'langsix'}>lang_v1._customer_with <br /> no_sell_six_month</label>
                            </div>

                            <div className={'mt-4 box'}>
                                <input type="radio" checked={input.lang9} onChange={changemlang9} name={'r'} className="inpt" id={'langyear'}/>
                                <label htmlFor={'langyear'}>lang_v1._customer_with <br /> no_sell_year</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="checkbox" checked={input.mijozqoshish} onChange={changemijozqoshish}className="inpt" id={'kor1'}/>
                                <label htmlFor={'kor1'}>Qoshish</label>
                            </div>
                            <div>
                                <input type="checkbox" checked={input.mijoztaxrirlash} onChange={changemijoztaxrirlash} id={'qosh3'} className="inpt"/>
                                <label htmlFor={'qosh3'}>Taxrirlash</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'tax2'} checked={input.mijozochirish} onChange={changemijozochrish} className="inpt"/>
                                <label htmlFor={'tax2'}>O`chirish</label>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Taxrirlash