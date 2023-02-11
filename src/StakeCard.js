import { Card, Button, Container, Col, Row } from "react-bootstrap";

// import Tilt from "react-tilt";
import Web3 from "web3";

import { archercontract,punkcontract, knightcontract, magecontract, stakingcontract, stakingcontractmages, stake_nft, Unstake_nft,Unstake_nft_knight,stake_nft_mage, Unstake_nft_punk,Unstake_nft_mage, stake_nft_knight, stake_nft_punk,  stakingcontractknights, stakingcontractpunks } from "./util/interact.js";

const { ethereum } = window;
const web3 = new Web3(ethereum);



const StakeCard = () => {
  // const showAccount = document.querySelector('.showAccount');
  function register() {
    // Register functionality here
  }
  function submit() {
    // submit functionality here
  }
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
        
        {/* <Card
          style={{
            border: "2px solid white",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundPosition: "50% 50%",
            maxWidth: "600px",
            borderRadius: "0.75rem",
            boxShadow: "2px 2px 10px #00F7FF"
          }}
          className="margin1"
        >
        {/*}  <Card.Body>
            <h2 className="text1">Mint NFT - Ignore for now</h2>
            <p className="paragraph">Collection Name</p>
            <form id="nft">
              <div
                id="template"
                className="row"
                style={{ textAlign: "center"  }}
              >
                <div class="col-md-12">
                  <div  onLoad={change_enable_staking_button}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "10rem", width: "auto" , borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF"}}
                    />
                       <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "5rem", width: "auto" , borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF"}}
                    />
                  
                  
                    <p
                      className="paragraph"
                      style={{ textAlign: "left", marginTop: "-10px" }}
                    >
                      Collection Size : <span className="answer"> 0</span>{" "}
                    </p>
                  </div>
                  <div type="button" onLoad={change_enable_staking_button} class="qty mt-2">
                    <span class="minus ">-</span>
                    <input type="number" class="count" name="qty" value="1" />
                    <span class="plus ">+</span>
                  </div>
                  <button onClick={stake_all_token} type="button"
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Mint
                  </button>
                </div>
              </div>
            </form>
            <br />
                  </Card.Body>
        </Card>*/}
        <Card
        id="nft"
          style={{
            border: "2px solid white",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundPosition: "50% 50%",
            maxWidth: "600px",
            borderRadius: "0.75rem",
            boxShadow: "2px 2px 10px #00F7FF"
          }}
          className="margin1"
        >
          <Card.Body>
          
            
            <button type ="button" onClick={render_unstaked_cards} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block", marginRight: "10px", marginBottom: "10px",  marginTop: "10px"}}> Show unstaked NFTs</button>
            <form  id="nft">
            <div type="button"

onClick={e => stake_nft_punk(e.target.value)}

  id="locationunstakednftspunks"
  className="row"
  style={{ textAlign: "center" }}
>
  <template><div class="col-md-4">
    <div
      style={{
        textAlign: "center",
        borderstyle: "solid",
      }}
    >
      <p class="Name" className="paragraph">
        Archer of Harmony #15
      </p>{" "}
      <img
        src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
        style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
      />
    </div>
    <button value ="15" id="15" type="button"
      className="solbuttoninner"
      style={{
        margin: "10px auto",
      }}
    >
      Stake/Unstake
    </button>
    <hr />
  </div></template>
  
 
</div>
            
              <div  type="button"
             

            onClick={e => stake_nft(e.target.value)}
                id="locationunstakednftsarchers"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div  id="templateunstaked" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                      borderstyle: "solid",
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value ="15" id="15" type="button"
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
               
              </div>
          
  <div type="button"

onClick={e => stake_nft_mage(e.target.value)}

  id="locationunstakednftsmages"
  className="row"
  style={{ textAlign: "center" }}
>
  <template><div class="col-md-4">
    <div
      style={{
        textAlign: "center",
        borderstyle: "solid",
      }}
    >
      <p class="Name" className="paragraph">
        Archer of Harmony #15
      </p>{" "}
      <img
        src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
        style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
      />
    </div>
    <button value ="15" id="15" type="button"
      className="solbuttoninner"
      style={{
        margin: "10px auto",
      }}
    >
      Stake/Unstake
    </button>
    <hr />
  </div></template>
  
 
</div>
  <div type="button"

  onClick={e => stake_nft_knight(e.target.value)}
   id="locationunstakednftsnights"
   className="row"
   style={{ textAlign: "center" }}
 >
   <template><div class="col-md-4">
     <div
       style={{
         textAlign: "center",
         borderstyle: "solid",
       }}
     >
       <p class="Name" className="paragraph">
         Archer of Harmony #15
       </p>{" "}
       <img
         src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
         style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
       />
     </div>
     <button value ="15" id="15" type="button"
       className="solbuttoninner"
       style={{
         margin: "10px auto",
       }}
     >
       Stake/Unstake
     </button>
     <hr />
   </div></template>
   
  
 </div>
            </form>
          </Card.Body>
          <Card.Body>
          <button type ="button" onClick={render_staked_cards} className="solbuttoninner" style={{ margin: "auto" , display: "inline-block", marginRight: "10px", marginBottom: "10px"}}> Show staked NFTs</button>
            <form id="nft">
              <div  
              type="button" onClick={e => Unstake_nft(e.target.value)}
                  id= "locationstakednfts"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div   id="templatestaked" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                      
                      
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value="15" type="button" 
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
                
              </div>

              <div  
              type="button" onClick={e => Unstake_nft_knight(e.target.value)}
                  id= "locationstakednftsknights"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div   id="templatestakedknights" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                      
                      
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value="15" type="button" 
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
                
              </div>
              <div  
              type="button" onClick={e => Unstake_nft_mage(e.target.value)}
                  id= "locationstakednftsmages"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div   id="templatestakedmages" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                      
                      
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value="15" type="button" 
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
                
              </div>

              <div  
              type="button" onClick={e => Unstake_nft_punk(e.target.value)}
                  id= "locationstakednftspunks"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div   id="templatestakedpunks" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                      
                      
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "6rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value="15" type="button" 
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
                
              </div>
              
           
            </form>
          </Card.Body>
          {/*
          
           <Row className="mb-4">
            <Col md={6}>
              <button
                onClick={render_unstaked_cards}
                className="solbuttoninnermint "
                style={{ margin: "auto" }}
              >
                Show unstaked nfts
              </button>
            </Col>
            <Col md={6}>
              <button type="button"
                onClick={render_staked_cards}
                style={{ margin: "auto" }}
                className="solbuttoninnermint"
              >
                Show staked nfts
              </button>
            </Col>
                  </Row> */}
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

const render_unstaked_cards = async () => {
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];


  //start archers
  const notstaked = await archercontract.methods
    .balanceOf(account)
    .call(); // here should be account in the bracket

  // document.getElementById("nfts").innerHTML = ""

  for (let i = 0; i < notstaked; i++) {
    const tokenId = await archercontract.methods
      .tokenOfOwnerByIndex(account, i)
      .call();


      

    const tokentemplate = document.getElementById("templateunstaked").cloneNode(true);
   
    tokentemplate.querySelector(
      "p"
    ).innerText = `Archer of Harmony #${tokenId}`;
 
    tokentemplate.querySelector(
      "img"
    ).src = `https://ipfs.io/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/${tokenId}.png`;
    tokentemplate.querySelector("button").innerText = "Stake";
    tokentemplate.querySelector("button").value = tokenId;

    document.getElementById("locationunstakednftsarchers").append(tokentemplate);
  }

  //end archers
  //start punks

const notstakedpunks = await punkcontract.methods
  .balanceOf(account)
  .call(); // here should be account in the bracket

// document.getElementById("nfts").innerHTML = ""

for (let i = 0; i < notstakedpunks; i++) {
  const tokenId = await punkcontract.methods
    .tokenOfOwnerByIndex(account, i)
    .call();


    

  const tokentemplate = document.getElementById("templateunstaked").cloneNode(true);
 
  tokentemplate.querySelector(
    "p"
  ).innerText = `Harmony Punk #${tokenId}`;

  tokentemplate.querySelector(
    "img"
  ).src = `https://ipfs.io/ipfs/QmXNEzPhwbnSWUih8Y2aHash4wN1Qsyurgwyt8cjSmLSbh/${tokenId}.png`;
  tokentemplate.querySelector("button").innerText = "Stake";
  tokentemplate.querySelector("button").value = tokenId;

  document.getElementById("locationunstakednftspunks").append(tokentemplate);
}

//end Punks
//start Knights

const notstakedknights = await knightcontract.methods
  .balanceOf(account)
  .call(); // here should be account in the bracket

// document.getElementById("nfts").innerHTML = ""

for (let i = 0; i < notstakedknights; i++) {
  const tokenId = await knightcontract.methods
    .tokenOfOwnerByIndex(account, i)
    .call();


    

  const tokentemplate = document.getElementById("templateunstaked").cloneNode(true);
 
  tokentemplate.querySelector(
    "p"
  ).innerText = `Knight of Harmony #${tokenId}`;

  tokentemplate.querySelector(
    "img"
  ).src = `https://ipfs.io/ipfs/QmXz63K54NXz6CbWyqAWykCNKcfTje1VANohv5d4TqD5sr/${tokenId}.png`;
  tokentemplate.querySelector("button").innerText = "Stake";
  tokentemplate.querySelector("button").value = tokenId;

  document.getElementById("locationunstakednftsnights").append(tokentemplate);

  //end Knights
}
//start Mages

const notstakedmages = await magecontract.methods
  .balanceOf(account)
  .call(); // here should be account in the bracket

// document.getElementById("nfts").innerHTML = ""

for (let i = 0; i < notstakedmages; i++) {
  const tokenId = await magecontract.methods
    .tokenOfOwnerByIndex(account, i)
    .call();


    

  const tokentemplate = document.getElementById("templateunstaked").cloneNode(true);
 
  tokentemplate.querySelector(
    "p"
  ).innerText = `Mage of Harmony #${tokenId}`;

  tokentemplate.querySelector(
    "img"
  ).src = `https://ipfs.io/ipfs/QmX95ukDyyNikDnnB3kHYZogcZjayKiYBDTUpyKbqqyT1N/${tokenId}.png`;
  tokentemplate.querySelector("button").innerText = "Stake";
  tokentemplate.querySelector("button").value = tokenId;

  document.getElementById("locationunstakednftsmages").append(tokentemplate);

  //end Mages
}


};

