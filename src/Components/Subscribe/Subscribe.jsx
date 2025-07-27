import bg from '../../assets/assets/bg-shadow.png'
const Subscribe = () => {
    return (
        <div className='absolute -top-[450px] w-full border-2 border-[#fff] rounded-3xl bg-[rgba(255,255,255,.15)] p-6'>
            <div className="text-center bg-[#fff] border border-[rgba(19,19,19,.1)] relative py-[88px] rounded-3xl">
                <img className='absolute top-0 left-0 w-full h-full rounded-3xl' src={bg} alt="" />
                <h3 className='mb-4 font-bold text-[32px] text-[#131313]'>Subscribe to our Newsletter</h3>
                <p className='mb-4 font-medium text-xl text-[rgba(19,19,19,.7)]'>Get the latest updates and news right in your inbox!</p>
                <div className='w-[560px] flex justify-center items-center mx-auto'>
                    <input className='w-full font-normal text-base text-[rgba(19,19,19,.4)] py-4 px-8 rounded-xl border border-[rgba(19,19,19,.15)]' type="text" placeholder="Enter your email" name="" id="" />
                <button className='  font-bold text-base text-[#131313] py-4 px-8 rounded-xl bg-linear-to-r/srgb from-[#cf85b2] to-[#f6c553] ml-4'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;