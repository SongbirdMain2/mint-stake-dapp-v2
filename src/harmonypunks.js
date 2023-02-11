import Web3 from "web3";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { punkcontract, archercontract, knightcontract, mint_harmony_punk, mint_archer, mint_knight, total_punks_minted, total_archers_minted, total_knights_minted,total_mages_minted, stake_all_token
,unstake_all_token, claim_har,claim_har_knight, unstake_all_token_knights, unstake_all_token_punks, unstake_all_token_mages, stake_all_token_knights,stake_all_token_mages, enable_staking, enable_staking_punks, enable_staking_mages, enable_staking_knights, stake_all_token_punks, mint_mage, claim_har_mage,  } from "./util/interact.js";
import Punk from "./Images/Harmony Punk.png";
import Archer from "./Images/Archer of Harmony.png";
import Knight from "./Images/Knight of Harmony.png";
import Mage from "./Images/Mage of Harmony.png";

import {
  availableRewards,
  stakedtokens,
  stakedtokensknights,
  stakedtokenspunks,
  stakedtokensmages,
  nfts_owned_not_staked,
  nfts_owned_not_staked_knights,
  nfts_owned_not_staked_punks,
  nfts_owned_not_staked_mages,
  
  claim_har_punks,
 
  
  availableRewardsmages,
  availableRewardsknights,
  availableRewardspunks
} from "./util/interact.js";


const { ethereum } = window;
const web3 = new Web3(ethereum);


