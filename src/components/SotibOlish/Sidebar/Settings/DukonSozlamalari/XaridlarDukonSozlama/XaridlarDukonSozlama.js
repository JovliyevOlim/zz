export default function XaridlarDukonSozlama(){
    return(
        <div className={'col-md-10 offset-1'}>

            <div className="col-md-12 mt-4 d-flex justify-content-between align-items-center">
                <div className={'col-md-6'}>
                    <label htmlFor={'maxsulotN'}>Maxsulot narxini taxrirlash dostupini berish </label>
                    <input type="checkbox" id={'maxsulotN'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                </div>
                <div className={'col-md-6'}>
                    <label htmlFor={'maxsulotN2'}>Xaridlar statusini yoqish </label>
                    <input type="checkbox" id={'maxsulotN2'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                </div>
            </div>

            <div className="col-md-12 mt-4 d-flex justify-content-between align-items-center">
                <div className={'col-md-6'}>
                    <label htmlFor={'maxsulotN3'}>Lot raqamini yoqish </label>
                    <input type="checkbox" id={'maxsulotN3'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                </div>
                <div className={'col-md-6'}>
                    <label htmlFor={'maxsulotN24'}> lang_v1.enable_purchase_order </label>
                    <input type="checkbox" id={'maxsulotN24'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                </div>
            </div>

        </div>
    )
}