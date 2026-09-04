const https = require('https');
const url = 'https://www.google.com/maps/place/Beachealth,+350+Beech+Ave,+Toronto,+ON+M4E+3T8,+Canada/data=!4m2!3m1!1s0x89d4cc1d5d705f21:0x5b7bdaa2c5c6fa54';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for JSON containing review text. Often mapped to 5-star or text strings.
    const matches = data.match(/"([^"]{30,300})"/g) || [];
    const reviews = matches.filter(m => {
      const s = m.toLowerCase();
      return !s.includes('http') && 
             !s.includes('\\u') && 
             !s.includes(';') && 
             !s.includes('<') && 
             !s.includes('{') &&
             !s.includes('.js') &&
             m.split(' ').length > 8; // At least 8 words
    });
    console.log(Array.from(new Set(reviews)));
  });
});
