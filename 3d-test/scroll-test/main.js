const registerVideo = (bound, video) => {
  bound = document.querySelector(bound);
  video = document.querySelector(video);
  const scrollVideo = () => {
    if (video.duration) {
      const distanceFromTop =
        window.scrollY + bound.getBoundingClientRect().top;
      const rawPercentScrolled =
        (window.scrollY - distanceFromTop) /
        (bound.scrollHeight - window.innerHeight);
      const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

      video.currentTime = video.duration * percentScrolled;
    }
    requestAnimationFrame(scrollVideo);
  };
  requestAnimationFrame(scrollVideo);
};

registerVideo("#bound-one", "#bound-one video");

registerVideo("#bound-two", "#bound-two video");

registerVideo("#bound-three", "#bound-three video");
