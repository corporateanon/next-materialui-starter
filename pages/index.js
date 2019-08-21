import _ from 'lodash';
import SiteBar from '../src/SiteBar';
import { Component } from 'react';
import FlatsScreen from '../src/FlatsScreen';

const lipsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et scelerisque orci, sed feugiat diam. Curabitur non commodo mauris, commodo luctus ex';
const fakeFlats = _.range(0, 20).map(i => ({
    title: `Flat #${i}`,
    description: lipsum
}));

export default class IndexPage extends Component {
    static async getInitialProps() {
        return {
            flats: fakeFlats
        };
    }
    render() {
        const {
            props: { flats }
        } = this;

        console.log(flats);
        return (
            <>
                <SiteBar />
                <FlatsScreen flats={flats} />
            </>
        );
    }
}
