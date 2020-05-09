import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

res.send({v: 1})

bootstrap(config).catch(err => {
    console.log(err);
});
