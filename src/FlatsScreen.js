import { Container } from '@material-ui/core';
import React from 'react';
import FlatList from './FlatList';

export default ({flats}) => (
    <Container fixed>
        <FlatList flats={flats} />
    </Container>
);
