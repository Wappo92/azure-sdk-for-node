// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins/fakeOriginName?api-version=2015-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'b1c462e0-4009-4c64-841f-c654cdfaa070',
  'x-ms-client-request-id': '180a3ae4-e717-4b22-aed0-2ebb6a965b1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e792d664-6c43-49e0-9509-f0e608fac62a',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222717Z:e792d664-6c43-49e0-9509-f0e608fac62a',
  date: 'Tue, 01 Mar 2016 22:27:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins/fakeOriginName?api-version=2015-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'b1c462e0-4009-4c64-841f-c654cdfaa070',
  'x-ms-client-request-id': '180a3ae4-e717-4b22-aed0-2ebb6a965b1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e792d664-6c43-49e0-9509-f0e608fac62a',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222717Z:e792d664-6c43-49e0-9509-f0e608fac62a',
  date: 'Tue, 01 Mar 2016 22:27:16 GMT',
  connection: 'close' });
 return result; }]];