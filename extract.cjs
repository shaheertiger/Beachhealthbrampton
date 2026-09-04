const fs = require('fs');
const text = fs.readFileSync('C:\\\\Users\\\\Believer\\\\.gemini\\\\antigravity-ide\\\\brain\\\\9271fc4e-fb2d-4a85-b738-3e97943f3325\\\\.system_generated\\\\steps\\\\913\\\\content.md', 'utf8');

// Find JSON objects that might contain reviews
const matches = text.match(/"([^"]{100,500})"/g);
if (matches) {
  const possibleReviews = matches.filter(m => 
    !m.includes('http') && 
    !m.includes('gstatic') && 
    !m.includes('<') && 
    !m.includes('\\u00') &&
    m.split(' ').length > 10
  );
  
  console.log('Found possible reviews:', possibleReviews.length);
  possibleReviews.slice(0, 10).forEach(r => console.log('-', r));
} else {
  console.log('No matches');
}
