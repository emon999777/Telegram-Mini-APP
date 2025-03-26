const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Telegram Mini App</title>
      </head>
      <body>
        <h1>আপনার ভিডিও লোড হচ্ছে, দয়া করে অপেক্ষা করুন...</h1>
        
        <!-- এখানে আপনার ভিডিও বা অ্যাডের লিঙ্ক দিন -->
        <script>
          setTimeout(() => {
            window.location.href = "
    // Rewarded Popup

show_9137000('pop').then(() => {
    // user watch ad till the end or close it in interstitial format
    // your code to reward user for rewarded format
}).catch(e => {
    // user get error during playing ad
    // do nothing or whatever you want
})

        ";
          }, 3000);
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
