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

          .board {
            transform: rotate(90deg);
            border: 15px double red;
            border-radius: 25px;
            padding: 20px;
          }

          a {
            text-decoration: none;
            transition: border-bottom 0.3s;
            font-size: 20px;
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
