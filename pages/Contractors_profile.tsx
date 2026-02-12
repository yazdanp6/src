import { use } from 'react';
import './Contractors_profile.css';
import prof from './img/prof.jpg';




const Contractors_profile = () => {
    const user = {
    name: "Ali Rezaei",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Front-end Developer",
    email: "ali@example.com",
    city: "Tehran",
    job: "React Dev",
    posts: 24,
    followers: 120,
    following: 80,
    age: 20
    };
    return(
        <>
            <div id='imgdiv'>
                <div id='imgdiv1'>
                    <img src={prof} width={20}/>
                </div>
                <div id='imgdiv2'>
                    <div id='info'>
                        <h2>{user.name}</h2>
                        <h3>{user.job}</h3>
                        <h3>{user.city}</h3>
                    </div>
                </div>
            </div>
            <div id='mainpart'>
                <div id="sidebare">
                    <div id='sidebarehead'>
                        <img src={prof}/>
                        <h2>{user.name}</h2>
                    </div>
                    <hr/>
                    <h4>{user.job}</h4>
                    <h3>سابقه : {user.age} سال</h3>
                    <div id='call'>
                        <button>تماس</button>
                    </div>
                </div>
                <div id='column2'>
                    <div id='bio' className='bios'>
                        <h2>درباره من:</h2>
                        <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, non corrupti, ipsam vel, itaque enim eius ipsa accusamus fuga vitae dolore explicabo quidem soluta molestiae velit a magni? Mollitia, ex.</b>
                    </div>
                    <div id='parvaneh' className='bios'>
                        <h2>پروانه و افتخارات</h2>
                        <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, non corrupti, ipsam vel, itaque enim eius ipsa accusamus fuga vitae dolore explicabo quidem soluta molestiae velit a magni? Mollitia, ex.</b>
                    </div>
                    <div id='sampels' className='bios'>
                        <h2>نمونه کار ها</h2>
                        <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, non corrupti, ipsam vel, itaque enim eius ipsa accusamus fuga vitae dolore explicabo quidem soluta molestiae velit a magni? Mollitia, ex.</b>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contractors_profile;