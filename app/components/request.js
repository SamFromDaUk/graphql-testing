import fs from 'fs';

const user = fs.readFileSync('sample-data/user.json', 'utf8');
const address = fs.readFileSync('sample-data/address.json', 'utf8');
const messages = fs.readFileSync('sample-data/messages.json', 'utf8');

const data = {
  user: JSON.parse(user),
  address: JSON.parse(address),
  messages: JSON.parse(messages)
};

export default async (path, params) => {
  const result = data[path];

  if (params) {
    return result.filter((item) => {
      let match = false;

      Object.keys(params).forEach((key) => {
        if (item[key] === params[key]) {
          match = true;
        } else {
          match = false;
        }
      });

      return match;
    });
  }

  return data[path];
};
