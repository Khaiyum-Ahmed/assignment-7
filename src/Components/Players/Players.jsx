import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Player from "../Player/Player";
import SelectedPlayers from "../Selected_players/SelectedPlayers";
// import useBalance from "../Balance/Balance";


const Players = ({ balance, setBalance }) => {
    // const {balance, setBalance} = useBalance();
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showsAvailablePlayers, setShowsAvailablePlayers] = useState(true);

    console.log(balance)




    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handlesShowSelectedPlayers = () => {
        // const newPlayers = [...players, select ];
        // setSelected(newPlayers);
        setShowsAvailablePlayers(false)
        // alert('player selected')
    }

    const handleShowAvailablePlayers = () => {
        setShowsAvailablePlayers(true)
    }

    const handleRemovePlayer = (id, price) => {
        const remainingPlayers = selectedPlayers.filter(player => player.id !== id);
        setSelectedPlayers(remainingPlayers);
        setBalance(balance + price)
        // console.log(remainingPlayers)
        // console.log(id)


    }

    const handleChoosePlayer = (data) => {
        const playerData = {
            player_name: data.player_name,
            player_rule: data.player_rule,
            id: data.id,
            player_img: data.player_img,
            price: data.price,

        }

        if (balance >= data.price) {
            setSelectedPlayers(oldPlayers => [...oldPlayers, playerData])
            setBalance(balance - data.price)

            toast.success(`Successfully Selected ${playerData.player_name}!`, {
                position: "top-center"
            })
        }
        else {
            toast.warning(`Unavailable to Select!!`, {
                position: "top-center"
            })
        }

        // console.log(data)
        // console.log(playerData)
    }
    // console.log(selectedPlayers)


    return (
        <div className="pb-[240px]">

            <div className="flex justify-between items-center mb-8">
                {showsAvailablePlayers ? <h2 className="font-bold text-3xl text-[#131313]">Available Players </h2> : <h2 className="font-bold text-3xl text-[#131313]">Select Players ({selectedPlayers.length} / 6) </h2>}
                <div>
                    <button onClick={() => handleShowAvailablePlayers()} className={`btnAvailable transition-all ${showsAvailablePlayers ? "bg-[#E7FE29] font-bold text-[#131313] " : "bg-white text-[rgba(19,19,19,.6)]"} `}>Available</button>
                    <button onClick={() => handlesShowSelectedPlayers()}
                        className={`btnSelected transition-all ${!showsAvailablePlayers ? "bg-[#E7FE29] font-bold text-[#131313] " : "bg-white text-[rgba(19,19,19,.6)]"} `}>selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {
                showsAvailablePlayers ?
                    <div className="md:grid grid-cols-3 gap-5 space-y-5">

                        {
                            (players.map(player => <Player key={player.id} player={player} handleChoosePlayer={handleChoosePlayer}></Player>))
                        }
                    </div>
                    : <SelectedPlayers selectedPlayers={selectedPlayers}
                        handleRemovePlayer={handleRemovePlayer}
                    />
            }


        </div>

    );
};

export default Players;

