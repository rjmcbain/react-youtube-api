import React, { Component } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async searchTerm => {
    // console.log(searchTerm);
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("FROM THE APP: ", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        {/* I have{this.state.videos.length} videos. */}
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
