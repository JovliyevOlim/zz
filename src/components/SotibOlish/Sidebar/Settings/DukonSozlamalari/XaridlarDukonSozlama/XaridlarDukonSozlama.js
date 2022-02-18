import './xaridSozlamalri.css'

export default function XaridlarDukonSozlama(){
    return(
        <div className={'xaridSozCont'}>
             <h3 className='text-center pb-3'>Harid sozlamalari</h3>
            <div className="row mb-4">
                <div className={'col-6 d-flex '}>
                    <input className='me-2' type="checkbox" id={'maxsulotN'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                    <label htmlFor={'maxsulotN'}>Maxsulot narxini taxrirlash dostupini berish </label>
                </div>
                <div className={'col-6 d-flex '}>
                    <input className='me-2' type="checkbox" id={'maxsulotN2'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                    <label htmlFor={'maxsulotN2'}>Xaridlar statusini yoqish </label>
                </div>
            </div>

            <div className="row mb-4">
                <div className={'col-6 d-flex '}>
                    <input className='me-2' type="checkbox" id={'maxsulotN3'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                    <label htmlFor={'maxsulotN3'}>Lot raqamini yoqish </label>
                </div>
                <div className={'col-6 d-flex '}>
                    <input className='me-2' type="checkbox" id={'maxsulotN24'} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
                    <label htmlFor={'maxsulotN24'}> lang_v1.enable_purchase_order </label>
                </div>
            </div>

        </div>
    )
}