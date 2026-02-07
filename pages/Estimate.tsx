import './estimate.css';

const Estimate = () => {
    return(
        <>
            <div id='back'>
                <div id='front'>
                    <h1>تخمین قیمت پروژه شما</h1>
                    <div id='contant'>
                        <div className='cap'>
                            نوع پروژه
                        </div>
                        <select className='txt'>
                            <option value='1' selected>ساخت و ساز جدید</option>
                            <option value='2'>داخلی</option>
                        </select>
                        <div className='cap'>
                            متراژ(متر مربع)
                        </div>
                        <div>
                            <input type="text" placeholder="مثلا 120" className='txt'/>
                        </div>
                        <div className='cap'>
                            موقعیت جغرافیایی
                        </div>
                        <div>
                            <map name="mp"></map>
                        </div>
                        <div className='cap'>
                            توضیحات بیشتر(اختیاری)
                        </div>
                        <div>
                            <textarea id='txtarea' placeholder='جزییات بیشتر...'></textarea>
                        </div>
                        <div>
                            <button id='est'>تخمین هزینه</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Estimate;