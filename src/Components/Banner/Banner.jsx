import hero from '../../assets/assets/banner-main.png'
import shadow from '../../assets/assets/bg-shadow.png'
 import { ToastContainer } from 'react-toastify';
const Banner = ({handleFreeCredit}) => {
    return (
        <div className="max-w-11/12 mx-auto mb-20">
            <div className='text-center py-16 rounded-3xl bg-[#131313] relative -z-0'>
                <img className='absolute w-full h-full top-0 left-0 rounded-3xl -z-1' src={shadow} alt="" />
                <img className='mx-auto mb-6' src={hero} alt="" />
                <h1 className='mb-4 font-bold text-2xl lg:text-[40px] text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='mb-6 font-medium text-[rgba(255,255,255,.7)] lg:text-2xl text-base'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit}
                 className='font-bold text-base text-[#131313] py-3 px-5 bg-[#E7FE29] rounded-xl cursor-pointer'>Claim Free Credit</button>
                 <ToastContainer 
                 position="top-center"
                 />

            </div>
        </div>
    );
};

export default Banner;