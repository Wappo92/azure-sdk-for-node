// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818/stop?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint1818.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '466',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b5511540-6817-4844-856c-df52844d133f/profileresults/cdnTestProfile45/endpointresults/cdnTestEndpoint1818?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '092ab2ef-7f02-480a-b3a4-f6b2fb7dfe06',
  'x-ms-client-request-id': '7443f59b-8ef5-47dd-9b8e-126b9296c931',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b5511540-6817-4844-856c-df52844d133f?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd147f3bf-ebba-4a66-9374-24268d7fdea8',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221402Z:d147f3bf-ebba-4a66-9374-24268d7fdea8',
  date: 'Tue, 01 Mar 2016 22:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818/stop?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint1818.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '466',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b5511540-6817-4844-856c-df52844d133f/profileresults/cdnTestProfile45/endpointresults/cdnTestEndpoint1818?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '092ab2ef-7f02-480a-b3a4-f6b2fb7dfe06',
  'x-ms-client-request-id': '7443f59b-8ef5-47dd-9b8e-126b9296c931',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b5511540-6817-4844-856c-df52844d133f?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd147f3bf-ebba-4a66-9374-24268d7fdea8',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221402Z:d147f3bf-ebba-4a66-9374-24268d7fdea8',
  date: 'Tue, 01 Mar 2016 22:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b5511540-6817-4844-856c-df52844d133f?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '639f8418-17a7-42b8-bf19-1ac3a380fb83',
  'x-ms-client-request-id': 'cee6d944-c680-4dbc-9270-2955c7f94c4e',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5c38106f-f29a-41dd-b7fa-d8705b0c75a1',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221444Z:5c38106f-f29a-41dd-b7fa-d8705b0c75a1',
  date: 'Tue, 01 Mar 2016 22:14:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b5511540-6817-4844-856c-df52844d133f?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '639f8418-17a7-42b8-bf19-1ac3a380fb83',
  'x-ms-client-request-id': 'cee6d944-c680-4dbc-9270-2955c7f94c4e',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5c38106f-f29a-41dd-b7fa-d8705b0c75a1',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221444Z:5c38106f-f29a-41dd-b7fa-d8705b0c75a1',
  date: 'Tue, 01 Mar 2016 22:14:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint1818\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val2\",\"tag2\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint1818.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopped\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '814',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '67b3dfde-83fd-437c-a519-1c5da5294b09',
  'x-ms-client-request-id': '8cc43587-98c6-4426-87e7-b494c0386fbf',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fc6d6564-c688-4a6f-86a8-cbe677628bd3',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221505Z:fc6d6564-c688-4a6f-86a8-cbe677628bd3',
  date: 'Tue, 01 Mar 2016 22:15:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint1818\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val2\",\"tag2\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint1818.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopped\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '814',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '67b3dfde-83fd-437c-a519-1c5da5294b09',
  'x-ms-client-request-id': '8cc43587-98c6-4426-87e7-b494c0386fbf',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fc6d6564-c688-4a6f-86a8-cbe677628bd3',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221505Z:fc6d6564-c688-4a6f-86a8-cbe677628bd3',
  date: 'Tue, 01 Mar 2016 22:15:05 GMT',
  connection: 'close' });
 return result; }]];