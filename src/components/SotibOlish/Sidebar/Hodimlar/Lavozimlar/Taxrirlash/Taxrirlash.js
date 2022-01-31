import './taxrirlash.css'
function Taxrirlash() {
    return(
        <div className={'row mt-5'}>
            <h4 className={'text-center'}>Lavozimni taxrirlash</h4>

            <div className="col-md-12">

                <div className="col-md-11 justify-content-between ms-5 d-flex">

                    <div className="l1 p-3 mt-5 col-md-6 border">
                        <div>
                            <label htmlFor={'l'}>Lavozim nomi</label>
                            <input type="text" className={'form-control'} placeholder={'Lavozim nomi'}/>

                            <div className="ruxsat mt-4">
                                <h5>Ruxsatnomalar</h5>
                                User
                                <label htmlFor={'ch'}>Barchasini belgilash</label>
                                <input type="checkbox" style={{marginLeft:'10px',width:'15px',height:'15px'}} id={'ch'}/>

                                <div className={'mt-4'}>
                                    <input type="checkbox" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'kor'}/>
                                    <label htmlFor={'kor'}>Xodimlarni korish</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'qosh'} style={{width:'15px',marginTop:'10px', height:'15px'}}/>
                                    <label htmlFor={'qosh'}>Xodimlarni Qo`shish</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'tax'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                    <label htmlFor={'tax'}>Xodimlarni taxrirlash</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'och'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                    <label htmlFor={'och'}>Xodimlarni o`chirish</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="l1 mt-5 col-md-6 p-4 border" style={{marginLeft:'15px'}}>
                        <label htmlFor={'l'}>Lavozimlar</label>

                        <div className="ruxsat mt-4">
                            <label htmlFor={'chch'}>Barchasini belgilash</label>
                            <input type="checkbox" style={{marginLeft:'10px',width:'15px',height:'15px'}} id={'chch'}/>

                            <div className={'mt-4'}>
                                <input type="checkbox" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'korr'}/>
                                <label htmlFor={'korr'}>Lavozimni korish</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'qoshLavozim'} style={{width:'15px',marginTop:'10px', height:'15px'}}/>
                                <label htmlFor={'qoshLavozim'}>Lavozim Qo`shish</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'taxLavozim'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                <label htmlFor={'taxLavozim'}>Lavozimni taxrirlash</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'ochLavozim'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                <label htmlFor={'ochLavozim'}>Lavozimni o`chirish</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-11 ikki justify-content-between d-flex">

                    <div className="l1 mt-5 col-md-6 p-4 border">
                        <div>
                            <label htmlFor={'l'}>Ta`minotchi diller</label>
                            {/*<input type="text" className={'form-control'} placeholder={'Lavozim nomi'}/>*/}

                            <div className="ruxsat mt-4">

                                <label htmlFor={'chDiller'}>Barchasini belgilash</label>
                                <input type="checkbox" style={{marginLeft:'10px',width:'15px',height:'15px'}} id={'chDiller'}/>

                                <div className={'mt-4'}>
                                    <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'korDiller'}/>
                                    <label htmlFor={'korDiller'}>lang_v1.view_all_supplier</label>
                                </div>
                                <div>
                                    <input type="radio" id={'qoshDiller'} style={{width:'15px',marginTop:'10px', height:'15px'}}/>
                                    <label htmlFor={'qoshDiller'}>lang_v1.view_own_supplier</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'taxDiller'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                    <label htmlFor={'taxDiller'}>Dillerlarni qoshish</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'ochDiller'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                    <label htmlFor={'ochDiller'}>Dillerlarni taxrirlash</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'och3'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                    <label htmlFor={'och3'}>Dillerlarni o`chirish</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="l1 mt-5 col-md-6 p-4 border" style={{marginLeft:'15px'}}>
                        <label htmlFor={'l'}>Mijoz</label>

                        <div className="ruxsat mt-4">
                            <label htmlFor={'ch1'}>Barchasini belgilash</label>
                            <input type="checkbox" style={{marginLeft:'10px',width:'15px',height:'15px'}} id={'ch1'}/>

                            <div className={'mt-4'}>
                                <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'langC'}/>
                                <label htmlFor={'langC'}>lang_v1.view_all_customer</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'langC2'}/>
                                <label htmlFor={'langC2'}>lang_v1.view_own_customer</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'langC3'}/>
                                <label htmlFor={'langC3'}>lang_v1._customer_with_no_sell_one_month</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'langthree'}/>
                                <label htmlFor={'langthree'}>lang_v1._customer_with_no_sell_three_month</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'langsix'}/>
                                <label htmlFor={'langsix'}>lang_v1._customer_with_no_sell_six_month</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'langyear'}/>
                                <label htmlFor={'langyear'}>lang_v1._customer_with_no_sell_year</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="checkbox" style={{width:'15px',height:'15px', marginTop:'4px'}} id={'kor1'}/>
                                <label htmlFor={'kor1'}>Qoshish</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'qosh3'} style={{width:'15px',marginTop:'10px', height:'15px'}}/>
                                <label htmlFor={'qosh3'}>Taxrirlash</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'tax2'} style={{width:'15px',height:'15px',marginTop:'10px'}}/>
                                <label htmlFor={'tax2'}>O`chirish</label>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
export default Taxrirlash