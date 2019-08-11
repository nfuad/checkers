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

          a {
            text-decoration: none;
            transition: border-bottom 0.3s;
          }

          .board {
            transform: rotate(90deg);
            border: 15px solid #111;
            border-radius: 25px;
            padding: 20px;
          }

          // a:visited {
          //   color: grey;
          // }

          a:hover {
            border-bottom: 2px solid black;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