const HarmonyPunks = () => {

  const [arewards, setarewards] = useState("0"); //default message
const [arewardsknights, setarewardsknights] = useState("0"); //default message
const [arewardsmages, setarewardsmages] = useState("0"); //default message
const [arewardspunks, setarewardspunks] = useState("0"); //default message
const [amountstaked, setamountstaked] = useState("0"); //default message
const [amountstakedknights, setamountstakedknights] = useState("0"); //default message
const [amountstakedmages, setamountstakedmages] = useState("0"); //default message
const [amountstakedpunks, setamountstakedpunks] = useState("0"); //default message

const [amountownednotstaked, setamountownednotstaked] = useState("0"); //default message
const [amountownednotstakedknights, setamountownednotstakedknights] = useState("0"); //default message
const [amountownednotstakedmages, setamountownednotstakedmages] = useState("0"); //default message
const [amountownednotstakedpunks, setamountownednotstakedpunks] = useState("0"); //default message
const arewards2 = arewards / 1000000000000000000;
const arewards2decimals = parseFloat(arewards2).toFixed(2);
const arewards2knights = arewardsknights / 1000000000000000000;
const arewardsknights2decimals = parseFloat(arewards2knights).toFixed(2);
const arewards2mages = arewardsmages / 1000000000000000000;
const arewardsmages2decimals = parseFloat(arewards2mages).toFixed(2);
const arewards2punks = arewardspunks / 1000000000000000000;
const arewardspunk2decimals = parseFloat(arewards2punks).toFixed(2);


  useEffect(async () => {
    const arewards = await availableRewards();
    const arewardsknights = await availableRewardsknights();
    const arewardsmages = await availableRewardsmages();
    const arewardspunks = await availableRewardspunks();
    const amountstaked = await stakedtokens();
    const amountstakedknights = await stakedtokensknights();
    const amountstakedmages = await stakedtokensmages();
    const amountstakedpunks = await stakedtokenspunks();
    const amountownednotstaked = await nfts_owned_not_staked();
    const amountownednotstakedknights = await nfts_owned_not_staked_knights();
    const amountownednotstakedmages = await nfts_owned_not_staked_mages();
    const amountownednotstakedpunks = await nfts_owned_not_staked_punks();

    setarewards(arewards);
    setarewardsknights(arewardsknights);
    setarewardsmages(arewardsmages);
    setarewardspunks(arewardspunks);
    setamountstaked(amountstaked);
    setamountstakedknights(amountstakedknights);
    setamountstakedmages(amountstakedmages);
    setamountstakedpunks(amountstakedpunks);
    setamountownednotstaked(amountownednotstaked);
    setamountownednotstakedknights(amountownednotstakedknights);
    setamountownednotstakedmages(amountownednotstakedmages);
    setamountownednotstakedpunks(amountownednotstakedpunks);

    // addSmartContractListener();
  }, []);


  const [totalpunksminted, settotalamountpunks] = useState("0"); //default message
  const [totalmagesminted, settotalamountmages] = useState("0"); //default message
  const [totalarchersminted, settotalamountarchers] = useState("0"); //default message
  const [totalknightsminted, settotalamountknights] = useState("0"); //default message

  useEffect(async () => {
   
    const totalpunksminted = await total_punks_minted();
    const totalmagesminted = await total_mages_minted();
    const totalarchersminted = await total_archers_minted();
    const totalknightsminted = await total_knights_minted();


    settotalamountarchers(totalarchersminted);
    settotalamountmages(totalmagesminted);
    settotalamountpunks(totalpunksminted);
    settotalamountknights(totalknightsminted);

    // addSmartContractListener();
  }, []);
  return (
    <div>
      {/* <Tilt
        className="Tilt"
        options={{
          max: 0,
          reverse: false, // reverse the tilt direction
          max: 15, // max tilt rotation (degrees)
          perspective: 3500, // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1, // 2 = 200%, 1.5 = 150%, etc..
          speed: 300, // Speed of the enter/exit transition
          transition: true, // Set a transition on enter/exit.
          axis: null, // What axis should be disabled. Can be X or Y.
          reset: true, // If the tilt effect has to be reset on exit.
          easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        }}
      > */}
      <Container fluid>
        <Card
          style={{
           // border: "2px solid white",
          backgroundColor: "rgba(0,0,0,0)",
            backgroundPosition: "50% 50%",
            //maxWidth: "600px",
         //   borderRadius: "0.75rem",
           // boxShadow: "2px 2px 10px #00F7FF"
          }}
          className="margin1"
        >
          <Card.Body>

          
          <h2 className="text1" style={{
                border: "1px solid #fff",
            padding:"10px 15px",
            display:"inline-block", backgroundColor:"rgba(0,0,0,0.8)"}}>Mint/Stake NFT</h2>



<div class="row">
          <div className="col-md-6">
            <div class="card-body" style={{border: "1px inset", color: "#5c5e5c", minHeight:"830px", marginTop:"10rem"}}>
            <img
                      src={Punk}
                      style={{ height: "12rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" , marginTop:"-7rem" ,marginBottom:"3rem"}}
                    />
            <p className="paragraph">Harmony Punks</p>
            <form id="nft">
              <div
                id="template"
                className="row"
                style={{ textAlign: "center" }}
              >
                <div class="col-md-12">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                   
                    <p className="paragraph" style={{ textAlign: "center",  marginTop: "10px"  }}>
                      Price : <span className="answer">500 SGB</span>{" "}
                    </p>
                   
                    <p
                      className="paragraph"
                      style={{ textAlign: "center", marginTop: "-10px" }}
                    >
                      Collection Size : <span className="answer">{totalpunksminted}/1000</span>{" "}
                    </p>
                    <button type="button" onClick={mint_harmony_punk}
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto 50px",
                     
                    }}
                  >
                    Mint
                  </button>
                  <button id="enable_button_punks" disabled="" onClick={enable_staking_punks}  type="button"  className="solbuttoninner" style={{ margin: "10px auto 30px" , display: "inline-block",}}> Enable Staking</button>
                    <p className="paragraph">
                    Punk NFTs owned:{" "}
                    <span className="answer">
                      {+amountownednotstakedpunks + +amountstakedpunks}
                    </span>
                  </p>
                  <button type ="button" onClick={stake_all_token_punks} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Stake all</button>

                  <p className="paragraph" style={{marginTop:"50px"}}>
                    Punk NFTs staked:
                    <span className="answer">{amountstakedpunks}/{+amountstakedpunks + +amountownednotstakedpunks} </span>
                  </p>
                  <button type ="button" onClick={unstake_all_token_punks} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Unstake all</button>
                 
                  <p className="paragraph" style={{marginTop:"50px"}}>
                   $HAR for Punk Staking:{" "}
                    <span className="answer">{arewardspunk2decimals} </span>
                  </p>
                  
                  <button type ="button" onClick={claim_har_punks} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Claim $HAR</button>
                  </div>
                 
                 
                 
                 
                 
                </div>
              </div>
            </form>
            <br />
            </div>
            <div class="card-body" style={{border: "1px inset", color: "#5c5e5c", minHeight:"830px",marginTop:"10rem"}}>
            <img
                      src={Archer}
                      style={{ height: "12rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" , marginTop:"-7rem" ,marginBottom:"3rem", backgroundColor:"black"}}
                    />
            <p className="paragraph">Archers of Harmony</p>
            <form id="nft">
              <div
                id="template"
                className="row"
                style={{ textAlign: "center" }}
              >
                <div class="col-md-12">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                 
                    <p className="paragraph" style={{ textAlign: "center", marginTop: "10px" }}>
                      Price : <span className="answer">750 SGB</span>{" "}
                    </p>
                    <p
                      className="paragraph"
                      style={{ textAlign: "center", marginTop: "-10px" }}
                    >
                      Collection Size : <span className="answer"> {totalarchersminted}/51</span>{" "}
                    </p>
                    <button disabled={true} type ="button" onClick={mint_archer}
                    className="solbuttonmintclosed"
                    style={{
                      margin: "10px auto 50px",
                     
                      
                    }}
                  >
                    Mint
                  </button>
                  <button id="enable_button" disabled="" onClick={enable_staking}  type="button"  className="solbuttoninner" style={{ margin: "10px auto 30px" , display: "inline-block",}}> Enable Staking</button>
                   

