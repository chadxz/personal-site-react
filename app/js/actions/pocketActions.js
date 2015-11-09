import config from '../config';

export default {
  fetchArticles() {
    const bookmarksUrl = `${config.apiUrl}/pocket?limit=5`;
    return fetch(bookmarksUrl, {
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
