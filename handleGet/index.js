const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
});

const personModel = dynamoose.model('people-db', personSchema);

exports.handler = async(event) => {
  
  const response = {statusCode: null, body: null};

  try {
    
    let personRecords = await personModel.scan().exec();
    response.statusCode = 200;
    response.body = JSON.stringify(personRecords);

  } catch (err) {
    console.log(err);
    response.statusCode = 500;
    response.body = JSON.stringify(err.message);
  }
  return response;
};