#!/bin/bash

curl -u admin:b -H "X-OHP-DEVELOPER-API-KEY: Internal" -X GET "http://localhost:27080/referral-rs/dev/execute-db-script?executeAsScript=true&database=clinical&bundle=com.orchestral.referrals.dev.configuration&path=/META-INF/sql/derby/insert-sample-hcs-data.sql" 

curl -u admin:b -H "X-OHP-DEVELOPER-API-KEY: Internal" -X GET "http://localhost:27080/referral-rs/dev/execute-db-script?bundle=com.orchestral.referrals&path=/META-INF/com.orchestral.base.attachment/create-repository-referral-view.sql"
