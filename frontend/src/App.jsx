import { useEffect, useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllVideos();
    window.removeEventListener('keydown', handleKeydown);
  }, [index]);

  const getAllVideos = () => {
    fetch('http://localhost:3030/api/videos')
      .then((response) => response.json())
      .then((allVideos) => {
        const response = allVideos;
        const data = response ? response : [];
        setVideos(data);
      });
  };

  const showVideo = () => {
    return videos[index].link;
  };

  const nextVideo = () => {
    if (index >= videos.length - 1) {
      setIndex(videos.length - 1);
    } else {
      setIndex(index + 1);
    }

    getAllVideos();
  };

  const backVideo = () => {
    if (index <= 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }

    getAllVideos();
  };

  const handleKeydown = (event) => {
    if (event.key === 'ArrowRight' && index < videos.length - 1) {
      nextVideo();
    } else if (event.key === 'ArrowLeft' && index > 0) {
      backVideo();
    }
  };

  window.addEventListener('keydown', handleKeydown);

  return (
    <div>
      <div className="view">
        <iframe
          id="video"
          width="100%"
          height="100%"
          src={videos.length > 0 ? showVideo() : console.log('Carregando video...')}
          allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="buttons">
        {index > 0 && (
          <button id="btnBack" onClick={backVideo} className="back">
            Back
          </button>
        )}

        {index < videos.length - 1 && (
          <button id="btnNext" onClick={nextVideo} className="go">
            Go
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
