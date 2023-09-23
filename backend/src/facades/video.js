class VideoFacade {
  constructor() {
    this.videos();
  }

  videos() {
    this.linkVideos = [
      { link: 'https://www.youtube.com/embed/VXzPicGH5sU?si=MFF5hJOLxxR6-wfW' },
      { link: 'https://www.youtube.com/embed/cvbWvtSsAC0?si=UzHxScztWWp0OL8w' },
      { link: 'https://www.youtube.com/embed/gDHHuL3mv-U?si=gLiLOafebpzJCaXa' },
      { link: 'https://www.youtube.com/embed/X0u9iezWJOo?si=OOPFcUnBJv1ulQFo' },
    ];
    return this.linkVideos;
  }

  getAllVideos() {
    const response = this.linkVideos;
    return response;
  }
}

module.exports = VideoFacade;
