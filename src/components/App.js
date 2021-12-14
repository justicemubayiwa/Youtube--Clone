import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

const App=()=> {
    
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(()=>{
        onTermSubmit('cars')
    },[])



    const onTermSubmit = async term => {   
        const response = await youtube.get('/search', {
            params: { 
                q: term
            }
        }) 

        setSelectedVideo(response.data.items[0])
        setVideos(response.data.items)
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
      };

   
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                onVideoSelect={onVideoSelect} 
                                videos={videos} 
                            />
                        </div>  
                    </div>
                </div>   
            </div>
        )
    }

    export default App


