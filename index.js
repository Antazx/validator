const { fieldValidator } = require("./fieldValidator");
const { wholesaleValidationSchema, fields } = require("./WholesaleCustomer");

const wholesaleCustomer = {
  createdAt: "2019-09-30T18:42:55+02:00",
  data: "ACHEGATEC S.L.",
  data3: "2019-09-30T18:42:55+02:00",
  data4: "Created",
  data5: "B27340801",
  latestVersion: 1,
  pk: "WHOLESALECUSTOMER|gcaV3DE1AK1LAV1YupZcZT",
  sk: "v0|WHOLESALECUSTOMER",
  state: "Created",
  stateDate: "2019-09-30T18:42:55+02:00",
  supportContactEmail: "oscarbello@rekire.com",
  supportContactFax: null,
  supportContactPerson: "Óscar Bello Martínez",
  supportContactPhone: "653141596",
  version: 0,
  versionDate: "2019-09-30T18:42:55+02:00",
  wholesaleCustomerDataAddressAdditionalInfo:
    "Viveiro de Empresas, Pazo de Feiras E Congresos de Lugo",
  wholesaleCustomerDataAddressCityId: "1227028",
  wholesaleCustomerDataAddressPostalCode: "27004",
  wholesaleCustomerDataAddressProvinceId: "27",
  wholesaleCustomerDataAddressStreetName: "El Palomar",
  wholesaleCustomerDataAddressStreetNumber: "S/N",
  wholesaleCustomerDataAddressStreetType: "Calle",
  wholesaleCustomerDataAllowsSendingCommunications: false,
  wholesaleCustomerDataAllowsSendingEmail: false,
  wholesaleCustomerDataAllowsSendingSMS: false,
  wholesaleCustomerDataAllowsSendingThirdPartyCampaigns: false,
  wholesaleCustomerDataAllowsSendingThirdPartyCommunications: false,
  wholesaleCustomerDataBirthDate: null,
  wholesaleCustomerDataCompanyName: "ACHEGATEC S.L.",
  wholesaleCustomerDataContactPhone: "653141596",
  wholesaleCustomerDataEmail: "telefonia@rekire.com",
  wholesaleCustomerDataFiscalId: "B27340801",
  wholesaleCustomerDataFiscalIdType: "CIF",
  wholesaleCustomerDataGender: "Male",
  wholesaleCustomerDataLanguage: "spa",
  wholesaleCustomerDataNationality: "724",
  wholesaleCustomerDataSegment: "Company",
  wholesaleCustomerDataSurname1: null,
  wholesaleCustomerDataSurname2: null,
  wholesaleCustomerDetailedInvoice: false,
  wholesaleCustomerId: "gcaV3DE1AK1LAV1YupZcZT",
  wholesaleCustomerInvoiceId: null,
  wholesaleCustomerName: "ACHEGATEC S.L.",
};

console.log(fieldValidator(wholesaleValidationSchema, wholesaleCustomer));
