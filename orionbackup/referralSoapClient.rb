require 'savon'

# create a client for the service
client = Savon.client(wsdl: 'http://localhost:27080/ws/ReferralRequestSoapService?wsdl')
#
print client.operations
