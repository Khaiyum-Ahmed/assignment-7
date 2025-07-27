import { FaRegTrashAlt } from "react-icons/fa";
const SelectedPlayers = ({selectedPlayers}) => {
    console.log(selectedPlayers)
    return (
        <div>
            {
                selectedPlayers.map(player => <div className="flex justify-between items-center border border-[rgba(19,19,19,.1)] rounded-2xl p-6 mb-6" key={player.id}>
                    <div className="flex items-center gap-6">
                        <div>
                        <img className="w-[100px] h-[100px] rounded-2xl" src={player.player_img} alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl text-[#131313] mb-3">{player.player_name}</h2>
                        <p className="text-base text-[rgba(19,19,19,.6)]">{player.player_rule}</p>
                    </div>
                    </div>
                    <div>
                        <button className="text-xl"><FaRegTrashAlt /></button>
                    </div>
                    
                     </div>)
            }
        </div>
    );
};

export default SelectedPlayers;