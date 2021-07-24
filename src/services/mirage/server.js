import { Server, Model, Factory, belongsTo, hasMany, Response } from 'miragejs';
import user from './routes/user';
export const handleErrors = (error, message = 'An error ocurred') => {
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

export const setupServer = (env) => {
  return new Server({
    environment: env ?? 'development',

    models: {
      entry: Model.extend({
        cart: belongsTo(),
      }),
      cart: Model.extend({
        entry: hasMany(),
        user: belongsTo(),
      }),
      user: Model.extend({
        cart: hasMany(),
      }),
    },

    factories: {
      user: Factory.extend({
        username: 'test',
        password: 'password',
        email: 'test@email.com',
      }),
    },

    seeds: (server) => {
      server.create('user');
    },

    routes() {
      this.urlPrefix = 'https://saadecommerce.app';
      this.post('/auth/login', user.login);
      this.post('/auth/signup', user.signup);

    },
  });
};
