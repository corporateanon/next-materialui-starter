import React from 'react';
import _ from 'lodash';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import FlatCard from '../src/FlatCard';
import FlatList from '../src/FlatList';
import { Container } from '@material-ui/core';

const lipsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et scelerisque orci, sed feugiat diam. Curabitur non commodo mauris, commodo luctus ex';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('FlatCard', module).add('simple', () => (
    <FlatCard title="Flat" description={lipsum} />
));

const flats = _.range(0, 20).map(i => ({
    title: `Flat #${i}`,
    description: lipsum
}));

storiesOf('FlatList', module).add('simple', () => <FlatList flats={flats} />);
