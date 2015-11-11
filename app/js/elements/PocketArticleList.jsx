import React, { PropTypes } from 'react';
import url from 'url';
import moment from 'moment';

function PinboardBookmarkList({ articles }) {
  const dateTimeFormat = 'MMMM D, YYYY @ h:mm a';
  const articleNodes = articles.map(article => {
    const articleHost = url.parse(article.resolved_url).host;
    const relativeDateTime = moment.unix(article.time_read).fromNow();
    const formattedDateTime = moment.unix(article.time_read).format(dateTimeFormat);
    const displayedTitle = article.resolved_title || article.given_title || article.resolved_url;
    const formattedTitle = displayedTitle.length > 50 ? displayedTitle.slice(0, 47) + '...' : displayedTitle;
    return (
      <li>
        <a href={article.resolved_url} title={displayedTitle}>
          {formattedTitle} | {articleHost}
        </a>&nbsp;
        <small><abbr title={formattedDateTime}>{relativeDateTime}</abbr></small>
      </li>
    );
  });

  return (
    <ul id="pocketArticles" className="list-unstyled">
      {articleNodes}
    </ul>
  );
}

PinboardBookmarkList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    resolved_url: PropTypes.string,
    resolved_title: PropTypes.string,
    time_read: PropTypes.number // Unix timestamp
  })).isRequired
};

export default PinboardBookmarkList;
