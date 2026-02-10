import { Link } from 'react-router-dom';
import './Home.css';
import pic from './img/mainpic.jpg';
import clock from './img/clock.svg';
import dollar from './img/dollar.svg';
import safe from './img/safe.svg';

const Home = () => {
  return (
    <>
      <div id='backlayer'>
        <div id='firstpart'>
          <h1>ساخت و ساز شفاف ، سریع و هوشمند</h1>
          <h3>با تکنولوژی هوشمند ما، هزینه پروژه ساخنمانی خود را در کمتر از 5 دقیقه تخمین بزنید و به پیمانکاران معتبر دسترسی پیدا کنید.</h3>
          <div id='butts'>
            <div>
              <button id='butt1'>
                <Link to="/estimate">شروع تخمین قیمت</Link>
              </button>
            </div>
            <div>
              <button id='butt2'>
                <Link to="/Contractors">پیمانکاران معتبر</Link>
              </button>
            </div>
          </div>
          <img src={pic} id='mainpic'/>
        </div>
      </div>
      <div id='part2'>
        <h2>
          چرا BuildWise؟
        </h2>
        <div id='explain'>
          <ul id='list'>
            <li>
              <div className='listitem'>
                <img src={clock}/>
                <h3>صرفه جویی در زمان</h3>
                <b>در کمتر از 5 دقیقه قیمت دقیق دریافت کنید</b>
              </div>
            </li>
            <li>
              <div className='listitem'>
                <img src={dollar}/>
                <h3>شفافیت قیمت</h3>
                <b>بدون هزینه پنهان و با جزییات کامل</b>
              </div>
            </li>
            <li>
              <div className='listitem'>
                <img src={safe}/>
                <h3>پیمانکاران معتبر</h3>
                <b>ارتباط با بهترین پیمانکاران دارای سابقه و تایید شده</b>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id='part3'>
        <div className='rows'>
          <div className='info'>
            <div>+500</div>
            <div>پروژه انجام شده</div>
          </div>
          <div className='info'>
            <div>+150</div>
            <div>پیمانکار معتبر</div>
          </div>
        </div>
        <div className='rows'>
          <div className='info'>
            <div>98%</div>
            <div>رضایت کاربران</div>
          </div>
          <div className='info'>
            <div>24/7</div>
            <div>پشتیبانی آنلاین</div>
          </div>
        </div>
      </div>
      
      <div id='part4'>
        <h2>آماده شروع پروژه ساختمانی خود هستید؟</h2>
        <div>همین حالا تخمین قیمت رایگان دریافت کنید و با بهترین پیمانکاران ارتباط بگیرید</div>
        <div id='butts2'>
          <div>
            <button id='butt21'>
              <Link to="/estimate">شروع تخمین قیمت</Link>
            </button>
          </div>
          <div>
            <button id='butt22'>
              <Link to="/Contractors">ثبت نام پیمانکاران</Link>
            </button>
          </div>
        </div>
      </div>

    </>
    )
};

export default Home;
