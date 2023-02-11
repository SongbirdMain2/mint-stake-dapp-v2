import Web3 from 'web3';

 import swal from 'sweetalert';

const { ethereum } = window;
const web3 = new Web3(ethereum);




//archer + knight + punk staking sc + abi
const stakingknightAddress ="0xd6A6Bd338a501481C7112C7929Cc9F45Fc180a12"
const stakingmageAddress ="0xa187fC3666b5ddFf764BC7993F1F30c8FE94DEC9"
const stakingpunkAddress ="0x6200E6096C9C088d9A9F40dea32b456c6Cd3bE70"
const stakingAddress = "0x348825cf6a6358fa155A9D88eF315dAc4A547010";
const stakingcontractabi = require("../staking_SC_abi.json");



//archer + punks + knights + ERC-721 abi 

const knightAddress = "0xa586acaEfA4F1F61bb84c89ea4350a8736E54fD9";
const mageAddress = "0x4eb03C2Fb87bDe0dC30ffC320e8a84472B5d4C75";
const archerAddress = "0xadb44ba95f1201b8E8383428F81653426DF9238a";
const punksAddress = "0x48dC7d943Ff998ae4B277C1e0823826b422fC33B";
const erc721contractabi = require("../erc721_abi.json");

//Harmony token + minABI to show balance

const haraddress = "0xebCA6484DeF8C9A55B4c0A41Ab38A1bF3D5A8396"
const minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
]


export const erc20contract = new web3.eth.Contract(
  minABI,
  haraddress
);


export const stakingcontract = new web3.eth.Contract(
  stakingcontractabi,
  stakingAddress
);

export const stakingcontractmages = new web3.eth.Contract(
  stakingcontractabi,
  stakingmageAddress
);

export const stakingcontractknights = new web3.eth.Contract(
  stakingcontractabi,
  stakingknightAddress
);

export const stakingcontractpunks = new web3.eth.Contract(
  stakingcontractabi,
  stakingpunkAddress
);

export const magecontract = new web3.eth.Contract(
  erc721contractabi,
  mageAddress
); 

export const knightcontract = new web3.eth.Contract(
  erc721contractabi,
  knightAddress
); 

export const archercontract = new web3.eth.Contract(
  erc721contractabi,
  archerAddress
); 

export const punkcontract = new web3.eth.Contract(
  erc721contractabi,
  punksAddress
); 

//above this lane the scs get iniated, below this lane the function gets called

export const mint_harmony_punk = async () => {


  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];

  punkcontract.methods.mint(1).send({gasLimit: 285000,to: punksAddress, from: account, value: (500000000000000000000)}).then((receipt) => {
    if (receipt !== null) {swal({
      title: "Good news!",
      text: "Harmony Punk bought succesfully!",
      icon: "success",
      button: "Let me stake my Punk!",
    })
    .then((value) => {
      swal(window.location.reload());
    });}})
  
}

export const mint_archer = async () => {


  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];

  archercontract.methods.mint(1).send({gasLimit: 285000,to: archerAddress, from: account, value: (750000000000000000000)}).then((receipt) => {
    if (receipt !== null) {swal({
      title: "Good news!",
      text: "Archer bought succesfully!",
      icon: "success",
      button: "Let me stake my Archer!",
    })
    .then((value) => {
      swal(window.location.reload());
    });}})
  
}

export const mint_mage = async () => {


  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];

  magecontract.methods.mint(1).send({gasLimit: 285000,to: mageAddress, from: account, value: (750000000000000000000)}).then((receipt) => {
    if (receipt !== null) {swal({
      title: "Good news!",
      text: "Mage bought succesfully!",
      icon: "success",
      button: "Let me stake my Mage!",
    })
    .then((value) => {
      swal(window.location.reload());
    });}})
  
}

export const mint_knight = async () => {


  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];

  knightcontract.methods.mint(1).send({gasLimit: 285000,to: knightAddress, from: account, value: (750000000000000000000)}).then((receipt) => {
    if (receipt !== null) {swal({
      title: "Good news!",
      text: "Knight bought succesfully!",
      icon: "success",
      button: "Let me stake my Knight!",
    })
    .then((value) => {
      swal(window.location.reload());
    });}})
  
}

export const total_punks_minted = async () => {

const accounts = await ethereum.request({ method: "eth_accounts" });
const account = accounts[0];

const totalpunksminted = punkcontract.methods.totalSupply().call()

return totalpunksminted;

}

export const total_archers_minted = async () => {

  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];
  
  const totalarchersminted = archercontract.methods.totalSupply().call()
  
  return totalarchersminted;
  
  }

  export const total_mages_minted = async () => {

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const account = accounts[0];
    
    const totalmagesminted = magecontract.methods.totalSupply().call()
    
    return totalmagesminted;
    
    }

  export const total_knights_minted = async () => {

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const account = accounts[0];
    
    const totalknightsminted = knightcontract.methods.totalSupply().call()
    
    return totalknightsminted;
    
    }

