class VideoFacade {
  constructor() {
    this.videos();
  }

  videos() {
    this.linkVideos = [
      { video: 'https://www.youtube.com/embed/VXzPicGH5sU?si=MFF5hJOLxxR6-wfW' },
      { video: 'https://www.youtube.com/embed/cvbWvtSsAC0?si=UzHxScztWWp0OL8w' },
      { video: 'https://www.youtube.com/embed/gDHHuL3mv-U?si=gLiLOafebpzJCaXa' },
      { video: 'https://www.youtube.com/embed/X0u9iezWJOo?si=OOPFcUnBJv1ulQFo' },
    ];
    return this.linkVideos;
  }

  getAllVideos() {
    const response = this.linkVideos;
    return response;
  }
}

module.exports = VideoFacade;
