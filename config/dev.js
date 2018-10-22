require('dotenv').config()

module.exports = {
  googleClientID:
    '964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com',
  googleClientSecret: 'KnH-rZC23z4fr2CN4ISK4srN',
  mongoURI: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds139193.mlab.com:39193/blog_dev`,
  cookieKey: '123123123'
};
