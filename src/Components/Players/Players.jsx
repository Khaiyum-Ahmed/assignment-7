import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className="pb-[240px]">

            <div className="flex justify-between items-center">
                <h2>Available Players</h2>
            <div>
                <button className="active">Available</button>
                <button className="default">selected</button>
            </div>
            </div>
            
               <div className="md:grid grid-cols-3 gap-5 space-y-5">
                    {
                players.map(player => <Player player = {player}></Player>)
                 }
               </div>
                
                
        </div>
        
    );
};

export default Players;

            