const { client } = require('./connection.js');
const Promise = require('bluebird');


const queryAllString = 'SELECT * FROM sellers t1 INNER JOIN products t2 on \
  t1._seller_id = t2.seller_id'

const queryOneString = 'SELECT * FROM sellers t1 INNER JOIN products t2 ON \
  t1._seller_id = t2.seller_id AND t2._product_id = $1'

const queryPhotosString = 'SELECT * FROM photos WHERE product_id = $1';

const queryPhotos = (productId) => {
  return client.query(queryPhotosString, [productId]);
};

const queryAll = async (res) => {
  var responseData = null;
  try {
    var tempResult = await client.query(queryAllString);
    tempResult = tempResult.rows;
  } catch (err) {
    console.log('error querying for all records');
    res.status(500).send(err);
    //throw(err);
  }
  responseData = tempResult;
  var photoResults = {};
  //console.log('tempResult: ', tempResult);
  for (let i = 0; i < tempResult.length; i++) {
    let tempProdId = tempResult[i]._product_id;
    photoResults[tempProdId] = queryPhotos(tempProdId);     
    //console.log(photoResults); 
  }
  Promise.props(photoResults)
    .then ( (data) => {
      //console.log('results from photo query: ', data[1]);
      for (let prod of responseData) {
       // console.log('adding images: ', data[prod._product_id].rows);
        let urls = data[prod._product_id].rows.map( (entry) => {
          return entry.url;
        })
        prod.images = urls;
      }
      //console.log("finished responseData: ", responseData);
      res.send(responseData);
    })
    .catch( (err) => {
      res.status(500).send(err);
      //throw (err);
    })

  //return responseData;
};

const queryOne = async (prodId, res) => {
  var responseData = null;
  try {
    var tempResult = await client.query(queryOneString, [prodId]);
    tempResult = tempResult.rows;
  } catch (err) {
    console.log('error querying for one record: ', err);
    res.status(500).send(err);
    //throw(err);
  }
  responseData = tempResult;
  var photoResults = {};
  //console.log('tempResult: ', tempResult);
  for (let i = 0; i < tempResult.length; i++) {
    let tempProdId = tempResult[i]._product_id;
    photoResults[tempProdId] = queryPhotos(tempProdId);     
    //console.log(photoResults); 
  }
  Promise.props(photoResults)
    .then ( (data) => {
      //console.log('results from photo query: ', data[1]);
      for (let prod of responseData) {
       // console.log('adding images: ', data[prod._product_id].rows);
        let urls = data[prod._product_id].rows.map( (entry) => {
          return entry.url;
        })
        prod.images = urls;
      }
      //console.log("finished responseData: ", responseData);
      res.send(responseData);
    })
    .catch( (err) => {
      res.status(500).send(err);
      //throw (err);
    })

  //return responseData;
};








module.exports = {
  queryAll,
  queryOne
}

/*
select t1.name, t2.image_id, t3.path
from table1 t1 inner join table2 t2 on t1.person_id = t2.person_id
inner join table3 t3 on t2.image_id=t3.image_id
*/
