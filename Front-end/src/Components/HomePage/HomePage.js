// Components
import LandingPage from "../LandingPage"
import TopTen from "../Top10"
import MusicCards from "../shared/Cards/MusicCards"
import Remix from "../Remix"
import SwiperTest from "../NewBanner/swiperTest"


export default function HomePage() {

    return <>
      <LandingPage>
        <SwiperTest />
        <TopTen />
        <MusicCards title={'recommend'} className={'list-music-container'}/>
        <MusicCards title={'new Musics'} className={'list-music-container'}/>
        <Remix />
      </LandingPage>
    </>
}