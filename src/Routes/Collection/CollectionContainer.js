import React from 'react';
import CollectionPresenter from './CollectionPresenter.js';
import { collectionApi } from "../../api";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        const { result : { id } } = this.props;
        const parsedId = parseInt(id);
        let result = null;
        try {
            ({ data: result } = await collectionApi.collectionDetail(parsedId));
        } catch {
            this.setState({ error: "Can't find anything." });
        } finally {
            this.setState({ loading: false, result });
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return <CollectionPresenter result={result} error={error} loading={loading} />;
    }
}