<p className="paragraph">
  Archer NFTs owned:{" "}
  <span className="answer">
    {+amountownednotstaked + +amountstaked}
  </span>
</p >
<button type ="button" onClick={stake_all_token} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Stake all</button>
<p className="paragraph" style={{marginTop:"50px"}}>
  Archer NFTs staked:
  <span className="answer">{amountstaked}/{+amountstaked + +amountownednotstaked} </span>
</p>
<button type ="button" onClick={unstake_all_token} className="solbuttoninner"style={{ margin: "auto" , display: "inline-block"}}>  Unstake all</button>
<p className="paragraph" style={{marginTop:"50px"}} >
                   $HAR for Archer Staking:{" "}
                    <span className="answer">{arewards2decimals} </span>
                  </p>
                  <button type ="button" onClick={claim_har} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Claim $HAR</button>
                  </div>
                 
                 
                 
                 
                 
                  
                 
                 
                </div>
              </div>
            </form>
            <br />
            </div>
          </div>   
          <div class="col-md-6">        
            <div class="card-body" style={{border: "1px inset", color: "#5c5e5c", minHeight:"830px",marginTop:"10rem"}}>
            <img
                       src={Knight}
                      style={{ height: "12rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" , marginTop:"-7rem" ,marginBottom:"3rem", backgroundColor:"black"}}
                    />
            <p className="paragraph">Knights of Harmony</p>
            <form id="nft">
              <div
                id="template"
                className="row"
                style={{ textAlign: "center" }}
              >
                <div class="col-md-12">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                
                    <p className="paragraph" style={{ textAlign: "center" , marginTop: "10px" }}>
                      Price : <span className="answer">750 SGB</span>{" "}
                    </p>
                    <p
                      className="paragraph"
                      style={{ textAlign: "center", marginTop: "-10px" }}
                    >
                      Collection Size : <span className="answer"> {totalknightsminted}/2000</span>{" "}
                    </p>
                    <button type ="button" onClick={mint_knight}
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto 50px",
                     
                    }}
                  >
                    Mint
                  </button>
                  <button id="enable_button_knights" disabled="" onClick={enable_staking_knights}  type="button"  className="solbuttoninner" style={{ margin: "10px auto 30px" , display: "inline-block",}}> Enable Staking</button>
                    <p className="paragraph">
                    Knight NFTs owned:{" "}
                    <span className="answer">
                      {+amountownednotstakedknights + +amountstakedknights}
                    </span>
                  </p>
                  <button type ="button" onClick={stake_all_token_knights} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Stake all</button>
                  <p className="paragraph" style={{marginTop:"50px"}}>
                    Knight NFTs staked:
                    <span className="answer">{amountstakedknights}/ {+amountownednotstakedknights + +amountstakedknights} </span>
                  </p>
                  <button type ="button" onClick={unstake_all_token_knights} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Unstake all</button>
                  <p className="paragraph" style={{marginTop:"50px"}}>
                    $HAR for Knight Staking:{" "}
                    <span className="answer">{arewardsknights2decimals} </span>
                  </p>
                  <button type ="button" onClick={claim_har_knight} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Claim $HAR</button>
                  </div>
                
                  
                 
                 
                  
                  
                </div>
              </div>
            </form>
            <br />
            </div>
            <div class="card-body" style={{border: "1px inset", color: "#5c5e5c", minHeight:"830px",marginTop:"10rem"}}>
            <img
                      src={Mage}
                      style={{ height: "12rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" , marginTop:"-7rem" ,marginBottom:"3rem", backgroundColor:"black"}}
                    />
            <p className="paragraph">Mages of Harmony</p>
            <form id="nft">
              <div
                id="template"
                className="row"
                style={{ textAlign: "center" }}
              >
                <div class="col-md-12">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                 
                    <p className="paragraph" style={{ textAlign: "center" , marginTop: "10px" }}>
                      Price : <span className="answer">750 SGB</span>{" "}
                    </p>
                    <p
                      className="paragraph"
                      style={{ textAlign: "center", marginTop: "-10px" }}
                    >
                      Collection Size : <span className="answer"> {totalmagesminted}/2000</span>{" "}
                    </p>
                    <button type ="button" onClick={mint_mage}
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto 50px",
                     
                    }}
                  >
                    Mint
                  </button>
                  <button id="enable_button_punks" disabled="" onClick={enable_staking_mages}  type="button"  className="solbuttoninner" style={{ margin: "10px auto 30px" , display: "inline-block",}}> Enable Staking</button>
                    <p className="paragraph">
                    Mage NFTs owned:{" "}
                    <span className="answer">
                      {+amountownednotstakedmages + +amountstakedmages}
                    </span>
                  </p>
                  <button type ="button" onClick={stake_all_token_mages} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Stake all</button>
                  <p className="paragraph" style={{marginTop:"50px"}}>
                    Mage NFTs staked:
                    <span className="answer">{amountstakedmages}/ {+amountownednotstakedmages + +amountstakedmages} </span>
                  </p>
                  <button type ="button" onClick={unstake_all_token_mages} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block"}}> Unstake all</button>
                  <p className="paragraph" style={{marginTop:"50px"}}>
                    $HAR for Mage Staking:{" "}
                    <span className="answer">{arewardsmages2decimals} </span>
                  </p>
                  <button type ="button" onClick={claim_har_mage} className="solbuttoninner" style={{margin: "auto" , display: "inline-block"}}> Claim $HAR</button>
                  </div>
                 
                 
                  
                  
                </div>
              </div>
            </form>
            <br />
            </div>
          </div>
 </div>

         
          </Card.Body>
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};



export default HarmonyPunks;
