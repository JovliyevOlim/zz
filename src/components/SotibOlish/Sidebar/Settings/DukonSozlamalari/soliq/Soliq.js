function Soliq(){
    return(
            <div className="col-md-10">

                <div className="col-md-12 d-flex justify-content-between">

                    <div style={{width:'31%'}}>
                        <label htmlFor={'soliqnomi'}>Soliq nomi</label>
                        <input type="text" className={'form-control'} id={'soliqnomi'}/>
                    </div>
                    <div style={{width:'31%'}}>
                        <label htmlFor={'soliqnomi2'}>Tartib raqami</label>
                        <input type="text" className={'form-control'} id={'soliqnomi2'}/>
                    </div>
                    <div style={{width:'31%'}}>
                        <label htmlFor={'soliqnomi3'} placeholder={'Gst / Vat / Other'}>Soliq nomi</label>
                        <input type="text" className={'form-control'} id={'soliqnomi3'}/>
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <div style={{width:'60%'}}>
                        <label htmlFor={'tartib'}>Tartib raqami</label>
                        <input type="text" className={'form-control'} id={'tartib'}/>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <label htmlFor={'sot'}>Sotib va sotishda ichki soliq</label>
                        <input type="checkbox" id={'sot'} style={{width:'20px',height:'20px'}}/>
                    </div>
                </div>

            </div>
    )
}
export default Soliq