export const owned_Har = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const availableHAR = await erc20contract.methods.balanceOf(account).call()
  

    // console.log(availableHAR)
  
   
    
   
    return availableHAR;
};

export const enable_staking = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  archercontract.methods.isApprovedForAll(account, stakingAddress).call().then((receipt) => {
    if (receipt == false) {
      archercontract.methods.setApprovalForAll(stakingAddress, true).send({from: account}).then((receipt) => {
        if (receipt !== null) {swal({
          title: "Good news!",
          text: "Staking enabled succesfully!",
          icon: "success",
          button: "Let me stake my Archers!",
        })
        .then((value) => {
          swal(window.location.reload());
        });}})
    }
  else {
    swal({
      
      text: "Staking already enabled!",
     
      button: "Let me stake my Archers!",
    })

  }
  })


};
export const enable_staking_mages = async () => { 
  


  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  magecontract.methods.isApprovedForAll(account, stakingmageAddress).call().then((receipt) => {
    if (receipt == false) {
      magecontract.methods.setApprovalForAll(stakingmageAddress, true).send({from: account}).then((receipt) => {
        if (receipt !== null) {swal({
          title: "Good news!",
          text: "Staking enabled succesfully!",
          icon: "success",
          button: "Let me stake my Mages!",
        })
        .then((value) => {
          swal(window.location.reload());
        });}})
    }
  else {
    swal({
      
      text: "Staking already enabled!",
     
      button: "Let me stake my Mages!",
    })

  }
  })
  
  
  



};

export const enable_staking_knights = async () => { 
  


  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  knightcontract.methods.isApprovedForAll(account, stakingknightAddress).call().then((receipt) => {
    if (receipt == false) {
      knightcontract.methods.setApprovalForAll(stakingknightAddress, true).send({from: account}).then((receipt) => {
        if (receipt !== null) {swal({
          title: "Good news!",
          text: "Staking enabled succesfully!",
          icon: "success",
          button: "Let me stake my Knights!",
        })
        .then((value) => {
          swal(window.location.reload());
        });}})
    }
  else {
    swal({
      
      text: "Staking already enabled!",
     
      button: "Let me stake my Knights!",
    })

  }
  })
  
  
  



};

export const enable_staking_punks = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  punkcontract.methods.isApprovedForAll(account, stakingpunkAddress).call().then((receipt) => {
    if (receipt == false) {
      punkcontract.methods.setApprovalForAll(stakingpunkAddress, true).send({from: account}).then((receipt) => {
        if (receipt !== null) {swal({
          title: "Good news!",
          text: "Staking enabled succesfully!",
          icon: "success",
          button: "Let me stake my Punks!",
        })
        .then((value) => {
          swal(window.location.reload());
        });}})
    }
  else {
    swal({
      
      text: "Staking already enabled!",
     
      button: "Let me stake my Punks!",
    })

  }
  })


};



export const claim_har = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontract.methods.claimRewards().send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: "$HAR claimed succesfully!",
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

   
};

export const claim_har_mage = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractmages.methods.claimRewards().send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: "$HAR claimed succesfully!",
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

   
};

export const claim_har_knight = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractknights.methods.claimRewards().send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: "$HAR claimed succesfully!",
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

   
};

export const claim_har_punks = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractpunks.methods.claimRewards().send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: "$HAR claimed succesfully!",
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

   
};


export const nfts_owned_not_staked = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const nftamount = await archercontract.methods.balanceOf(account).call()


  
    
   
    return nftamount;

    
};
export const nfts_owned_not_staked_knights = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const nftamountknights = await knightcontract.methods.balanceOf(account).call()


  
    
   
    return nftamountknights;
};

export const nfts_owned_not_staked_mages = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const nftamountmages = await magecontract.methods.balanceOf(account).call()


  
    
   
    return nftamountmages;
};

export const nfts_owned_not_staked_punks = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const nftamountpunks = await punkcontract.methods.balanceOf(account).call()


  
    
   
    return nftamountpunks;
};

export const stake_all_token = async () => { 

  

 
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const ownednfts = await archercontract.methods.balanceOf(account).call()
  

 


  if (ownednfts !== '0'){

 
    const unstakedIDs = await archercontract.methods.walletOfOwner(account).call()
    console.log(unstakedIDs)
    stakingcontract.methods.stake(unstakedIDs).send({from: account}).then((receipt) => {
      if (receipt !== null) {swal({
        title: "Good news!",
        text: `${ownednfts} Archer NFTs staked successfully!`,
        icon: "success",
        button: "OK",
      })
      .then((value) => {
        swal(window.location.reload());
        
      });}})
  
    
    }
    else{
      swal({
        title: "Oh no!",
        text: `You currently own no Archer NFT to stake!`,
        icon: "warning",
        button: "OK",
      })
    ;
    }
};

