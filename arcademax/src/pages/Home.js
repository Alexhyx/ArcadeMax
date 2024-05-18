import React from './react'
import PostBoard from 'components/Forum/PostBoard/PostBoard';
import Map from 'components/Search/Map';
import HeaderComp from 'components/Header/HeaderComponent';
import Profile from 'components/Profile/ProfilePage'
import { ArcadeInfoProvider } from 'stubData/ArcadeInfoHandler';
import GameLocationDropdowns from 'components/Search/GameLocationDropdowns';


const Home = () => {


    return (
        <div>
            <HeaderComp/>
            <PostBoard/>
  
            <ArcadeInfoProvider>
            <Map/>
            <GameLocationDropdowns/>
            </ArcadeInfoProvider>
        
        
  
            <ArcadeInfoProvider>
            <Profile/>
            </ArcadeInfoProvider> 
        
        </div>


    )


}

export default Home;

