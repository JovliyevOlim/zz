import {maxsulot} from 'react'

function Mahsulot2(){
    return(
        <div className={
            'col-md-10'
        }>
            <div className="col-md-12 d-flex justify-content-between">
                <div style={{width:'31%'}}>
                    <label htmlFor={'a'}>SKU prefix:</label>
                    <input type="text" className={'form-control'} id={'a'}/>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'a2'}>Yaroqlilik muddati:</label>
                    <select name="" id={'a2'} className={'form-control'}>
                        <option value="#">Faqat amal qo`shish muddati</option>
                        <option value="#">Ishlab chiqarish sanasi va amal qilish muddati</option>
                    </select>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'a3'}>Mahsulotlarni amal qilish muddati:</label>
                    <select name="" id={'a3'} className={'form-control'}>
                        <option value="">Belgilangan kundan oldin savdoni to`xtatish</option>
                        <option value="">Sotishda davom etish</option>
                    </select>
                </div>
            </div>

            <div className="col-md-12 mt-4 d-flex align-items-center justify-content-between">
                <div className={'d-flex justify-content-between'}>
                    <label htmlFor={'l1'}>Brend va fermalarni yoqish</label>
                    <input id={'l1'} type="checkbox" style={{width:'20px',height:'20px'}}/>
                </div>
                <div className={'d-flex justify-content-between'} style={{width:'20%'}}>
                    <label htmlFor={'l2'}>Brend va fermalarni yoqish</label>
                    <input id={'l2'} type="checkbox" style={{width:'20px',height:'20px'}}/>
                </div>
                <div className={'d-flex justify-content-between'} style={{width:'31%'}}>
                    <label htmlFor={'l3'}>Brend va fermalarni yoqish</label>
                    <input id={'l3'} type="checkbox" style={{width:'20px',height:'20px'}}/>
                </div>
            </div>

            <div className="col-md-12 mt-4 d-flex align-items-center justify-content-between">
                <div className={'d-flex justify-content-between'}>
                    <label htmlFor={'l4'}>Narx va soliq mahsulotlari</label>
                    <input type="checkbox" id={'l4'} style={{width:'20px',height:'20px'}}/>
                </div>
                <div style={{width:'31%'}}>
                    <label htmlFor={'l5'}>Amaldagi o`lchov birligi:</label>
                    <select name="" id={'l5'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Kg</option>
                        <option value="#">Dona</option>
                    </select>
                </div>
                <div className={'d-flex justify-content-between'}>
                    <label htmlFor={'l6'}>Amaldagi o`lchov birligi:</label>
                    <input type="checkbox" id={'l6'} style={{width:'20px',height:'20px'}}/>
                </div>
            </div>
        </div>
    )
}
export default Mahsulot2