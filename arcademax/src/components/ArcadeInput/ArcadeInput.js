import React, { useState } from 'react';
import './ArcadeInput.css';

function ArcadeInputForm({ onClose }) {
    const [showOther, setShowOther] = useState(false);

    const displayOtherText = () => {
        setShowOther(!showOther);
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
                <h3 style={{ color: '#170a60ff' }}>Offer Suggestion</h3>

                <form>
                    <label htmlFor="game">Game: </label>
                    <select name="games" id="game">
                        <option value="pump">Pump It Up</option>
                        <option value="ddr">Dance Dance Revolution</option>
                    </select>
                    <br />
                    <label htmlFor="arcade">Arcade: </label>
                    <select name="arcades" id="arcade">
                        <option value="round1-santa_ana">Round1 - Santa Ana</option>
                        <option value="round1-lake_forest">Round1 - Mission Viejo</option>
                    </select>
                    <br /><br />
                    <label htmlFor="change">What Changed? </label><br />
                    <input type="radio" name="change" value="service" />game out of service<br />
                    <input type="radio" name="change" value="not_there" />game no longer there<br />
                    <input type="radio" name="change" value="update" />game model updated<br />
                    <input type="radio" id="other" onClick={displayOtherText} name="change" value="other" /> other: <br />
                    {showOther && <div><input type="text" id="other_game_suggestion" /></div>}
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ArcadeInputForm;
