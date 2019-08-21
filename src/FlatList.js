import React from 'react';
import { Grid } from '@material-ui/core';
import FlatCard from './FlatCard';

export default ({ flats }) => (
    <Grid container spacing={2}>
        {flats.map(flat => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <FlatCard {...flat} />
            </Grid>
        ))}
    </Grid>
);
