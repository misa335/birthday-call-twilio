require('dotenv').config();
const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.say(`Heeey, ${process.env.BIRTHDAY_PERSON}. Happy Birthday!!`);
    twiml.play({
        loop: 1
    }, 'https://tan-seagull-8976.twil.io/assets/Chipmunks.mp3');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');