export const stake_all_token_mages = async () => { 

  

 
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const ownednfts = await magecontract.methods.balanceOf(account).call()
  

 


  if (ownednfts !== '0'){

 
    const unstakedIDs = await magecontract.methods.walletOfOwner(account).call()
    console.log(unstakedIDs)
    stakingcontractmages.methods.stake(unstakedIDs).send({from: account}).then((receipt) => {
      if (receipt !== null) {swal({
        title: "Good news!",
        text: `${ownednfts} Mage NFTs staked successfully!`,
        icon: "success",
        button: "OK",
      })
      .then((value) => {
        swal(window.location.reload());
        
      });}})
  
    
    }
    else{
      swal({
        title: "Oh no!",
        text: `You currently own no Mage NFT to stake!`,
        icon: "warning",
        button: "OK",
      })
    ;
    }
};

export const stake_all_token_knights = async () => { 

  

 
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const ownednfts = await knightcontract.methods.balanceOf(account).call()
  

 


  if (ownednfts !== '0'){

 
    const unstakedIDs = await knightcontract.methods.walletOfOwner(account).call()
    console.log(unstakedIDs)
    stakingcontractknights.methods.stake(unstakedIDs).send({from: account}).then((receipt) => {
      if (receipt !== null) {swal({
        title: "Good news!",
        text: `${ownednfts} Knight NFTs staked successfully!`,
        icon: "success",
        button: "OK",
      })
      .then((value) => {
        swal(window.location.reload());
        
      });}})
  
    
    }
    else{
      swal({
        title: "Oh no!",
        text: `You currently own no Knight NFT to stake!`,
        icon: "warning",
        button: "OK",
      })
    ;
    }
};

export const stake_all_token_punks = async () => { 

  

 
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const ownednfts = await punkcontract.methods.balanceOf(account).call()
  

 


  if (ownednfts !== '0'){

 
    const unstakedIDs = await punkcontract.methods.walletOfOwner(account).call()
    console.log(unstakedIDs)
    stakingcontractpunks.methods.stake(unstakedIDs).send({from: account}).then((receipt) => {
      if (receipt !== null) {swal({
        title: "Good news!",
        text: `${ownednfts} Punk NFTs staked successfully!`,
        icon: "success",
        button: "OK",
      })
      .then((value) => {
        swal(window.location.reload());
        
      });}})
  
    
    }
    else{
      swal({
        title: "Oh no!",
        text: `You currently own no Knight NFT to stake!`,
        icon: "warning",
        button: "OK",
      })
    ;
    }
};


export const unstake_all_token = async () => { 


  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const amount = await stakingcontract.methods
    .stakers(account)
    .call();

    const stakedIDs = amount.amountStaked
    const tokenIds = []
   

    if (stakedIDs !== '0'){

    for (let i = 0; i < stakedIDs; i++) {
      const tokenIDs = await stakingcontract.methods
        .getStakedTokens(account)
        .call();
  
      const TID = tokenIDs[i].tokenId; // value is a tuple. which gets deconstruted here
    
      tokenIds.push(TID)
    }

stakingcontract.methods.withdraw(tokenIds).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `${stakedIDs}Archer NFTs unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
}
else{
  swal({
    title: "Oh no!",
    text: `You currently own no Archer NFT to unstake!`,
    icon: "warning",
    button: "OK",
  })
;
}
};


export const unstake_all_token_mages = async () => { 


  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const amount = await stakingcontractmages.methods
    .stakers(account)
    .call();

    const stakedIDs = amount.amountStaked
    const tokenIds = []
   

    if (stakedIDs !== '0'){

    for (let i = 0; i < stakedIDs; i++) {
      const tokenIDs = await stakingcontractmages.methods
        .getStakedTokens(account)
        .call();
  
      const TID = tokenIDs[i].tokenId; // value is a tuple. which gets deconstruted here
    
      tokenIds.push(TID)
    }

stakingcontractmages.methods.withdraw(tokenIds).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `${stakedIDs} Mage NFTs unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
}
else{
  swal({
    title: "Oh no!",
    text: `You currently own no Mage NFT to unstake!`,
    icon: "warning",
    button: "OK",
  })
;
}
};

