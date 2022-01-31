function Dukon1() {
    return (

        <div className="col-md-10">

            <div className={'col-md-12 d-flex justify-content-between'}>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi'}>Dukon nomi</label>
                    <input type="text" id={'nomi'} className={'form-control'} value={'shefir zavod'}/>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'sana'}>Ochilgan sana</label>
                    <input type="date" id={'sana'} className={'form-control'}/>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi'}>Savdodan foyda(barcha)</label>
                    <input type="text" className={'form-control'} value={25}/>
                </div>
            </div>

            <div className={'col-md-12 mt-4 d-flex justify-content-between'}>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi'}>Valyuta</label>
                    <input type="text" id={'nomi'} className={'form-control'} value={'shefir zavod'}/>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'sana'}>Valyuta joylashuvi</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">Narxdan chapga</option>
                        <option value="#">Narxdan o`nga</option>
                    </select>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi'}>Vaqt zonasi</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">ASIA/Srednekolymsk</option>
                        <option value="#">ASIA/Taipei</option>
                        <option value="#">ASIA/Tashkent</option>
                    </select>
                </div>
            </div>

            <div className={'col-md-12 mt-4 d-flex justify-content-between'}>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi3'}>Logoni yangilash</label>
                    <input type="file" id={'nomi3'} className={'form-control'}/>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'sana'}>Xisobot yil boshlanadigan oy</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">Yanvar</option>
                        <option value="#">Fevral</option>
                        <option value="#">Mart</option>
                        <option value="#">Aprel</option>
                        <option value="#">May</option>
                        <option value="#">Iyun</option>
                        <option value="#">Iyul</option>
                        <option value="#">Avgust</option>
                        <option value="#">Sentabr</option>
                        <option value="#">Oktabr</option>
                        <option value="#">Noyabr</option>
                        <option value="#">Dekabr</option>
                    </select>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi'}>Savdolar usulari</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">Fifo</option>
                        <option value="#">ASIA/Taipei</option>
                        <option value="#">ASIA/Tashkent</option>
                    </select>
                </div>
            </div>

            <div className={'col-md-12 mt-4 d-flex justify-content-between'}>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi5'}>O`tkazmalar muddati</label>
                    <input type="text" id={'nomi5'} className={'form-control'}/>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'sana'}>Kun formati</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">mm/dd/yyyy</option>
                        <option value="#">mm/yyyy/dd</option>
                        <option value="#">yyyy/dd/mm</option>
                    </select>
                </div>
                <div style={{width: '31%'}}>
                    <label htmlFor={'nomi'}>Vaqt formati</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">12 soatlik</option>
                        <option value="#">24 soatlik</option>
                    </select>
                </div>
            </div>

            <div className="col-md-12 mt-4 d-flex justify-content-between">
                <div style={{width: '48%'}}>
                    <label htmlFor={'l1'}>lang_v1.code_1_name:</label>
                    <input type="text" id={'l1'} className={'form-control'}/>
                </div>
                <div style={{width: '48%'}}>
                    <label htmlFor={'l2'}>lang_v1.code_1:</label>
                    <input type="text" id={'l2'} className={'form-control'}/>
                </div>
            </div>
            <div className="col-md-12 mt-4 d-flex justify-content-between">
                <div style={{width: '48%'}}>
                    <label htmlFor={'l3'}>lang_v1.code_2_name:</label>
                    <input type="text" id={'l3'} className={'form-control'}/>
                </div>
                <div style={{width: '48%'}}>
                    <label htmlFor={'l4'}>lang_v1.code_2:</label>
                    <input type="text" id={'l4'} className={'form-control'}/>
                </div>
            </div>
        </div>

    )
}

export default Dukon1