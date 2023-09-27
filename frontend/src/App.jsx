import { useEffect, useRef, useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const index = useRef(0);

  useEffect(() => {
    getAllVideos();
  }, []);

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
    const btnNext = document.getElementById('btnNext');
    if (index.current >= videos.length - 1) {
      btnNext.style.visibility = 'hidden';
    } else {
      btnNext.style.visibility = 'visible';
    }

    const btnBack = document.getElementById('btnBack');
    if (index.current <= 0) {
      btnBack.style.visibility = 'hidden';
    } else {
      btnBack.style.visibility = 'visible';
    }

    return videos[index.current].link;
  };

  const nextVideo = () => {
    if (index.current >= videos.length - 1) {
      index.current = videos.length - 1;
    } else {
      index.current = index.current + 1;
    }

    getAllVideos();
  };

  const backVideo = () => {
    if (index.current <= 0) {
      index.current = 0;
    } else {
      index.current = index.current - 1;
    }

    getAllVideos();
  };

  return (
    <div>
      <div className="view">
        <iframe
          width="100%"
          height="100%"
          src={videos.length > 0 ? showVideo() : console.log('Carregando video...')}
          allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="buttons">
        <div id="btnBack">
          <button onClick={backVideo} className="back">
            Back
          </button>
        </div>

        <div id="btnNext">
          <button onClick={nextVideo} className="go">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
