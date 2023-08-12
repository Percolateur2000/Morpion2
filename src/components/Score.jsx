/* eslint-disable react/prop-types */
import "./score.css"

const Score = ({score, playing}) => {
    const {scoreX, scoreO} = score
    return (
        <div className="scoreboard">
            <span className={`score score-X ${!playing ? 'inactive' : ''}`}>X - {scoreX}</span>
            <span className={`score score-O ${playing ? 'inactive' : ''}`}>O - {scoreO}</span>
        </div>
    )
}

export default Score