import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Player from "../Player/Player";
import SelectedPlayers from "../Selected_players/SelectedPlayers";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([
//   {
//     "id": "1",
//     "player_img": "https://i.ibb.co/HTGgvtj8/p0l9vzfz.jpg",
//     "player_name": "Virat Kohli",
//     "player_rule": "Batsman",
//   },
//   {
//     "id": "2",
//     "player_img": "https://i.ibb.co/SDyLWhYv/steve-smith-pictures-plqsoal1luugiyt3.jpg",
//     "player_name": "Steve Smith",
//     "player_rule": "Batsman",
//   },
//   {
//     "id": "3",
//     "player_img": "https://i.ibb.co/nFtCLNh/kane08102301.jpg",
//     "player_name": "Kane Williamson",
//     "player_rule": "Batsman",
//   },
//   {
//     "id": "4",
//     "player_img": "https://i.ibb.co/pvr0ts6f/mahmudullah-1200.jpg",
//     "player_name": "Mahmudullah Riyad",
//     "player_rule": "All-rounder",
//   },
//   {
//     "id": "5",
//     "player_img": "https://i.ibb.co/S755v0rL/skysports-lasith-malinga-cricket-5512553.jpg",
//     "player_name": "Lasith Malinga",
//     "player_rule": "Bowler",
//   },
//   {
//     "id": "6",
//     "player_img": "https://i.ibb.co/2pHjGVT/indiatv-2024-08-31t222011-1725123034.jpg",
//     "player_name": "Dwayne Bravo",
//     "player_rule": "All-rounder",
//   },
//   {
//     "id": "7",
//     "player_img": "https://i.ibb.co/rGdr9D8H/1696748634550-Shakib-Al-Hasan.jpg",
//     "player_name": "Shakib Al Hasan",
//     "player_rule": "All-rounder",
//   },
//   {
//     "id": "8",
//     "player_img": "https://i.ibb.co/DDCgz9zm/M-S-Dhoni.jpg",
//     "player_name": "MS Dhoni",
//     "player_rule": "Wicket-keeper",
//   },
//   {
//     "id": "9",
//     "player_img": "https://i.ibb.co/sptwgc6d/skysports-adil-rashid-rashid-5813350.jpg",
//     "player_name": "Adil Rashid",
//     "player_rule": "Bowler",
//   }
]
);
    const [shows, setShows] = useState(false);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    const handles = () =>{
        // const newPlayers = [...players, select ];
        // setSelected(newPlayers);
        setShows(true)
        // alert('player selected')
    }

    const handleAvailablePlayers = () =>{
        setShows(false)
    }

    const handleChoosePlayer = (data) =>{
        const playerData = {
            player_name:data.player_name,
            player_rule:data.player_rule,
            id: data.id,
            player_img: data.player_img,

        }
        setSelectedPlayers(oldPlayers=>[...oldPlayers, playerData])
         toast.success(`Successfully Selected ${playerData.player_name}!`,{
      position: "top-center"
    })
        // console.log(data)
        // console.log(playerData)
    }
        console.log(selectedPlayers)


    return (
        <div className="pb-[240px]">

            <div className="flex justify-between items-center">
                {!shows ? <h2>Available Players </h2>: <h2>Select Players: </h2>}
            <div>
                <button onClick={()=>handleAvailablePlayers()} className={`btnAvailable transition-all ${!shows ? "bg-[#E7FE29] font-bold text-[#131313] " : "bg-white text-[rgba(19,19,19,.6)]"} `}>Available</button>
                <button onClick={()=>handles()}
                className={`btnSelected transition-all ${shows ? "bg-[#E7FE29] font-bold text-[#131313] " : "bg-white text-[rgba(19,19,19,.6)]"} `}>selected ({selectedPlayers.length})</button>
            </div>
            </div>
            
            {
                !shows ? 
                   <div className="md:grid grid-cols-3 gap-5 space-y-5">
                    
                    { 
                        (players.map(player => <Player key={player.id} player = {player} handleChoosePlayer={handleChoosePlayer}></Player>)) 
                 }
               </div>
               : <SelectedPlayers selectedPlayers={selectedPlayers} />
            }
                
                
        </div>
        
    );
};

export default Players;

            