
import "./App.css";
// import components
import Header from "./components/Component/Header";
import VideosList from "./components/Component/VideosList";
// import CommentsList from "./components/Component/CommentsList";

// import video data
import videosData from "./data/video-details.json";

function App() {
  return (
    <div className="App">
      <Header />
      <VideosList videos={videosData} />
      {/* <CommentsList videos={videosData} /> */}
    </div>
  );
}

export default App;