const render_staked_cards = async () => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];


//start archers

  const amount = await stakingcontract.methods
    .stakers(account)
    .call();




   

  

;

  // document.getElementById("nfts").innerHTML = ""

  for (let i = 0; i < amount[0]; i++) {
    const tokenIDs = await stakingcontract.methods
      .getStakedTokens(account)
      .call();

    const TID = tokenIDs[i].tokenId; // value is a tuple. which gets deconstruted here

    const tokentemplate = document.getElementById("templatestaked").cloneNode(true);
   
    tokentemplate.querySelector("p").innerText = `Archer of Harmony #${TID}`;
    // tokentemplate.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${TID}`
    tokentemplate.querySelector(
      "img"
    ).src = `https://ipfs.io/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/${TID}.png`;
   
   
  
    
   
   
   
   
 
    tokentemplate.querySelector("button").innerText = "Unstake";
    tokentemplate.querySelector("button").value = TID;
 
    

    document.getElementById("locationstakednfts").append(tokentemplate);
  }

  // end archers
   // start mages
   const amount_mages = await stakingcontractmages.methods
   .stakers(account)
   .call();

;

 // document.getElementById("nfts").innerHTML = ""

 for (let i = 0; i < amount_mages[0]; i++) {
   const tokenIDs_mages = await stakingcontractmages.methods
     .getStakedTokens(account)
     .call();

   const TID = tokenIDs_mages[i].tokenId; // value is a tuple. which gets deconstruted here

   const tokentemplate = document.getElementById("templatestaked").cloneNode(true);
  
   tokentemplate.querySelector("p").innerText = `Mage of Harmony #${TID}`;
   // tokentemplate.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${TID}`
   tokentemplate.querySelector(
     "img"
   ).src = `https://ipfs.io/ipfs/QmX95ukDyyNikDnnB3kHYZogcZjayKiYBDTUpyKbqqyT1N/${TID}.png`;
  
  
 
   
  
  
  
  

   tokentemplate.querySelector("button").innerText = "Unstake";
   tokentemplate.querySelector("button").value = TID;

   

   document.getElementById("locationstakednftsmages").append(tokentemplate);
 }
 //end mages
 // start knights
  const amount_knights = await stakingcontractknights.methods
    .stakers(account)
    .call();

