import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Adventurous Worn Trout</title>
          <meta property="og:title" content="Adventurous Worn Trout" />
        </Head>
        <iframe
          src="https://landbot.online/v3/H-2646357-3Q9773UUXZUYB3GQ/index.html"
          className="home-iframe"
        ></iframe>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-iframe {
            width: 1200px;
            height: 1391px;
          }
          @media (max-width: 991px) {
            .home-iframe {
              width: 991px;
              height: 1390px;
            }
          }
          @media (max-width: 767px) {
            .home-iframe {
              width: 767px;
              height: 1383px;
            }
          }
          @media (max-width: 479px) {
            .home-iframe {
              width: 479px;
              height: 1374px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
