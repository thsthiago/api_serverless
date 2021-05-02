const { MongoClient } = require('mongodb')

const config = {
  url: 'mongodb+srv://nomeAdmin:senhaAdmin@cluster0.1vopd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  dbName: 'api_serveless'
}

module.exports = () => new Promise((resolve, reject) => {
  MongoClient
    .connect(config.url, { useNewUrlParser: true }, (err, mongoConnection) =>
      err
      ? reject(err)
      : resolve({
          client: mongoConnection.db(config.dbName),
          closeConnectionFn: () => setTimeout(() => {
            mongoConnection.close();
          }, 1000),
          mongoConnection,
        })
    );
});
