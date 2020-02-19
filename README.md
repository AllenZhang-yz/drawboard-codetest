This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This project is deployed on Netlify

Please visit https://drawboard-codetest.netlify.com/ to play around.

### Run this project locally

1. git clone https://github.com/AllenZhang-yz/drawboard-codetest.git
2. Open with VS Code or any IDE
3. run "npm install"
4. run "npm start"
5. Open (http://localhost:3000) to view it in the browser.

### Run Test

1. Open with VS Code or any IDE
2. npm run test

### Functionality of this App

1. When the page loads for the first time, it will show the AQI data of Melbourne by default.
2. When you type a city in the navigation search bar, there are station/city hints showing up below automatically.
3. You can click one station/city, and this will show up on the search bar.
4. You can ignore the station/city hints below and press Enter or click Submit directly with what you have entered.
5. Station/city hints will disappear if you have clicked one, submitted request or clicked somewhere else.
6. When the search bar is on focus, it will become longer, if it is on blur, it will become shorter.
7. When you type something in the search bar, there is a small cross showing up to the right, you can click it to clear the search bar.
8. When you clear the search bar manually, the cross will also disappear automatically.
9. When you click Submit or press Enter, the AQI data will show up (if the data could be fetched).
10. When the data is being fetched, a spinner will show up.
11. The PM2.5 data will show in different colors accordingly.
    If PM2.5 < 50, it will be shown in green colour and a smile face.
    If 50 < PM2.5 < 100, it will be shown in orange colour and a neutral face.
    If 100 < PM2.5, it will be shown in red colour and a sad face.
12. If the AQI data can not be fetched, whether it is an invalid city/station name or network issue, an error message will show up.
13. The web page has responsive design, it can show properly both on desktops and cell phones.

NOTE: Not all city/station hints can fetch data from backend correctly, error messages may show up.

### Skills used in this App

React, React Hooks, Redux, Redux-thunk, immutablejs, material UI, axios, PropTypes, styled-components, axios, Jest, Enzyme, Netlify
