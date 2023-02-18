let episodeName=document.getElementById("video-name").textContent.trim();
let episodeNum=document.getElementById("video-num").textContent.trim();
let episodeId=episodeName+"-episode-"+episodeNum;
let proxy = "https://cors.consumet.stream/";
var videoSrc = "";
let AnimeName =document.getElementById('animeLink')
AnimeName.href = "/anime-details/"+episodeName;
function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.once('url', () => hls.destroy());
    art.once('destroy', () => hls.destroy());
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
  } else {
    art.notice.show = 'Unsupported playback format: m3u8';
  }
}
fetch(proxy+"https://gogoanime.consumet.stream/vidcdn/watch/"+episodeId)
  .then(response => response.json())
  .then(animePlayLinks => {
    console.log(animePlayLinks);
    videoSrc = `${proxy+ animePlayLinks.sources[0].file}`;
    const art = new Artplayer({
      container: '.artplayer-app',
      url: videoSrc,
      type: 'm3u8',
      // isLive: true,
      playbackRate: true,
      setting: true,
      hotkey: true,
      pip: true,
      autoOrientation: true,
      fastForward: true,
      lock: true,
      fullscreen: true,
      // fullscreenWeb: true,
      customType: {
        m3u8: playM3u8,
      },
      // quality: [
      //   {
      //       default: true,
      //       html: 'SD 480P',
      //       url: '/assets/sample/video.mp4',
      //   },
      //   {
      //       html: 'HD 720P',
      //       url: '/assets/sample/video.mp4',
      //   },
      // ],

      // subtitle: {
      //   url: '/assets/sample/subtitle.srt',
      //   type: 'srt',
      //   encoding: 'utf-8',
      //   escape: true,
      //   style: {
      //       color: '#03A9F4',
      //       'font-size': '30px',
      //   },
      // },
    });
  });
  fetch(proxy+"https://gogoanime.consumet.stream/anime-details/"+episodeName)
  .then((response) => response.json())
  .then((animelist) => {
    let num = parseInt(animelist.totalEpisodes, 10);
    let episodeNumber = parseInt(episodeNum,10)
    let prev = document.getElementById('prev')
    let next = document.getElementById('next')
    if (num ===episodeNumber ) {
      prev.href = '/'+episodeName+'/'+`${episodeNumber-1}`
      next.style.backgroundColor = 'rgb(114, 20, 201)';
    }
    else{
      prev.href = '/'+episodeName+'/'+`${episodeNumber-1}`
      next.href = '/'+episodeName+'/'+`${episodeNumber+1}`
    }
  });
  