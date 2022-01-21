import ReactPlayer from 'react-player'
import { Display } from '../client/lightning'

interface props {
    display: Display
    muted: boolean
    width: Number
}

const Stream = (props: props) => {
    
    return (
        <div>
            <div className='border-4 border-gray-900 rounded-lg'>
                <ReactPlayer url={props.stream} playing muted={props.muted} width="640px" height="480px"/>
            </div>
            <button className='font-semibold text-lg text-gray-400'>{props.display.name}</button>
        </div>
    )
}

export default Stream