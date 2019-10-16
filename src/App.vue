<template>
  <div class="container">
    <SearchBar @termChange="onTermChange">Search your favorite videos</SearchBar>
    <div class="row">
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
      <VideoDetail :video="selectedVideo" /> 
    </div>
    <div>
      <google-map />
    </div>
    <div>
      <Toolbar />
      <Editor />
      <NoteList />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import GoogleMap from './components/GoogleMap';
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import Editor from './components/Editor';
const YOU_API_KEY = 'AIzaSyDUWFfOKWJZoO6LT25wPGk5P5J3dYc6eSY';

export default {
  name: 'app',
  components: {
    SearchBar ,
    VideoList,
    VideoDetail,
    GoogleMap,
    Toolbar,
    NoteList,
    Editor
  },
    data: function() {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
    onTermChange: function(searchTerm) {

      axios.get('https://www.googleapis.com/youtube/v3/search',{
        params: {
          key: YOU_API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items
      });
    }
  }
}
</script>
