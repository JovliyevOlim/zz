function Savdo2(){
    return(
        <div className={'col-md-10'}>

            <div className="col-md-12 d-flex justify-content-between">
                <div style={{width:'31%'}}>
                    <label htmlFor={'l1'}>Savdo standart soliq:</label>
                    <input type="text" className={'form-control'}/>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l2'}>Savdo standart soliq:</label>
                    <select name="" id={'l2'} className={'form-control'}>
                        <option value="#">Soliq miqdori(foizda)</option>
                        <option value="#">Mavjud emas</option>
                    </select>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l3'}>Hodimni savdodan ulushi:</label>
                    <select name="" id={'l3'} className={'form-control'}>
                        <option value="#">Hodimni savdodan ulushi</option>
                        <option value="#">Barcha hodimlarga</option>
                    </select>
                </div>
            </div>
            <div className="col-md-12 mt-4 d-flex justify-content-between">
                <div style={{width:'31%'}}>
                    <label htmlFor={'l1'}>lang_v1.cmmsn_calculation_type:</label>
                    <input type="text" className={'form-control'}/>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l2'}>Maxsulotlarni sotish usuli:</label>
                    <select name="" id={'l2'} className={'form-control'}>
                        <option value="#">Agar mavjud bo`lsa</option>
                        <option value="#">Har bir yangi qator</option>
                    </select>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l3'}>To'lovni yaxlitlash usuli:</label>
                    <select name="" id={'l3'} className={'form-control'}>
                        <option value="#">Mavjud emas</option>
                        <option value="#">To`liq raqam bilan</option>
                    </select>
                </div>
            </div>
            <div className="col-md-12 d-flex mt-4 justify-content-between">
                <div style={{width:'31%'}}>
                    <label htmlFor={'l4'}>Sotish narxidan past sotmaslik</label>
                    <input type="checkbox" id={'l4'} style={{width:'20px',height:'20px'}}/>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l5'}>Maxsulot tugasa ham sotish</label>
                    <input type="checkbox" id={'l5'} style={{width:'20px',height:'20px'}}/>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l6'}>lang_v1.enable_sales_order</label>
                    <input type="checkbox" id={'l6'} style={{width:'20px',height:'20px'}}/>
                </div>
            </div>
        </div>
    )
}
export default Savdo2