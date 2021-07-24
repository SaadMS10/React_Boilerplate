import { handleErrors } from '../server';
import { randomBytes } from 'crypto';

const generateToken = () => randomBytes(8).toString('hex');



const login = (schema, req) => {
  const { username, password } = JSON.parse(req.requestBody);
  const user = schema.users.findBy({ username });
  if (!user) {
    return handleErrors(null, 'No user with that username exists');
  }
  if (password !== user.password) {
    return handleErrors(null, 'Password is incorrect');
  }
  const token = generateToken();
  return {
    user: user.attrs,
    token,
  };
};

const signup = (schema, req) => {
  const data = JSON.parse(req.requestBody);
  const exUser = schema.users.findBy({ username: data.username });
  if (exUser) {
    return handleErrors(null, 'A user with that username already exists.');
  }
  const user = schema.users.create(data);
  const token = generateToken();
  return {
    user: user.attrs,
    token,
  };
};

export default {
  login,
  signup,
};
