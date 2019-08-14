const Layout = props => {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {`
          body {
            font-family: 'Nunito', Arial, cursive;
            margin: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            text-transform: capitalize;
          }

          .wrapper {
            margin: 0 auto;
            width: 100%;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: left;
            overflow-x: hidden;
            margin-top: 30px;
            margin-bottom: 30px;
          }

          .wrapper p,
          .wrapper h1 {
            max-width: 60%;
            margin-bottom: 0;
            padding-bottom: 0;
          }

          a {
            text-decoration: none;
            transition: border-bottom 0.3s;
          }

          .board {
            transform: rotate(90deg);
            border: 15px solid #111;
            border-radius: 25px;
            padding: 20px;
            margin: 0 auto;
          }

          a:visited {
            color: grey;
          }

          a:hover {
            border-bottom: 2px solid black;
          }

          .cta-button,
          .cta-button-small {
            background: #f8f8f8;
            border: #111;
            padding: 15px 35px 15px 35px;
            font-size: 16x;
            border: 2px solid #111;
            cursor: pointer;
            margin-right: 35px;
            transition: background 0.2s, color 0.3s;
          }
          .cta-button-small {
            padding: 10px 20px 10px 20px;
            font-size: 14x;
            border: 1.5px solid #111;
            margin: 0;
          }
          .cta-button:nth-child(2) {
            margin-right: 0;
          }

          .cta-button:hover,
          .cta-button-small:hover {
            background: #111;
            color: #f8f8f8;
          }

          @media (max-width: 1000px) {
            .wrapper p,
            .wrapper h1 {
              max-width: 65%;
              margin-bottom: 0;
              padding-bottom: 0;
            }

            .board {
              border: 10px solid #111;
              border-radius: 20px;
              padding: 15px;
            }
          }
          @media (max-width: 800px) {
            .wrapper p,
            .wrapper h1 {
              max-width: 70%;
              margin-bottom: 0;
              padding-bottom: 0;
            }

            .board {
              border: 7px solid #111;
              border-radius: 15px;
              padding: 10px;
            }
          }

          @media (max-width: 500px) {
            .wrapper p,
            .wrapper h1 {
              max-width: 80%;
              margin-bottom: 0;
              padding-bottom: 0;
            }

            .board {
              border: 5px solid #111;
              border-radius: 10px;
              padding: 5px;
            }

            a {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Layout
