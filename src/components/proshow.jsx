import React from "react";
import bgImage from "../assets/bg.svg";
import proshowimg from "../assets/proshowimg.svg";
import arrow from "../assets/Arrow 1.svg";
const CheckItOutButton = ({ onClick }) => (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "35px" }}>
        <div
          style={{
            border: "white 2px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "380px",
            height: "100px",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)",
            marginRight: "150px",
          }}
        >
            
          <button
            style={{
              backgroundColor: "#720A08",
              border: "none",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:"center",
              gap: "20px",
              width: "355px",
              height:"80px",
              padding: "15px",
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)",
              marginRight: "5px",
            }}
          >
            <h1 style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 600, color: "white", paddingLeft: "5px" }}>CHECK IT OUT</h1>
            <img src={arrow} style={{ paddingRight: "10px" ,maxHeight: "15px"}} alt="Arrow" />
          </button>
          
        </div>
      </div>
  );
const LineRight =()=>{
    return(
        <div>
        <div style={{
            width: "100vw",
            height: "18px", 
            display: "flex", 
            justifyContent: "flex-end"
            }}>
                <div style={{
                    backgroundColor: "#720A08",
                    width: "380px", 
                    height: "18px",
                    display: "flex",
                    alignItems: "center"
                }}></div>
            </div>

            <div style={{
                width: "100vw",
                height: "18px", 
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "45px"
            }}>
                <div style={{
                    backgroundColor: "#ffffff",
                    width: "380px", 
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "160px"
                }}></div>
            </div>
        </div>
    )
}
const LineLeft=()=>{
    return(
    <div>
        <div style={{
        width: "100vw",
        height: "18px", 
        display: "flex", 
        marginTop: "45px"
        }}>
            <div style={{
                backgroundColor: "#720A08",
                width: "380px", 
                height: "18px",
                display: "flex",
                alignItems: "center",
                marginLeft: "160px"
            }}></div>
        </div>
 
        <div style={{
            width: "100vw",
            height: "18px", 
            display: "flex",
           
            marginTop: "45px"
        }}>
            <div style={{
                backgroundColor: "#ffffff",
                width: "380px", 
                height: "18px",
                display: "flex",
                alignItems: "center"
                
            }}></div>
        </div> 
    </div>
    )
}
const Proshowimg=()=>{
    return(
        <div
            style={{
              width: "1005px",
              height: "820px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "125px",
              left: "100px",
              zIndex: 100,
              border: "#720A08 2px solid",
              backgroundColor: "black",
            }}
          >
            <img src={proshowimg} style={{ height: "560px", border: "#720A08 1px solid" }} alt="Proshow Image" />
          </div>
    )
}
const Proshow = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Rubik+Vinyl&display=swap"
        rel="stylesheet"
      />
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        width: "100vw",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        position: "relative",
        fontFamily: "Poppins, sans-serif",
      }}
    >
       <LineRight/>    
        <div
          style={{ position: "relative", width: "100vw", minHeight: "1120px", display: "flex", flexDirection: "column" }}
        >
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 101 }}>
            <div
              style={{ backgroundColor: "#720A08", marginRight: "150px", marginTop: "35px", height: "140px", display: "flex", alignItems: "center" }}
            >
              <h1 style={{ fontSize: "120px", fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "black", padding: "0px 40px", margin: 0 }}>
                DAY
              </h1>
            </div>
          </div>
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "absolute", top: "110px", right: "50px", zIndex: 102 }}>
            <h1 style={{ fontFamily: "Rubik Vinyl", color: "white", fontSize: "120px" }}>ONE</h1>
          </div>
          <Proshowimg/>
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 2 }}>
            <div
              style={{
                backgroundColor: "white",
                border: "#720A08 5px solid",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: "760px",
                right: "120px",
                zIndex: -22,
                padding: "0px 20px 20px 20px",
              }}
            >
              <h1 style={{ fontFamily: "Rubik Vinyl", color: "black", margin:"-20px 0 0 0" , fontSize: "80px" }}>DJSTRELLA</h1>
              <h1 style={{ fontFamily: "Poppins", color: "#E6B62E", fontWeight: 700, margin: 0, fontSize: "40px", marginTop: "-10px" }}>APRIL 19TH</h1>
            </div>
          </div>
        </div>
   <CheckItOutButton/>
      {/*day 2 */}
      <LineLeft/>
      <LineRight/>     
        <div
          style={{ position: "relative", width: "100vw", minHeight: "1120px", display: "flex", flexDirection: "column" }}
        >
          <div style={{ width: "100vw", display: "flex", position: "absolute", left: "50px", zIndex: 102,top:"15px" }}>
            <h1 style={{ fontFamily: "Rubik Vinyl", color: "white", fontSize: "120px" }}>DAY</h1>
          </div>
          <div style={{ width: "100vw", display: "flex", position: "relative", zIndex: 103,top: "50px" }}>
            <div
              style={{ backgroundColor: "#720A08", marginRight: "150px", marginTop: "35px", height: "140px", display: "flex", alignItems: "center", position:"relative",top:"65px",left:"150px"}}
            >
              <h1 style={{ fontSize: "120px", fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "black", margin: 0,padding:"0 5px 0 5px" }}>
                TWO
              </h1>
            </div>
          </div>
          
          <Proshowimg/>
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 2 }}>
            <div
              style={{
                backgroundColor: "black",
                border: "#720A08 2px solid",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: "760px",
                left: "90px",
                zIndex: -22,
                padding: "0px 20px 20px 20px",
              }}
            >
              <h1 style={{ fontFamily: "Rubik Vinyl", color: "white", margin:"-20px 0 0 0" , fontSize: "80px" }}>DJSTRELLA</h1>
              <h1 style={{ fontFamily: "Poppins", color: "#E6B62E", fontWeight: 700, margin: 0, fontSize: "40px", marginTop: "-10px" }}>APRIL 19TH</h1>
            </div>
          </div>
        </div>
  <CheckItOutButton/>
      {/* day 3*/} 
      <LineLeft/>
      <LineRight/>
        <div
          style={{ position: "relative", width: "100vw", minHeight: "1120px", display: "flex", flexDirection: "column" }}
        >
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 101 }}>
            <div
              style={{ backgroundColor: "#720A08", marginRight: "150px", marginTop: "35px", height: "140px", display: "flex", alignItems: "center" }}
            >
              <h1 style={{ fontSize: "120px", fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "black", padding: "0px 40px", margin: 0 }}>
                DAY
              </h1>
            </div>
          </div>
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "absolute", top: "120px", zIndex: 102 }}>
            <h1 style={{ fontFamily: "Rubik Vinyl", color: "white", fontSize: "120px" }}>THREE</h1>
          </div>
          <Proshowimg/>
          <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 2 }}>
            <div
              style={{
                backgroundColor: "white",
                border: "#720A08 5px solid",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: "760px",
                right: "120px",
                zIndex: -22,
                padding: "0px 20px 20px 20px",
              }}
            >
              <h1 style={{ fontFamily: "Rubik Vinyl", color: "black", margin:"-20px 0 0 0" , fontSize: "80px" }}>DJSTRELLA</h1>
              <h1 style={{ fontFamily: "Poppins", color: "#E6B62E", fontWeight: 700, margin: 0, fontSize: "40px", marginTop: "-10px" }}>APRIL 19TH</h1>
            </div>
          </div>
        </div>
        <CheckItOutButton/>
      <LineLeft/>
    </div>
    </div>
  );
};
export default Proshow;
