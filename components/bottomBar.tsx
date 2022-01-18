import BottomBarVid from "./bottomBarVid";
import BottomBarMic from "./bottomBarMic";
import BottomBarScreen from "./bottonBarScreen";
import {BsFillCameraVideoFill,BsFillCameraVideoOffFill,BsSlashLg} from 'react-icons/bs'

const bottomBar = () => {
    return(
        <div className = "fixed bottom-0 m-0 flex bg-gray-900 h-16 border-t border-gray-800 shadow-xl pt-3 justify-center w-5/6">
           <BottomBarVid/>
           <BottomBarMic/>
           <BottomBarScreen/>
        </div>
    )
}

export default bottomBar;