const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
});

const peopleModel = dynamoose.model('people-db', peopleSchema);

exports.handler = async (event) => {

  let parsedBody = JSON.parse(event.body);

  let {id, name} = parsedBody;

  let person = {id, name};

  const response = {statusCode: null, body: null};

  try {
    let newPerson = await peopleModel.create(person);
    response.statusCode = 200;
    response.body = JSON.stringify(newPerson);
  } catch (err) {
    console.log(err);
    response.statusCode = 500;
    response.body = JSON.stringify(err.message);
  }
  return response;
}