export const unstake_all_token_knights = async () => { 


  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const amount = await stakingcontractknights.methods
    .stakers(account)
    .call();

    const stakedIDs = amount.amountStaked
    const tokenIds = []
   

    if (stakedIDs !== '0'){

    for (let i = 0; i < stakedIDs; i++) {
      const tokenIDs = await stakingcontractknights.methods
        .getStakedTokens(account)
        .call();
  
      const TID = tokenIDs[i].tokenId; // value is a tuple. which gets deconstruted here
    
      tokenIds.push(TID)
    }

stakingcontractknights.methods.withdraw(tokenIds).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `${stakedIDs} Knight NFTs unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
}
else{
  swal({
    title: "Oh no!",
    text: `You currently own no Knight NFT to unstake!`,
    icon: "warning",
    button: "OK",
  })
;
}
};

export const unstake_all_token_punks = async () => { 


  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];

  const amount = await stakingcontractpunks.methods
    .stakers(account)
    .call();

    const stakedIDs = amount.amountStaked
    const tokenIds = []
   

    if (stakedIDs !== '0'){

    for (let i = 0; i < stakedIDs; i++) {
      const tokenIDs = await stakingcontractpunks.methods
        .getStakedTokens(account)
        .call();
  
      const TID = tokenIDs[i].tokenId; // value is a tuple. which gets deconstruted here
    
      tokenIds.push(TID)
    }

stakingcontractpunks.methods.withdraw(tokenIds).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `${stakedIDs} Punk NFTs unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
}
else{
  swal({
    title: "Oh no!",
    text: `You currently own no Knight NFT to unstake!`,
    icon: "warning",
    button: "OK",
  })
;
}
};


export const availableRewards = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const availableRewards = await stakingcontract.methods.availableRewards(account).call()
  

  
   
    
   
    return availableRewards;
};

export const availableRewardsknights = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const availableRewardsknights = await stakingcontractknights.methods.availableRewards(account).call()
  

  
   
    
   
    return availableRewardsknights;
};

export const availableRewardsmages = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const availableRewardsmages = await stakingcontractmages.methods.availableRewards(account).call()
  

  
   
    
   
    return availableRewardsmages;
};

export const availableRewardspunks = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const availableRewardspunks = await stakingcontractpunks.methods.availableRewards(account).call()
  

  
   
    
   
    return availableRewardspunks;
};

export const stakedtokens = async () => { 

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
  const stakers = await stakingcontract.methods.stakers(account).call()
  const stakedtokens = stakers[0]





  return stakedtokens;
};


export const stakedtokensmages = async () => { 

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
  const stakers = await stakingcontractmages.methods.stakers(account).call()
  const stakedtokensmages = stakers[0]





  return stakedtokensmages;
};

export const stakedtokensknights = async () => { 

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
  const stakers = await stakingcontractknights.methods.stakers(account).call()
  const stakedtokensknights = stakers[0]





  return stakedtokensknights;
};

export const stakedtokenspunks = async () => { 

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
  const stakers = await stakingcontractpunks.methods.stakers(account).call()
  const stakedtokenspunks = stakers[0]





  return stakedtokenspunks;
};

export const stake_nft = async (id) => { 
  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontract.methods.stake([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Archer #${id} staked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
};

export const stake_nft_mage = async (id) => { 
  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractmages.methods.stake([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Mage #${id} staked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
};

export const stake_nft_knight = async (id) => { 
  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractknights.methods.stake([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Knight #${id} staked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
};

export const stake_nft_punk = async (id) => { 
  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractpunks.methods.stake([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Punk #${id} staked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})
};


export const Unstake_nft = async (id) => { 


  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontract.methods.withdraw([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Archer #${id} unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

  


  

};

export const Unstake_nft_knight = async (id) => { 


  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractknights.methods.withdraw([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Knight #${id} unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

  
};

export const Unstake_nft_mage = async (id) => { 


  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractmages.methods.withdraw([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Mage #${id} unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

  
};


export const Unstake_nft_punk = async (id) => { 


  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontractpunks.methods.withdraw([id]).send({from: account}).then((receipt) => {
  if (receipt !== null) {swal({
    title: "Good news!",
    text: `Punk #${id} unstaked successfully!`,
    icon: "success",
    button: "OK",
  })
  .then((value) => {
    swal(window.location.reload());
    
  });}})

  
};

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
  
        });
        window.location.reload();
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        
        }
        ;
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
          
        };
      }
    
    } else {
      return {
        address: "",
        status: ( "You must install Metamask, a virtual Ethereum wallet, in your browser."

        ), }; } };

        export const getCurrentWalletConnected = async () => {
            if (window.ethereum) {
              try {
                const addressArray = await window.ethereum.request({
                  method: "eth_accounts",
                });
                if (addressArray.length > 0) {
                  return {
                    address: addressArray[0],
                    status: "👆🏽 Write a message in the text-field above.",
                  };
                } else {
                  return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                  };
                }
              } catch (err) {
                return {
                  address: "",
                  status: "😥 " + err.message,
                };
              }
            } else {
              return {
                address: "",
                status: ("You must install Metamask, a virtual Ethereum wallet, in your browser."

                ), }; } };

                