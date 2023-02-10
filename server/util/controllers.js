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

    //switch to double opt in -- make template for double opt in, use https://developers.sendinblue.com/reference/createdoicontact for reference.
    // let createContact = new SibApiV3Sdk.CreateContact();
    // createContact.email = email;
    // createContact.listIds = [8];

    // apiInstance.createContact(createContact).then(
    //   (data) => {
    //     console.log("API called successfully. data: " + JSON.stringify(data));
    //     res.status(200).send("success");
    //   },
    //   function (error) {
    //     console.log("error in API call " + error);
    //     res.sendStatus(400);
    //   }
    // );

    /******* double opt in **********/

    let createDoiContact = new SibApiV3Sdk.CreateDoiContact();

    createDoiContact.email = email;
    createDoiContact.includeListIds = [8];
    createDoiContact.templateId = 3;
    createDoiContact.redirectionUrl = "https://www.facebook.com";

    apiInstance.createDoiContact(createDoiContact).then(
      function (data) {
        console.log("API called successfully. Data: " + JSON.stringify(data));
        res.status(200).send("success");
      },
      function (error) {
        console.error("error in API call ", error);
        res.sendStatus(400);
      }
    );
  },
};

/// smtp key = xsmtpsib-d365ce9268b6a75df6502fd2eab9eb5925d1ee83e3a8fc7d4456f92765220fbc-3czZn29kPD7vIa0y
