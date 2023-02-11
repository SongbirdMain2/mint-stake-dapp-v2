//the functions pulling data from the SC are located in interact.js and are imported here
import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";

import {
  availableRewards,
  stakedtokens,
  stakedtokensknights,
  stakedtokenspunks,
  nfts_owned_not_staked,
  nfts_owned_not_staked_knights,
  nfts_owned_not_staked_punks,
  claim_har,
  claim_har_knight,
  claim_har_punks,
  stake_all_token,
  unstake_all_token,
  stake_all_token_knights,
  availableRewardsknights,
  availableRewardspunks
} from "./util/interact.js";

const Blockchaindata = () => {



  const [arewards, setarewards] = useState("0"); //default message
  const [arewardsknights, setarewardsknights] = useState("0"); //default message
  const [arewardspunks, setarewardspunks] = useState("0"); //default message
  const [amountstaked, setamountstaked] = useState("0"); //default message
  const [amountstakedknights, setamountstakedknights] = useState("0"); //default message
  const [amountstakedpunks, setamountstakedpunks] = useState("0"); //default message
  
  const [amountownednotstaked, setamountownednotstaked] = useState("0"); //default message
  const [amountownednotstakedknights, setamountownednotstakedknights] = useState("0"); //default message
  const [amountownednotstakedpunks, setamountownednotstakedpunks] = useState("0"); //default message
  const arewards2 = arewards / 1000000000000000000;
  const arewards2decimals = parseFloat(arewards2).toFixed(2);
  const arewards2knights = arewardsknights / 1000000000000000000;
  const arewardsknights2decimals = parseFloat(arewards2knights).toFixed(2);
  const arewards2punks = arewardspunks / 1000000000000000000;
  const arewardspunk2decimals = parseFloat(arewards2punks).toFixed(2);


  useEffect(async () => {
    const arewards = await availableRewards();
    const arewardsknights = await availableRewardsknights();
    const arewardspunks = await availableRewardspunks();
    const amountstaked = await stakedtokens();
    const amountstakedknights = await stakedtokensknights();
    const amountstakedpunks = await stakedtokenspunks();
    const amountownednotstaked = await nfts_owned_not_staked();
    const amountownednotstakedknights = await nfts_owned_not_staked_knights();
    const amountownednotstakedpunks = await nfts_owned_not_staked_punks();

    setarewards(arewards);
    setarewardsknights(arewardsknights);
    setarewardspunks(arewardspunks);
    setamountstaked(amountstaked);
    setamountstakedknights(amountstakedknights);
    setamountstakedpunks(amountstakedpunks);
    setamountownednotstaked(amountownednotstaked);
    setamountownednotstakedknights(amountownednotstakedknights);
    setamountownednotstakedpunks(amountownednotstakedpunks);

    // addSmartContractListener();
  }, []);

  return (
    <div>
    
      <Container fluid>
        <Card
          style={{
            border: "2px solid white",
            backgroundColor: "rgba(0,0,0,0.8)",
            backgroundPosition: "50% 50%",
           // maxWidth: "600px",
            borderRadius: "0.75rem",
            boxShadow: "2px 2px 10px #00F7FF"
          }}
          className="margin1"
        >
          <Card.Body>
            <h2 className="text1">Staking information</h2>
            <br />
            <form>
              <div className="row" style={{ textAlign: "center" }}>
                <div className="col-md-12">
                  {" "}
                  <p  className="paragraph">
                  
                    
                    You have to enable staking for each colllection once!
                    A Punk NFT will let you earn 5 $HAR per day + discounts for collections on other chains in the future!
                    A Archers/Knights/Mage NFT will let you earn 10 $HAR per day!
                    $HAR will be spendable to purchase ingame content NFTs like Avatars or cardpacks!
                    Also Players will be enabled to exchange their NFTs for $HAR or $SGB on our upcoming exclusive marketplace!
                    
                   
                  </p>
                 
                 
              
              
                 
                 
                
                </div>
              </div>
            </form>
            <br />
          </Card.Body>
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export default Blockchaindata;
