import logo from '../../assets/assets/logo.png'
import { TbCoinTaka } from "react-icons/tb";
const Header = () => {
    return (
        <header className="max-w-11/12 mx-auto my-6">
            <div className='flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex justify-center items-center'>
                    <ul className='flex space-x-12 text-base text-[rgba(19,19,19,.7)]'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Fixture</a></li>
                        <li><a href='#'>Team</a></li>
                        <li><a href='#'>Schedules</a></li>
                    </ul>
                    <div className='ml-6'>
                        <button className='flex justify-center items-center text-base font-semibold text-[#131313] py-3 px-6 border border-[rgba(19,19,19,.1)] rounded-xl'>Taka <span className='ml-2 text-xl text-[#131313]'><TbCoinTaka /></span></button>
                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default Header;