const { REQUIRED, TYPES } = require("./fieldValidator");

const wholesaleValidationSchema = {
    wholesaleCustomerId: TYPES.STRING,
    state: TYPES.STRING,
    stateDate: TYPES.STRING,
    createdAt: TYPES.STRING,
    version: TYPES.NUMBER,
    latestVersion: TYPES.NUMBER,
    versionDate: TYPES.STRING,
    wholesaleCustomerDataFiscalId: TYPES.STRING,
    wholesaleCustomerName: [TYPES.STRING, REQUIRED],
    wholesaleCustomerDataSurname1: TYPES.STRING,
    wholesaleCustomerDataSurname2: TYPES.STRING,
    wholesaleCustomerDataFiscalIdType: TYPES.STRING,
    wholesaleCustomerDataSegment: TYPES.STRING,
    wholesaleCustomerDataNationality: TYPES.STRING,
    wholesaleCustomerDataLanguage: TYPES.STRING,
    wholesaleCustomerDataBirthDate: TYPES.STRING,
    wholesaleCustomerDataCompanyName: TYPES.STRING,
    wholesaleCustomerDataAddressRegionId: TYPES.STRING,
    wholesaleCustomerDataAddressProvinceId: TYPES.STRING,
    wholesaleCustomerDataAddressCityId: TYPES.STRING,
    wholesaleCustomerDataAddressPostalCode: TYPES.STRING,
    wholesaleCustomerDataAddressStreetType: TYPES.STRING,
    wholesaleCustomerDataAddressStreetName: TYPES.STRING,
    wholesaleCustomerDataAddressStreetNumber: TYPES.STRING,
    wholesaleCustomerDataAddressAdditionalInfo: TYPES.STRING,
    wholesaleCustomerDataEmail: TYPES.STRING,
    wholesaleCustomerDataGender: TYPES.STRING,
    wholesaleCustomerDataContactPhone: TYPES.STRING,
    wholesaleCustomerDataAllowsSendingCommunications: TYPES.BOOLEAN,
    wholesaleCustomerDataAllowsSendingSMS: TYPES.BOOLEAN,
    wholesaleCustomerDataAllowsSendingEmail: TYPES.BOOLEAN,
    wholesaleCustomerDataAllowsSendingThirdPartyCommunications: TYPES.BOOLEAN,
    wholesaleCustomerDataAllowsSendingThirdPartyCampaigns: TYPES.BOOLEAN,
    wholesaleCustomerDetailedInvoice: TYPES.BOOLEAN,
    wholesaleCustomerInvoiceId: TYPES.STRING,
    wholesaleCustomerType: TYPES.STRING,	
    legalData: TYPES.STRING,
    url: TYPES.STRING,
    supportContactPerson: TYPES.STRING,
    supportContactEmail: TYPES.STRING,
    supportContactPhone: TYPES.STRING,
    supportContactFax: TYPES.STRING,
    wholesaleContractsList: TYPES.STRING,
    retributionModel: TYPES.STRING,
    commissionType: TYPES.STRING,
    salesCreditLimit: TYPES.STRING,
    commissionValue: TYPES.STRING,
};
const fields = Object.keys(wholesaleValidationSchema);
module.exports = { wholesaleValidationSchema, fields };