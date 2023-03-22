import React from "react";

const AppLyout = ({ children }: MyComponentProps) => {
    return (
        <div>
            <main>{children}</main>
            <style jsx>{`
          div {
            display: grid;
            place-items: center;
          }
          main {
            background: #FFFDEF;
            border-radius: 10px;
            box-shadow: 10px 10px 20px #99a4a6, -10px -10px 20px #ffffff;
            display: flex;
            flex-direction: column;
            height: 95vh;
            margin: 20px 0px 0px 0px;
            overflow-y: auto;
            //padding: 20px;
            width: 450px;
          }
  
          main::-webkit-scrollbar {
            -webkit-appearance: none;
          }
  
          main::-webkit-scrollbar:vertical {
            width: 0px;
          }
  
          main::-webkit-scrollbar-button:increment,
          main::-webkit-scrollbar-button {
            display: none;
          }
  
          main::-webkit-scrollbar:horizontal {
            height: 10px;
          }
  
          main::-webkit-scrollbar-thumb {
            background-color: pink;
            border-radius: 20px;
            border: none;
          }
  
          main::-webkit-scrollbar-track {
            border-radius: 10px;
          }
  
          @media (max-width: 550px) {
            main {
              width: 100%;
              margin: 0px;
              height: 100vh;
              border-radius: 0px;
              box-shadow: none;
            }
          }
            `}</style>
        </div>
    );
};
  
export default AppLyout;