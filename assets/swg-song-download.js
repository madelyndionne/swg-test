/* SWG song pages: downloads are handled exclusively through My Playlist. */
(function () {
  'use strict';
  function init() {
    const audio = document.querySelector('audio#listen');
    if (!audio) return;
    document.querySelectorAll('.swg-song-download-wrap').forEach(el => el.remove());
    document.querySelectorAll('a, button').forEach(el => {
      if (el.closest('nav, header, footer, #playlistPanel')) return;
      if (/^\s*[↓⬇]?\s*Download Song\s*$/i.test(el.textContent || '')) el.remove();
    });
    if (document.querySelector('.swg-playlist-download-instruction')) return;
    const note = document.createElement('p');
    note.className = 'swg-playlist-download-instruction';
    note.textContent = 'To download this song: Add it to My Playlist, open the playlist, select the song, and click Download Song. The Free Use Agreement will appear before downloading.';
    note.style.cssText = 'text-align:center;max-width:42rem;margin:10px auto 24px;line-height:1.5;font-size:1rem;';
    audio.insertAdjacentElement('afterend', note);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
