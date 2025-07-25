
‎<!DOCTYPE html>
‎
‎<html lang="en">
‎
‎<head>
‎
‎
‎   
‎
‎    <meta charset="UTF-8">
‎
‎    <meta name="viewport" content="width=device-width, initial-scale=1.0">
‎
‎    <title>Ads on Monetage mini app </title>
‎
‎    <style>
‎
‎        body {
‎
‎            margin: 0;
‎
‎            padding: 0;
‎
‎            background-color: #121212;
‎
‎            color: #fff;
‎
‎            font-family: Arial, sans-serif;
‎
‎            display: flex;
‎
‎            justify-content: center;
‎
‎            align-items: center;
‎
‎            height: 100vh;
‎
‎        }
‎
‎        .container {
‎
‎            text-align: center;
‎
‎            background: #1f1f1f;
‎
‎            padding: 20px;
‎
‎            border-radius: 10px;
‎
‎            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
‎
‎            width: 300px;
‎
‎        }
‎
‎        .container h1 {
‎
‎            font-size: 20px;
‎
‎            color: green;
‎
‎            margin-bottom: 10px;
‎
‎        }
‎
‎        .developer {
‎
‎            font-size: 12px;
‎
‎            background-color: green;
‎
‎            padding: 5px 10px;
‎
‎            border-radius: 5px;
‎
‎            margin-bottom: 15px;
‎
‎            display: inline-block;
‎
‎            cursor: pointer;
‎
‎        }
‎
‎        .stats {
‎
‎            margin: 10px 0;
‎
‎        }
‎
‎        .stats p {
‎
‎            margin: 5px 0;
‎
‎            font-size: 14px;
‎
‎        }
‎
‎        .progress-circle {
‎
‎            width: 80px;
‎
‎            height: 80px;
‎
‎            border: 4px solid green;
‎
‎            border-radius: 50%;
‎
‎            display: flex;
‎
‎            justify-content: center;
‎
‎            align-items: center;
‎
‎            margin: 10px auto;
‎
‎        }
‎
‎        .progress-circle span {
‎
‎            font-size: 18px;
‎
‎            font-weight: bold;
‎
‎        }
‎
‎        .buttons button {
‎
‎            width: 90%;
‎
‎            margin: 5px 0;
‎
‎            padding: 10px;
‎
‎            font-size: 14px;
‎
‎            border: none;
‎
‎            border-radius: 5px;
‎
‎            color: white;
‎
‎            background: green;
‎
‎            cursor: pointer;
‎
‎        }
‎
‎        .buttons button:hover {
‎
‎            background: darkorange;
‎
‎        }
‎
‎        .withdraw-section {
‎
‎            margin-top: 20px;
‎
‎            display: none;
‎
‎            padding: 20px;
‎
‎            background-color: #2a2a2a;
‎
‎            border-radius: 10px;
‎
‎            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
‎
‎        }
‎
‎        .withdraw-section input, .withdraw-section select {
‎
‎            width: 100%;
‎
‎            padding: 12px;
‎
‎            margin: 8px 0;
‎
‎            border-radius: 5px;
‎
‎            border: 2px solid #555;
‎
‎            background-color: #333;
‎
‎            color: #fff;
‎
‎        }
‎
‎        .withdraw-section input:focus, .withdraw-section select:focus {
‎
‎            border-color: green;
‎
‎            outline: none;
‎
‎        }
‎
‎        .withdraw-section button {
‎
‎            background-color: green;
‎
‎            width: 100%;
‎
‎            padding: 12px;
‎
‎            font-size: 16px;
‎
‎            margin-top: 15px;
‎
‎            border-radius: 5px;
‎
‎            cursor: pointer;
‎
‎        }
‎
‎        .withdraw-section button:hover {
‎
‎            background-color: #006400;
‎
‎        }
‎
‎        #withdraw-status {
‎
‎            color: red;
‎
‎            font-size: 14px;
‎
‎            margin-top: 10px;
‎
‎        }
‎
‎        .user-info {
‎
‎            margin: 10px 0;
‎
‎        }
‎
‎        .user-info p {
‎
‎            font-size: 14px;
‎
‎            margin: 5px 0;
‎
‎        }
‎
‎    </style>
‎
‎<link rel="me" href="https://www.blogger.com/profile/12615525391666988711" />
‎
‎<meta name='google-adsense-platform-account' content='ca-host-pub-1556223355139109'/>
‎
‎<meta name='google-adsense-platform-domain' content='blogspot.com'/>
‎
‎<link rel="me" href="https://www.blogger.com/profile/10983280640489625734" />
‎
‎<meta name='google-adsense-platform-account' content='ca-host-pub-1556223355139109'/>
‎
‎<meta name='google-adsense-platform-domain' content='blogspot.com'/>
‎
‎</head>
‎
‎<body>
‎
‎    <div class="container">
‎
‎        <h1>Earing Technology </h1>
‎
‎        <div class="developer" onclick="window.location.href='https://t.me/Bossmaster100'">Developer by Md Srabon Ahmed </div>
‎
‎       
‎
‎        <!-- Display User Info -->
‎
‎        <div class="user-info">
‎
‎            <p>Welcome, <span id="user-name"></span></p>
‎
‎        </div>
‎
‎
‎        <div class="stats">
‎
‎            <p>Watched Ads: <span id="watched-ads">0</span></p>
‎
‎            <p>Earned Points: <span id="earned-points">0</span></p>
‎
‎        </div>
‎
‎        <div class="progress-circle">
‎
‎            <span id="ads-progress">0%</span>
‎
‎        </div>
‎
‎        <div class="buttons">
‎
‎            <button id="watch-ad-btn" onclick="watchAd()">Watch Ad</button>
‎
‎            <button id="auto-ad-btn" onclick="startAutoAds()">Auto Show Ads</button>
‎
‎            <button id="stop-auto-btn" onclick="stopAutoAds()">Stop Auto Ads</button>
‎
‎            <button id="withdraw-btn" onclick="showWithdrawForm()">Withdraw</button>
‎
‎        </div>
‎
‎
‎        <!-- Withdraw Section -->
‎
‎        <div class="withdraw-section" id="withdraw-section">
‎
‎            <h3 style="color: orange; margin-bottom: 15px;">Withdrawal Request</h3>
‎
‎            <input type="number" id="withdraw-amount" placeholder="Enter Points to Withdraw" />
‎
‎            <select id="payment-method">
‎
‎                <option value="bkash">Bkash</option>
‎
‎                <option value="nagad">Nagad</option>
‎
‎                <option value="manual">Manual</option>
‎
‎            </select>
‎
‎            <input type="text" id="withdraw-phone" placeholder="Enter Phone Number" />
‎
‎            <button onclick="withdrawPoints()">Withdraw</button>
‎
‎            <p id="withdraw-status"></p>
‎
‎        </div>
‎
‎    </div>
‎
‎
‎    <script src='//jagnaimsee.net/vignette.min.js' data-zone='8696393' data-sdk='show_8696393'></script>
‎
‎
‎    <script>
‎
‎        const MIN_WITHDRAW_POINTS = 5;
‎
‎        const ADMIN_USER_ID = 6665642603;
‎
‎        const BOT_TOKEN = "7474129750:AAHDOrtYnulZqB5V3CH2XaHR_02t_PVwi7M";
‎
‎        let watchedAdsCount = 0;
‎
‎        let earnedPoints = 0.00;
‎
‎        let autoAdInterval;
‎
‎
‎        // Simulate user name from Telegram User ID (replace with actual logic to get user info)
‎
‎        const telegramUserName = "@exampleUser"; // Replace this line with the actual logic to fetch username
‎
‎        document.getElementById("user-name").textContent = telegramUserName;
‎
‎
‎        // Check if user data is saved in localStorage
‎
‎        if (localStorage.getItem('watchedAdsCount')) {
‎
‎            watchedAdsCount = parseInt(localStorage.getItem('watchedAdsCount'));
‎
‎            earnedPoints = parseFloat(localStorage.getItem('earnedPoints'));
‎
‎            document.getElementById('watched-ads').textContent = watchedAdsCount;
‎
‎            document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
‎
‎        }
‎
‎
‎        // Function to watch an ad and update stats
‎
‎        function watchAd() {
‎
‎            if (typeof show_8696393 === 'function') {
‎
‎                show_8696393().then(() => {
‎
‎                    // When the ad is shown, we add points
‎
‎                    watchedAdsCount++;
‎
‎                    document.getElementById('watched-ads').textContent = watchedAdsCount;
‎
‎                    earnedPoints += 0.50; // Add 0.50 points per ad watched
‎
‎                    document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
‎
‎                    localStorage.setItem('watchedAdsCount', watchedAdsCount);
‎
‎                    localStorage.setItem('earnedPoints', earnedPoints.toFixed(2));
‎
‎
‎                    // Update progress circle
‎
‎                    updateProgressCircle();
‎
‎                });
‎
‎            }
‎
‎        }
‎
‎
‎        // Update progress circle based on watched ads
‎
‎        function updateProgressCircle() {
‎
‎            const percentage = (watchedAdsCount / 10) * 100;
‎
‎            document.getElementById('ads-progress').textContent = `${percentage}%`;
‎
‎        }
‎
‎
‎        // Function to start auto showing ads
‎
‎        function startAutoAds() {
‎
‎            autoAdInterval = setInterval(watchAd, 5000); // Auto show ad every 5 seconds
‎
‎            document.getElementById('auto-ad-btn').disabled = true;
‎
‎            document.getElementById('stop-auto-btn').disabled = false;
‎
‎        }
‎
‎
‎        // Function to stop auto ads
‎
‎        function stopAutoAds() {
‎
‎            clearInterval(autoAdInterval);
‎
‎            document.getElementById('auto-ad-btn').disabled = false;
‎
‎            document.getElementById('stop-auto-btn').disabled = true;
‎
‎        }
‎
‎
‎        // Function to show withdraw form
‎
‎        function showWithdrawForm() {
‎
‎            document.getElementById('withdraw-section').style.display = 'block';
‎
‎        }
‎
‎
‎        // Function to handle withdrawal
‎
‎        function withdrawPoints() {
‎
‎            const amount = document.getElementById('withdraw-amount').value;
‎
‎            const paymentMethod = document.getElementById('payment-method').value;
‎
‎            const phoneNumber = document.getElementById('withdraw-phone').value;
‎
‎
‎            if (amount < MIN_WITHDRAW_POINTS) {
‎
‎                document.getElementById('withdraw-status').textContent = `Minimum withdrawal amount is ${MIN_WITHDRAW_POINTS} points.`;
‎
‎                return;
‎
‎            }
‎
‎
‎            if (amount > earnedPoints) {
‎
‎                document.getElementById('withdraw-status').textContent = `Insufficient balance. You have ${earnedPoints.toFixed(2)} points.`;
‎
‎                return;
‎
‎            }
‎
‎
‎            // Subtract points from earnedPoints after successful withdrawal
‎
‎            earnedPoints -= parseFloat(amount);
‎
‎            document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
‎
‎
‎            // Save the updated balance in localStorage
‎
‎            localStorage.setItem('earnedPoints', earnedPoints.toFixed(2));
‎
‎
‎            // Send withdrawal request to admin via Telegram
‎
‎            const message = `Withdrawal Request from ${telegramUserName}:\nAmount: ${amount} points\nPayment Method: ${paymentMethod}\nPhone Number: ${phoneNumber}`;
‎
‎            sendWithdrawRequestToAdmin(message);
‎
‎
‎            // Show success message
‎
‎            document.getElementById('withdraw-status').textContent = 'Withdrawal request sent successfully!';
‎
‎
‎            // Clear form
‎
‎            document.getElementById('withdraw-amount').value = '';
‎
‎            document.getElementById('withdraw-phone').value = '';
‎
‎        }
‎
‎
‎        // Function to send withdrawal request to admin
‎
‎        function sendWithdrawRequestToAdmin(message) {
‎
‎            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${ADMIN_USER_ID}&text=${encodeURIComponent(message)}`)
‎
‎                .then(response => response.json())
‎
‎                .then(data => {
‎
‎                    if (data.ok) {
‎
‎                        console.log('Message sent to admin');
‎
‎                    }
‎
‎                })
‎
‎                .catch(error => console.error('Error sending message:', error));
‎
‎        }
‎
‎    </script>
‎
‎</body>
‎
‎</html>
‎
