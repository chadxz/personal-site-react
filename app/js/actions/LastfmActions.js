import config from '../config';

export default {
  fetchTracks() {
    const tracksUrl = `${config.apiUrl}/lastfm?limit=5`;
    return fetch(tracksUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
  }
};
