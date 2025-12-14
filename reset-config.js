const ElectronStore = require('electron-store');

// Create a new config store to clear any existing settings
const configStore = new ElectronStore({
  name: 'youtube-tv-config',
  defaults: {
    window: {
      width: 1280,
      height: 720,
      fullscreen: true
    },
    features: {
      enableAdBlock: true,
      enableSponsorBlock: true,
      sponsorBlockManualSkips: ['intro', 'outro', 'filler'],
      enableSponsorBlockSponsor: true,
      enableSponsorBlockIntro: true,
      enableSponsorBlockOutro: true,
      enableSponsorBlockInteraction: true,
      enableSponsorBlockSelfPromo: true,
      enableSponsorBlockPreview: true,
      enableSponsorBlockMusicOfftopic: true,
      enableSponsorBlockFiller: false,
      enableDeArrow: true,
      enableDeArrowThumbnails: false,
      preferredVideoQuality: 'auto',
      videoPreferredCodec: 'vp9',
      enableChapters: true,
      enableLongPress: true,
      enableShorts: true,
      enablePreviews: true,
      enableHideWatchedVideos: false,
      hideWatchedVideosThreshold: 80,
      hideWatchedVideosPages: [],
      enableHideEndScreenCards: false,
      enableYouThereRenderer: true,
      enablePaidPromotionOverlay: true
    }
  }
});

// Force reset to defaults
configStore.store = configStore.defaults;
configStore.set(configStore.defaults);

console.log('Configuration reset to defaults. Fullscreen is now enabled by default.');
