export default function QisqaQoshimcha(){
    return(
        <div className={'col-md-10 mt-4'}>
            <div className="col-md-12 d-flex justify-content-between">
                <div className="col-md-4">
                    <label htmlFor={'purcase'}>Purchase</label>
                    <input type="text" className={'form-control'} id={'purcase'}/>

                    <label htmlFor={'bazadan2'}>Bazadan bazaga surish miqdori:</label>
                    <input type="text" className={'form-control'} id={'bazadan2'}/>

                    <label htmlFor={'bazadan3'}>Xarajatlar:</label>
                    <input type="text" className={'form-control'} id={'bazadan3'}/>

                    <label htmlFor={'bazadan4'}>Savdo uchun to`lov:</label>
                    <input type="text" className={'form-control'} id={'bazadan4'}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor={'xq'}>Xaridni qaytarish</label>
                    <input type="text" className={'form-control'} id={'xq'}/>

                    <label htmlFor={'mb'}>Malumotlar bazasi:</label>
                    <input type="text" className={'form-control'} id={'mb'}/>

                    <label htmlFor={'hk'}>Xamkorlar:</label>
                    <input type="text" className={'form-control'} id={'hk'}/>

                    <label htmlFor={'xt'}>Xarajatni to`lovi:</label>
                    <input type="text" className={'form-control'} id={'xt'}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor={'xq2'}>Xaridlar</label>
                    <input type="text" className={'form-control'} id={'xq2'}/>

                    <label htmlFor={'mb2'}>Qaytarilgan savdolar:</label>
                    <input type="text" className={'form-control'} id={'mb2'}/>

                    <label htmlFor={'hk2'}>Xarid un tulov:</label>
                    <input type="text" className={'form-control'} id={'hk2'}/>

                    <label htmlFor={'xt2'}>Baza:</label>
                    <input type="text" className={'form-control'} id={'xt2'}/>
                </div>
            </div>
        </div>
    )
}