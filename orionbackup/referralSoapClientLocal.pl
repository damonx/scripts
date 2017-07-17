#!/usr/bin/perl -w
use strict;
use LWP::UserAgent;
use HTTP::Request::Common;

my $userAgent = LWP::UserAgent->new(agent => 'perl post');
my $msgNumber = $ARGV[0] || 1;
my $hostname = $ARGV[1] || 'localhost';
# An array of existing patientIds from Demographic Search.
my @patientIds = qw(84561-2004 84568-4564 82333-6008 85088-4701 84568-3168 84568-4341 84302-4195 AVT9902 85024-4778 24661-4067 84502-7664 84661-4067 84644-0388);

# An array of ReferralServices.
my @ReferralServices = qw(Cancer Cardiology);

my $templateMessage = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:com=\"http://www.orionhealth.com/com.orchestral.referrals.request.ws.soap.api_4_0/\">
 <soap:Header />
 <soap:Body>
    <com:createOrSubmitReferralRequest>
       <com:locale>en</com:locale>
       <com:patientId>patientIdPlaceholder</com:patientId>
       <com:patientIdNamespace>OHCP</com:patientIdNamespace>
       <com:patientTitle>Mr</com:patientTitle>
       <com:patientFirstName>Jeremy</com:patientFirstName>
       <com:patientFamilyName>Bender</com:patientFamilyName>
       <com:patientAddress>117 Ortega Blvd</com:patientAddress>
       <com:patientDateOfBirth>12-Nov-1949</com:patientDateOfBirth>
       <com:patientGender>M</com:patientGender>
       <com:referralServiceId>referralServicePlaceHolder</com:referralServiceId>
       <com:referralServiceName>referralServicePlaceHolder</com:referralServiceName>
       <com:referralTypeId>consult</com:referralTypeId>
       <com:referralTypeName>Consult</com:referralTypeName>
       <com:initialReceiverCode>CANCER</com:initialReceiverCode>
       <com:initialReceiverCodingSystem>ReferralReceiver</com:initialReceiverCodingSystem>
       <com:initialReceiverName>Cancer Triage Center</com:initialReceiverName>
       <com:referringClinicianId>rded</com:referringClinicianId>
       <com:referringClinicianIdNamespace>clinical-portal-user</com:referringClinicianIdNamespace>
       <com:referringClinicianName>Richard D Edison</com:referringClinicianName>
       <com:acuityCode>UrgentCancer</com:acuityCode>
       <com:acuityCodingSystem>OrionAcuity</com:acuityCodingSystem>
       <com:isUrgent>true</com:isUrgent>
       <com:urgencyText>Please schedule ASAP</com:urgencyText>
       <com:referralSourceCode>GMC</com:referralSourceCode>
       <com:referralSourceCodingSystem>Alberta</com:referralSourceCodingSystem>
       <com:referralContentData>
          <documentTitle>Referral for J Bender</documentTitle>
          <documentData>JVBERi0xLjQgdmVyeXBkZi5jb20KMyAwIG9iagogPDwvTGVuZ3RoIDQgMCBSIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+CnN0cmVhbQp4nIWNwQ6CMBBE737F3IREgYKCV0k0MeFk6gcUqFJtKaHl/0U8gAnqbLLJTubNphQEQT8E8QZJuANVHw4JX45/7O8Y9DrsDE4qtS5BubE4c9NJa1x6h+MuF2PUWf/QTHwv806JGhNtcfNLOZt9MClqjqbSpqmYZYYDJCI4XfxsDlBK14JNupMAqvhSnwop2i4X9QqlaHlhByLwIqj/hNWWyfcP4oUjcaB4AmdLWUllbmRzdHJlYW0KZW5kb2JqCjQgMCBvYmoKMTc0IGVuZG9iagoyIDAgb2JqCiA8PC9QYXJlbnQgNSAwIFIgL01lZGlhQm94WzAgMCA2MTIgNzkyXSAvVHlwZSAvUGFnZSAvQ29udGVudHNbMyAwIFIgXSAvUmVzb3VyY2VzIDYgMCBSID4+CmVuZG9iago2IDAgb2JqCiA8PC9Qcm9jU2V0Wy9QREYgL1RleHRdIC9Gb250IDw8L0YwIDEgMCBSID4+Cj4+CmVuZG9iago3IDAgb2JqCiA8PC9DcmVhdG9yIChWZXJ5UERGIEZyZWUgVGV4dCBUbyBQREYgQ29udmVydGVyIHYxLjUpIC9Qcm9kdWNlciAoVmVyeVBERi5jb20gSW5jIFwoaHR0cDovL3d3dy52ZXJ5cGRmLmNvbVwpKSAvQ3JlYXRpb25EYXRlIChEOjIwMTQwMTI5MDIxNDQwLTA4JzAwJykgL01vZERhdGUgKEQ6MjAxNDAxMjkwMjE0NDAtMDgnMDAnKSA+PgplbmRvYmoKMSAwIG9iagogPDwvVHlwZSAvRm9udCAvU3VidHlwZSAvVHlwZTEgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL0Jhc2VGb250IC9Db3VyaWVyID4+CmVuZG9iago1IDAgb2JqCiA8PC9UeXBlIC9QYWdlcyAvQ291bnQgMSAvS2lkc1syIDAgUiBdPj4KZW5kb2JqCjggMCBvYmoKIDw8L1R5cGUgL0NhdGFsb2cgL1BhZ2VzIDUgMCBSID4+CmVuZG9iagoKeHJlZgowIDkKMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAwNjU3IDAwMDAwIG4NCjAwMDAwMDAyODcgMDAwMDAgbg0KMDAwMDAwMDAyMSAwMDAwMCBuDQowMDAwMDAwMjY4IDAwMDAwIG4NCjAwMDAwMDA3NTIgMDAwMDAgbg0KMDAwMDAwMDM5MiAwMDAwMCBuDQowMDAwMDAwNDU1IDAwMDAwIG4NCjAwMDAwMDA4MDggMDAwMDAgbg0KdHJhaWxlcgogPDwvU2l6ZSA5IC9Sb290IDggMCBSIC9JbmZvIDcgMCBSIC9JRFs8RjNCRDE0NjFGM0YyNzQ0RTYzNEEyRTJFQjlBNDI5NUI+PEYzQkQxNDYxRjNGMjc0NEU2MzRBMkUyRUI5QTQyOTVCPl0gPj4KCnN0YXJ0eHJlZgo4NTgKJSVFT0YNCg== </documentData>
       </com:referralContentData>
       <supportingDocuments>
          <!--Zero or more repetitions:-->
          <supportingDocument>
             <documentTitle>Biopsy Result</documentTitle>
             <documentData>RklOQUwgRElBR05PU0lTOiBBQ1VURSBNWUVMT01PTk9DWVRJQyBMRVVLRU1JQSANCkNPTU1FTlRTOg0KVGhlIG1vcnBob2xvZ2ljLCBpbW11bm9oaXN0b2NoZW1pY2FsLCBhbmQgY3l0b2dlbmV0aWNzIGZpbmRpbmdzIGFyZSBhbGwgY29uc2lzdGVudCB3aXRoIGFjdXRlIG15ZWxvbW9ub2N5dGljIGxldWtlbWlhLCBNNWEuDQpUaGlzIHR5cGUgb2YNCmxldWtlbWlhIGNhbiBvY2N1ciBpbiBwYXRpZW50cyBhZnRlciBjaGVtb3RoZXJhcHkgd2l0aCB0b3BvaXNvbWVyYXNlcyBJSSBpbmhpYml0b3JzLCBpbmNsdWRpbmcgZXBpcG9kb3BoeWwNCm90b3hpbnMsIGV0b3Bvc2lkZSwgYW5kIHRlbmlwb3NpZGUuDQpDb3JyZWxhdGlvbiB3aXRoIHRoZSBwYXRpZW50J3MgbWVkaWNhdGlvbiBoaXN0b3J5IGlzIHJlY29tbWVuZGVkLg==</documentData>
          </supportingDocument>
          <supportingDocument>
             <documentTitle>Blood Test</documentTitle>
             <documentData>JVBERi0xLjQgdmVyeXBkZi5jb20KMyAwIG9iagogPDwvTGVuZ3RoIDQgMCBSIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+CnN0cmVhbQp4nIWNwQ6CMBBE737F3IREgYKCV0k0MeFk6gcUqFJtKaHl/0U8gAnqbLLJTubNphQEQT8E8QZJuANVHw4JX45/7O8Y9DrsDE4qtS5BubE4c9NJa1x6h+MuF2PUWf/QTHwv806JGhNtcfNLOZt9MClqjqbSpqmYZYYDJCI4XfxsDlBK14JNupMAqvhSnwop2i4X9QqlaHlhByLwIqj/hNWWyfcP4oUjcaB4AmdLWUllbmRzdHJlYW0KZW5kb2JqCjQgMCBvYmoKMTc0IGVuZG9iagoyIDAgb2JqCiA8PC9QYXJlbnQgNSAwIFIgL01lZGlhQm94WzAgMCA2MTIgNzkyXSAvVHlwZSAvUGFnZSAvQ29udGVudHNbMyAwIFIgXSAvUmVzb3VyY2VzIDYgMCBSID4+CmVuZG9iago2IDAgb2JqCiA8PC9Qcm9jU2V0Wy9QREYgL1RleHRdIC9Gb250IDw8L0YwIDEgMCBSID4+Cj4+CmVuZG9iago3IDAgb2JqCiA8PC9DcmVhdG9yIChWZXJ5UERGIEZyZWUgVGV4dCBUbyBQREYgQ29udmVydGVyIHYxLjUpIC9Qcm9kdWNlciAoVmVyeVBERi5jb20gSW5jIFwoaHR0cDovL3d3dy52ZXJ5cGRmLmNvbVwpKSAvQ3JlYXRpb25EYXRlIChEOjIwMTQwMTI5MDIxNDQwLTA4JzAwJykgL01vZERhdGUgKEQ6MjAxNDAxMjkwMjE0NDAtMDgnMDAnKSA+PgplbmRvYmoKMSAwIG9iagogPDwvVHlwZSAvRm9udCAvU3VidHlwZSAvVHlwZTEgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL0Jhc2VGb250IC9Db3VyaWVyID4+CmVuZG9iago1IDAgb2JqCiA8PC9UeXBlIC9QYWdlcyAvQ291bnQgMSAvS2lkc1syIDAgUiBdPj4KZW5kb2JqCjggMCBvYmoKIDw8L1R5cGUgL0NhdGFsb2cgL1BhZ2VzIDUgMCBSID4+CmVuZG9iagoKeHJlZgowIDkKMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAwNjU3IDAwMDAwIG4NCjAwMDAwMDAyODcgMDAwMDAgbg0KMDAwMDAwMDAyMSAwMDAwMCBuDQowMDAwMDAwMjY4IDAwMDAwIG4NCjAwMDAwMDA3NTIgMDAwMDAgbg0KMDAwMDAwMDM5MiAwMDAwMCBuDQowMDAwMDAwNDU1IDAwMDAwIG4NCjAwMDAwMDA4MDggMDAwMDAgbg0KdHJhaWxlcgogPDwvU2l6ZSA5IC9Sb290IDggMCBSIC9JbmZvIDcgMCBSIC9JRFs8RjNCRDE0NjFGM0YyNzQ0RTYzNEEyRTJFQjlBNDI5NUI+PEYzQkQxNDYxRjNGMjc0NEU2MzRBMkUyRUI5QTQyOTVCPl0gPj4KCnN0YXJ0eHJlZgo4NTgKJSVFT0YNCg==</documentData>
          </supportingDocument>
       </supportingDocuments>
       <com:soapMode>SUBMIT_ERROR</com:soapMode>
       <com:ackWaitTimeInMillis>3000</com:ackWaitTimeInMillis>
    </com:createOrSubmitReferralRequest>
 </soap:Body>
</soap:Envelope>";

my $referralCount = 0;
foreach (@patientIds) {
  my $messageWithPatient = $templateMessage;
  $messageWithPatient =~ s/patientIdPlaceholder/$_/g;
  foreach(@ReferralServices){
     my $soapMessage = $messageWithPatient;
     $soapMessage =~ s/referralServicePlaceHolder/$_/g;
     for (1..$msgNumber){
       soapRequest($soapMessage);
     }
  }
}

sub soapRequest {
   my $response = $userAgent->request(POST "http://$hostname:27080/ws/ReferralRequestSoapService",
   Content_Type => 'application/soap+xml',
   Content => $_[0]);
   #print "\n------------------------------------\n";
   #print $_[0];
   #print "\n------------------------------------\n";
   #$count = $count + 1;
   #print "count = ".$count;
   $referralCount++;
   print $response->error_as_HTML unless $response->is_success;
   print $response->as_string;
   print "\n\n--------- Successfully Created Referral Total Number:".$referralCount."\n" if $response->is_success;
}
