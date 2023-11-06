import LandingPage from "../LandingPage";
import MusicCards from "../shared/Cards/MusicCards";
import Comments from "../shared/Comments";
import Player from "./MusicItems/Player";


export default function PlayMusicPage() {


    return <>
       <LandingPage>
         <Player />
         <MusicCards title={'related music'}/>
         <MusicCards title={'Similar music'}/>
         <Comments />
       </LandingPage>
    </>
}