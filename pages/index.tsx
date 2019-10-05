import _ from 'lodash';
import SiteBar from '../src/SiteBar';
import { Component } from 'react';

export default class IndexPage extends Component {
    static async getInitialProps() {
        return {};
    }
    render() {
        return (
            <>
                <SiteBar />
                Hello world
            </>
        );
    }
}
