const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
});

const personModel = dynamoose.model('people-db', personSchema);

exports.handler = async(event) => {

  const response = {statusCode: null, body: null};

  try {
    let query = event.queryStringParameters.id;
    let personRecord = await personModel.delete({"id": query})
    console.log(query);
    response.statusCode = 200;
    response.body = JSON.stringify(`Item ${query} deleted!`);
  } catch (err) {
    console.log(err);
    response.statusCode = 500;
    response.body = JSON.stringify(err.message);
  }
  return response;
}