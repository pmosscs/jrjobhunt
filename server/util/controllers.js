require("dotenv").config();
const SibApiV3Sdk = require("sib-api-v3-sdk");

const { API_KEY } = process.env;

module.exports = {
  addUser: (req, res) => {
    const { email } = req.body;

    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = API_KEY;
    let apiInstance = new SibApiV3Sdk.ContactsApi();
    let createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [8];

    apiInstance.createContact(createContact).then(
      (data) => {
        console.log("API called successfully. data: " + JSON.stringify(data));
        res.status(200).send("success");
      },
      function (error) {
        console.log("error in API call " + error);
        res.sendStatus(400);
      }
    );
  },
};
