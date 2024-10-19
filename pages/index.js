import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Adventurous Worn Trout</title>
          <meta property="og:title" content="Adventurous Worn Trout" />
        </Head>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Landbot | Convert a Landing Page into a Chatbot</title>
  </head>
  <body>
    <script SameSite="None; Secure" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"></script>
    <script>
      var myLandbot = new Landbot.Fullpage({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2646357-3Q9773UUXZUYB3GQ/index.json',
      });
    </script>
  </body>
</html>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container2 {
            flex: 1;
            width: 814px;
            height: 1005px;
          }
          .home-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
