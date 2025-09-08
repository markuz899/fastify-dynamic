const services = [
  // {
  //   name: "prima-insurance",
  //   loginUrl: "http://localhost:3000/api/v1/login/prima-insurance",
  //   dataUrl: "http://localhost:3000/api/v1/quote/prima-insurance",
  //   credentials: {
  //     loginData: {
  //       username: "f.digiacomo@assicurapoint.it",
  //       password: "Catania2023@",
  //     },
  //   },
  //   buildPayload: (payload) => ({
  //     formData: {
  //       type: "Auto",
  //       plate: "ed096es",
  //       birthdate: "1989-07-06",
  //       effectiveDate: "2025-07-30",
  //       purchaseMonth: "10",
  //       purchaseYear: "2018",
  //       power: "86",
  //       displacement: 1,
  //       kmYear: 1,
  //       gender: "MALE",
  //       firstname: "Marco",
  //       lastname: "Rossi",
  //       nation: "Italia",
  //       city: "Roma",
  //       fiscalCode: "",
  //       residenceCity: "Campagnano di roma",
  //       residenceAddress: "Via filippo turati",
  //       residenceCivic: "5",
  //       profession: "IMPIEGATO_QUADRO_DIRIGENTE",
  //       maritalStatus: "SINGLE",
  //       licenseYear: "2010",
  //       class: 1,
  //       email: "marco.89@hotmail.it",
  //       phone: "3880000009",
  //       privacy: true,
  //     },
  //   }),
  // },
  {
    name: "allianz-insurance",
    loginUrl: "http://localhost:3000/api/v1/login/allianz-insurance",
    dataUrl: "http://localhost:3000/api/v1/quote/allianz-insurance",
    credentials: {
      loginData: {
        username: "AMRBARTOLOZZI",
        password: "Autunno25!",
      },
    },
    buildPayload: (payload) => ({
      formData: {
        client: payload.client,
        segment: payload.segment,
        loadLocationsFromExistingPolicy:
          payload.loadLocationsFromExistingPolicy,
        insuredType: payload.insuredType,
        temporaryPolicy: payload.temporaryPolicy,
        previousClaimsInLastThreeYears: payload.previousClaimsInLastThreeYears,
        otherCoverageForSameRisk: payload.otherCoverageForSameRisk,
        repeatOtherCoverageForSameRisk: payload.repeatOtherCoverageForSameRisk,
        businessRegistryEnrollment: payload.businessRegistryEnrollment,
        ...payload,
      },
    }),
  },
];

module.exports = { services };