;

  // document.getElementById("nfts").innerHTML = ""

  for (let i = 0; i < amount_knights[0]; i++) {
    const tokenIDs_knights = await stakingcontractknights.methods
      .getStakedTokens(account)
      .call();

    const TID = tokenIDs_knights[i].tokenId; // value is a tuple. which gets deconstruted here

    const tokentemplate = document.getElementById("templatestaked").cloneNode(true);
   
    tokentemplate.querySelector("p").innerText = `Knight of Harmony #${TID}`;
    // tokentemplate.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${TID}`
    tokentemplate.querySelector(
      "img"
    ).src = `https://ipfs.io/ipfs/QmXz63K54NXz6CbWyqAWykCNKcfTje1VANohv5d4TqD5sr/${TID}.png`;
   
   
  
    
   
   
   
   
 
    tokentemplate.querySelector("button").innerText = "Unstake";
    tokentemplate.querySelector("button").value = TID;
 
    

    document.getElementById("locationstakednftsknights").append(tokentemplate);
  }
  //end knights
  //start punks

  const amount_punks = await stakingcontractpunks.methods
    .stakers(account)
    .call();


  

   

  

;

  // document.getElementById("nfts").innerHTML = ""

  for (let i = 0; i < amount_punks[0]; i++) {
    const tokenIDs_punks = await stakingcontractpunks.methods
      .getStakedTokens(account)
      .call();

    const TID = tokenIDs_punks[i].tokenId; // value is a tuple. which gets deconstruted here

    const tokentemplate = document.getElementById("templatestaked").cloneNode(true);
   
    tokentemplate.querySelector("p").innerText = `Harmony Punk #${TID}`;
    // tokentemplate.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${TID}`
    tokentemplate.querySelector(
      "img"
    ).src = `https://ipfs.io/ipfs/QmXNEzPhwbnSWUih8Y2aHash4wN1Qsyurgwyt8cjSmLSbh/${TID}.png`;
   
   
  
    
   
   
   
   
 
    tokentemplate.querySelector("button").innerText = "Unstake";
    tokentemplate.querySelector("button").value = TID;
 
    

    document.getElementById("locationstakednftspunks").append(tokentemplate);

    //endpunks
  }

};

export default StakeCard;
