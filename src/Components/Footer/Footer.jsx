import footerlogo from '../../assets/assets/logo-footer.png'
import Subscribe from '../Subscribe/Subscribe';
const Footer = () => {
    return (
        <footer className="bg-[#06091A] pt-[240px]">
            <div className='relative max-w-11/12 mx-auto pb-16'>
            <Subscribe></Subscribe>
                <div className='flex justify-center mb-16'>
                    <img src={footerlogo} alt="" />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-[300px]'>
                        <h5 className='font-semibold text-[18px] text-white mb-4'>About Us</h5>
                        <p className='font-normal text-base text-[rgba(255,255,255,.6)]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h5 className='font-semibold text-[18px] text-white mb-4'>Quick Links</h5>
                        <ul className='font-normal text-base text-[rgba(255,255,255,.6)] list-disc space-y-3'>
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className='w-[400px]'>
                        <h5 className='font-semibold text-[18px] text-white mb-4'>Subscribe</h5>
                        <p className='font-normal text-base text-[rgba(255,255,255,.6)] mb-4'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex'>
                            <input className='text-base text-[rgba(19,19,19,.4)] py-3 px-8 bg-white border border-[rgba(255,255,255,.15)] rounded-bl-2xl rounded-tl-2xl' type="text" placeholder='Enter your e-mail' name="" id="" />
                        <button className='bg-linear-to-r/srgb from-[#e5cc9a] to-[#e87592] cursor-pointer py-3 px-8 font-bold text-base text-[#040D11] rounded-br-2xl rounded-tr-2xl '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-8 border-t border-[rgba(255,255,255,.15)]'>
                <p className='text-base font-normal text-[rgba(255,255,255,.6)]'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;