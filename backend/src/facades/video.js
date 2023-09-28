class VideoFacade {
  constructor() {
    this.videos();
  }

  videos() {
    this.linkVideos = [
      { link: 'https://www.youtube.com/embed/VXzPicGH5sU?autoplay=1&mute=1' },
      { link: 'https://www.youtube.com/embed/cvbWvtSsAC0?autoplay=1&mute=1' },
      { link: 'https://www.youtube.com/embed/gDHHuL3mv-U?autoplay=1&mute=1' },
      { link: 'https://www.youtube.com/embed/X0u9iezWJOo?autoplay=1&mute=1' },
    ];
    return this.linkVideos;
  }

  getAllVideos() {
    const response = this.linkVideos;
    return response;
  }
}

module.exports = VideoFacade;
