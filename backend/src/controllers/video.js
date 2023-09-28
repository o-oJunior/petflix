const VideoFacade = require('../facades/video');

const videoFacade = new VideoFacade();

exports.getAllVideos = (req, res) => {
  const response = videoFacade.getAllVideos();
  res.status(200).send(response);
};
