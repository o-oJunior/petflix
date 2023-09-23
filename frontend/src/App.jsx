function App() {
  return (
    <div>
      <div className="view">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/cvbWvtSsAC0?si=UzHxScztWWp0OL8w"
          title="YouTube video player"
          frameborder="0"
          allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="buttons">
        <div>
          <button className="back">Back</button>
        </div>

        <div>
          <button className="go">Go</button>
        </div>
      </div>
    </div>
  );
}

export default App;
