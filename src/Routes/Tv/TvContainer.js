import React from "react";
import TvPresenter from "./TvPresenter.js";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
};

  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    return (
      <TvPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}