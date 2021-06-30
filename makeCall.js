const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: process.env.LOCALPHONE_NUMBER,
        from: process.env.TWILIO_NUMBER
      })
      .then(call => console.log(call.sid));