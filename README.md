# vendure-shop-review-project-laboratory-backend

This project was created as an assignment to subject [project laboratory](https://www.aut.bme.hu/en/Education/BScInfo/Onlab) at Budapest University of Technology and Economics. It demonstrates an extended [Vendure](https://www.vendure.io/) server setup. It was generated with [`@vendure/create`](https://github.com/vendure-ecommerce/vendure/tree/master/packages/create), but adds extra tooling and includes some example real-world plugins which also have been modified.

The project also has a [frontend](https://github.com/Csumber/shop-reviews-frontend).

## Getting Started

1. Clone this repo
2. `yarn` to install dependencies
3. `yarn migration:run` to apply the latest changes to the database schema
4. `yarn start` to run

Please note, that this project will not work with `npm` commands, only with `yarn`!

## Tooling

### [eslint](https://eslint.org/) & [Prettier](https://prettier.io/)
These are tools for finding and fixing common code issues and formatting your code in a standard way. Run `yarn lint:fix` to lint and format your code.

### [jest](https://jestjs.io/) & [ts-jest](https://github.com/kulshekhar/ts-jest)
Jest is a testing framework used in the plugin end-to-end tests. Ts-jest allows Jest to work directly with TypeScript files without requiring a compilation step.

Jest tests for the reviews plugin are run with `yarn e2e:reviews`

### [graphql-code-generator](https://graphql-code-generator.com/)
This is used to generate TypeScript types based on the Vendure server's GraphQL APIs. It is used to automatically generate correct types for plugin resolvers and plugin e2e tests. This ensures that whenever a schema is changed or a CustomField added, new typings can be generated to make sure your resolvers and tests are correct. 

Whenever a change to the GraphQL API is made either by a plugin schema extension or by the definition of CustomFields, run `yarn generate-types` to update the TypeScript definitions.

## Plugins

### Reviews Plugin

This plugin adds the capability for customers to create product reviews which can then be used to display product ratings.

The plugin showcases several advanced capabilities of the Vendure plugin system. See the [reviews plugin readme](./src/plugins/reviews/README.md) for more information.


## Directory structure

* `/src` contains the source code of your Vendure server. All your custom code and plugins should reside here.
* `/static` contains static (non-code) files such as assets (e.g. uploaded images) and email templates.
* `/migrations` contains database migration scripts (see migrations section below).

## Development

```
yarn start
```

will start the Vendure server and [worker](https://www.vendure.io/docs/developer-guide/vendure-worker/) processes from the `src` directory. Note - the first time you run this the custom UI extensions of the reviews plugin will be compiled which may take a few minutes. Subsequent runs will be significantly faster (providing the UI extensions of the reviews plugin do not change).

## Build

```
yarn build
```

will compile the TypeScript sources into the `/dist` directory and copy over the admin UI extension sources to the correct locations.

## Migrations

[Migrations](https://www.vendure.io/docs/developer-guide/migrations/) allow safe updates to the database schema.

The following npm scripts can be used to generate migrations:

```
yarn migration:generate [name]
```

run any pending migrations that have been generated:

```
yarn migration:run
```

and revert the most recently-applied migration:

```
yarn migration:revert
```
