if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}
var abi = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "Certificate",
    type: "event",
  },
  {
    inputs: [],
    name: "getCertificate",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_level", type: "uint256" },
    ],
    name: "setCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var contractAddress = "0x4573c7f2B97b82a8a16D7C25a5A5A45C4ff72C98";
async function init() {
  certContract = await new web3.eth.Contract(abi, contractAddress);
  let accounts = await web3.eth.getAccounts();
  web3.eth.defaultAccount = accounts[0];
}

init();

async function register() {
  let fullName = document.getElementById("fullName").value;
  let levelOfStudy = document.getElementById("levelOfStudy").value;
  certContract.methods
    .setCertificate(fullName, levelOfStudy)
    .send({ from: web3.eth.defaultAccount })
    .on("receipt", function (receipt) {
      document.getElementById("name").textContent =
        receipt.events.Certificate.returnValues.name;
      document.getElementById("level").textContent =
        receipt.events.Certificate.returnValues.level;
    });
}

document.getElementById("button").addEventListener("click", register);
