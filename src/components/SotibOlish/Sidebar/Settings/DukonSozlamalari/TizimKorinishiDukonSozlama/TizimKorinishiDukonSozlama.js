export default function TizimKorinishiDukonSozlama(){
    return(
        <div className={'col-md-10 mt-4'}>
            <div className="col-md-12 d-flex justify-content-between">
                <div className="col-md-4">
                    <label htmlFor={'dastur'}>Dastur ko`rinishi</label>
                    <select name="" id={'dastur'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Blue</option>
                        <option value="#">Black</option>
                        <option value="#">Purple</option>
                        <option value="#">Green</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor={'dastur'}>Odatda maxsulotlarni ko'rsatadigan oynadagi soni nechta bo'sin</label>
                    <select name="" id={'dastur'} className={'form-control'}>
                        <option value="#">25</option>
                        <option value="#">50</option>
                        <option value="#">100</option>
                        <option value="#">500</option>
                        <option value="#">1000</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor={'yor'}>Yordam matnini yoqish</label>
                    <input type="checkbox" id={'yor'} style={{width:'20px',height:'20px'}}/>
                </div>
            </div>
        </div>
    )
}