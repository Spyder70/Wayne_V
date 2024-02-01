import React from 'react';
import { Link } from 'react-router-dom';

const Eventform = () => {

    const BtnClick = () => {
        window.location.href = 'Events';
    };

    return (
        <div>
            <style>
                {`
          * {
            padding: 0;
            margin: 0;
            text-decoration: none;
            list-style: none;
            box-sizing: border-box;
          }

          body {
            font-family: montserrat;
          }

          nav {
            background: black;
            height: 80px;
            width: 100%;
          }

          img.logo {
            height: 50px; 
            width: auto; 
            margin-right: 10px; 
            margin-top: 15px; 
          }

          nav ul {
            float: right;
            margin-right: 20px;
          }

          nav ul li {
            display: inline-block;
            line-height: 80px;
            margin: 0 5px;
          }

          nav ul li a {
            color: white;
            font-size: 17px;
            padding: 7px 13px;
            border-radius: 3px;
            text-transform: uppercase;
          }

          a.active, a:hover {
            background: red;
            transition: .5s;
          }

          .checkbtn {
            font-size: 30px;
            color: white;
            float: right;
            line-height: 80px;
            margin-right: 40px;
            cursor: pointer;
            display: none;
          }

          #check {
            display: none;
          }

          @media (max-width: 952px) {
            label.logo {
              font-size: 30px;
              padding-left: 50px;
            }
            nav ul li a {
              font-size: 16px;
            }
          }

          @media (max-width: 858px) {
            .checkbtn {
              display: block;
            }
            ul {
              position: fixed;
              width: 100%;
              height: 100vh;
              background: #333333;
              top: 80px;
              left: -100%;
              text-align: center;
              transition: all .5s;
            }
            nav ul li {
              display: block;
              margin: 50px 0;
              line-height: 30px;
            }
            nav ul li a {
              font-size: 20px;
            }
            a:hover, a.active {
              background: none;
              color: #0082e6;
            }
            #check:checked ~ ul {
              left: 0;
            }
          }

          @media (max-width: 858px) {
            label.logo {
              font-size: 30px;
              padding-left: 10px; 
              order: 2; 
            }

            img.logo {
              margin-right: 0; 
              margin-left: 10px; 
            }

            nav ul {
              float: none; 
              margin: 0; 
              text-align: center; 
            }

            nav ul li {
              display: block;
              margin: 10px 0; 
              line-height: 30px;
            }
          }

          section {
            background-color:#fff;
          }
          
         
          @media (max-width: 412px) {
            section {
              padding: 10px;
            }
          }

          footer {
            background-color: black;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            position: fixed;
            bottom: 0;
            width: 100%;
            left: 0; 
            bottom: -3px;
          }

          footer p {
            margin: 0;
            color: #fff;
          }

          .btn {
            background-color: #1b9bff;
            color: #fff;
            padding: 10px 15px; 
            border: none;
            border-radius: 5px; 
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease; 
            margin-top: 20px; 
          }

          .btn:hover {
            background-color: #155fa0; 
          }

          h2 {
            text-align: center;
            margin-top: 50px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 10px;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          /* Float four columns side by side */
          .column {
            float: left;
            width: 25%;
            padding: 0 10px;
            box-sizing: border-box;
          }

        
          .row {
            margin: 0 -5px;
            padding-left: 4.5px;
            overflow-x: hidden;
          }

      
          .row:after {
            content: "";
            display: table;
            clear: both;
          }

          /*  to make responsive columns */
          @media screen and (max-width: 600px) {
            .column {
              width: 100%;
              display: block;
              margin-bottom: 20px;
            }
          }

       
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        text-align: center;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 20px;
      }
  
      .link:hover {
        background: none;
        color: inherit;
      }
          
        `}
            </style>
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">
                    <img className="logo" src="bat_white.png" alt="Your Logo" />
                </label>
                <ul>
                    <button className='btn' onClick={BtnClick}>Back</button>
                </ul>
            </nav>

            <section>
                <h2>Fill to part of your club</h2>
                <br></br>
               
            </section>

            <footer>
                <p>&copy; 2024 Wayen Enterprises. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Eventform;