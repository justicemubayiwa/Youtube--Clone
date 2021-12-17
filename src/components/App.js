import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App=()=> {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('Kobe');

    useEffect(()=>{
        setSelectedVideo(videos[0])
    }, [videos])

    function refreshPage() {
        window.location.reload(false);
      }
   
        return (
            <div 
                style={{marginTop:'10px'}} 
                className="ui container ">
                <h1 
                    style={{color: 'red', WebkitTextStroke:'1px black', fontSize:'40px', cursor: 'pointer'}} 
                    class="ui center aligned header"
                    onClick={refreshPage}
                    >
                        reacTube
                </h1>
                <SearchBar onFormSubmit={search}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                onVideoSelect={setSelectedVideo} 
                                videos={videos} 
                            />
                        </div>  
                    </div>
                </div>   
            </div>
        )
    }


    export default App


