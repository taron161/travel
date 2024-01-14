const VIDEO = {
  url: 'https://www.youtube.com/embed/9TZXsZItgdw',
  title: 'Бесплатные интерактивные онлайн-курсы',
};

const container = document.querySelector('[data-video="video"]');
const preview = document.querySelector('[data-video="preview"]');
const playBtn = document.querySelector('[data-video="btn"]');

const showPlayBnt = () => {
  container.classList.add('is-enabled');
};

const createIframe = (parent, {url, title}) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `${url}?autoplay=1`);
  iframe.setAttribute('title', title);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('allowfullscreen', true);
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  parent.append(iframe);
};

const playVideo = () => {
  if (playBtn) {
    showPlayBnt();

    playBtn.addEventListener('click', () => {
      preview.remove();
      playBtn.remove();
      createIframe(container, VIDEO);
    });
  }
};

export {playVideo};
