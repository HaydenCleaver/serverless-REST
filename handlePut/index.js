const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
});

const personModel = dynamoose.model('people-db', personSchema);

exports.handler = async(event) => {

  let parsedBody = JSON.parse(event.body);

  let {id, name} = parsedBody;

  let person = {id, name};

  const response = {statusCode: null, body: null};

  try {
    let query = event.queryStringParameters.id;
    let personRecord = await personModel.update({"id": query}, {"name":person.name})
    console.log(query);
    response.statusCode = 200;
    response.body = JSON.stringify(personRecord);
  } catch (err) {
    console.log(err);
    response.statusCode = 500;
    response.body = JSON.stringify(err.message);
  }
  return response;
}