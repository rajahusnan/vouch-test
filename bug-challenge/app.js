const Replacer = require('./utils/Replacer')
const SaveJSON = require('./utils/SaveJSON')
const TextLoader = require('./utils/TextLoader')
const JSONLoader = require('./utils/JSONLoader')
const fs = require('fs');


module.exports = (sample_text, sample_data, result_path) => {
    const data = require(sample_data)

    //var filter_list =data.title;

  //  filter_list = filter_list.toString().replace(/a/, '');
  //  console.log(filter_list)
  
  
    const sample_string = TextLoader(sample_text)

    const processed_string = Replacer(sample_string, data)
    const save_path = __dirname + '/' + result_path

    SaveJSON(save_path, `{ "processed": "${ processed_string }" }`)

    const processed_json = JSONLoader(save_path)
    return processed_json
}