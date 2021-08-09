import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined></ArrowBackOutlined>
                Home
            </div>
            <video className="video" autoPlay progress controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"></video>   
        </div>
    )
}

export default Watch
