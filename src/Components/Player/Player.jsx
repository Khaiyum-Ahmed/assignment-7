import { FaFlag } from "react-icons/fa";


const Player = ({player}) => {
    const {player_img,player_name,player_country,player_rule,batting_style,bowling_style,price} = player;
    return (
        <div className="border border-[rgba(19,19,19,.1)] rounded-2xl">
            <div className="p-6">
                <img className="rounded-2xl w-full  h-[280px] object-center mb-6" src={player_img} alt="" />

                <div className="flex items-center mb-4">
                    <img className="w-[40px] h-[40px] rounded-full mr-4" src={player_img} alt="" />
                    <h3 className="font-semibold text-xl text-[#131313]">{player_name}</h3>
                </div>

                <div className="flex justify-between items-center border-b border-[rgba(19,19,19,.10)] pb-4">
                    <div className="flex items-center text-[#131313] opacity-50">
                        <FaFlag />
                        <p className="ml-3 font-normal text-base">{player_country}</p>
                    </div>
                    <button className="text-[#131313] text-[14px] font-normal py-2 px-4 bg-[rgba(19,19,19,.05)] rounded-[8px]">{player_rule}</button>
                </div>

                <h2 className="font-bold text-base text-[#131313] my-4">Rating</h2>
                <div className="flex justify-between items-center space-y-3">
                    <h3 className="font-semibold text-base text-[#131313]">{batting_style}</h3>
                    <h4 className="font-normal text-base text-[rgba(19,19,19,.7)]">{bowling_style}</h4>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-base text-[#131313]">Price: ${price}</h4>
                    <button className="font-normal text-[14px] text-[#131313] py-2 px-4 border border-[rgba(19,19,19,.1)] rounded-[8px]">Choose Player</button>
                </div>


                 
            </div>
        </div>
    );
};

export default Player;