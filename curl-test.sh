#!/bin/bash
curl -X POST -H "Authorization: key=AAAAJ6EsSMs:APA91bE_YJL57Ig7fQLHYlUOOS30-XBL2sxO7dI5NC6LJ5idc6idcX5R2bikytlT7683sUUB_aPf3QYp3eqVE9M9GoaQr6rPuFBNfFBRZSQLhfH_4QJWCuT1hj2hSurlQo56D3V-ESIv" -H "Content-Type: application/json" \
   -d '{
  "data": {
    "notification": {
        "title": "FCM Message",
        "body": "This is an FCM Message",
        "icon": "/itwonders-web-logo.png",
    }
  },
  "to": "cQtcnIhBR8o:APA91bEsk3zjclzUAN50ROLgBwK9D6DhpjdTO8E96v6pyHm5Ma0RHy2Ix2j4cuhhwger3EJTdw5C5le-SWE-16qpPNEPXvL_b-3gfAMdS9Iykh0XBwx66BrnsB2nwxQVaXC2YyC6EE7U"
}' https://fcm.googleapis.com/fcm/send
