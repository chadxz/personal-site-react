import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import PocketArticleList from './PocketArticleList';

function LastfmWidget({ articles }) {
  const displayed = articles.length ?
    <PocketArticleList articles={articles} /> :
    <LoadingIndicator />;

  return (
    <div className="panel panel-default">
      <div className="panel-heading text-center">Recently read articles on Pocket</div>
      <div id="articleList" className="panel-body pocket-article-list">
        {displayed}
        <em>Viewing all my read articles isn't available at this time.</em>
      </div>
    </div>
  );
}

LastfmWidget.propTypes = {
  articles: PocketArticleList.propTypes.articles
};

LastfmWidget.defaultProps = {
  articles: []
};

export default LastfmWidget;
