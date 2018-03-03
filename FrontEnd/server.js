var Web3 = require('web3');


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    web3.eth.defaultAccount = web3.eth.accounts[0];
       
    
    var _storedData = "harshs";
	var _authorName = "harsht" ;
	var _Tag = "harsht" ;
	var newscontractContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"returnNews","outputs":[{"name":"storedData_","type":"string"},{"name":"authorName_","type":"string"},{"name":"Tag_","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authorName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"voterAddress","type":"address"},{"name":"Voted","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Tag","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_storedData","type":"string"},{"name":"_authorName","type":"string"},{"name":"_Tag","type":"string"}],"name":"setNews","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_storedData","type":"string"},{"name":"_authorName","type":"string"},{"name":"_Tag","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
	var newscontract = newscontractContract.new(
	   _storedData,
	   _authorName,
	   _Tag,
	   {
	     from: web3.eth.accounts[0], 
	     data: '0x6060604052341561000f57600080fd5b604051610c9f380380610c9f83398101604052808051820191906020018051820191906020018051820191905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600190805190602001906100939291906100ca565b5081600290805190602001906100aa9291906100ca565b5080600390805190602001906100c19291906100ca565b5050505061016f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010b57805160ff1916838001178555610139565b82800160010185558215610139579182015b8281111561013857825182559160200191906001019061011d565b5b509050610146919061014a565b5090565b61016c91905b80821115610168576000816000905550600101610150565b5090565b90565b610b218061017e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b9f9ae8146100935780632a1afcd9146101f957806341c0e1b5146102875780636a64aabb1461029c5780638da5cb5b1461032a578063a3ec138d1461037f578063b07cedb014610403578063fcaef63a14610491575b600080fd5b341561009e57600080fd5b6100a6610574565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156100ee5780820151818401526020810190506100d3565b50505050905090810190601f16801561011b5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015610154578082015181840152602081019050610139565b50505050905090810190601f1680156101815780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101ba57808201518184015260208101905061019f565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b341561020457600080fd5b61020c610768565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024c578082015181840152602081019050610231565b50505050905090810190601f1680156102795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561029257600080fd5b61029a610806565b005b34156102a757600080fd5b6102af610840565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ef5780820151818401526020810190506102d4565b50505050905090810190601f16801561031c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561033557600080fd5b61033d6108de565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038a57600080fd5b6103b6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610903565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b341561040e57600080fd5b610416610954565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045657808201518184015260208101905061043b565b50505050905090810190601f1680156104835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049c57600080fd5b610572600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506109f2565b005b61057c610a3c565b610584610a3c565b61058c610a3c565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106225780601f106105f757610100808354040283529160200191610622565b820191906000526020600020905b81548152906001019060200180831161060557829003601f168201915b5050505050925060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b5050505050915060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561075c5780601f106107315761010080835404028352916020019161075c565b820191906000526020600020905b81548152906001019060200180831161073f57829003601f168201915b50505050509050909192565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107fe5780601f106107d3576101008083540402835291602001916107fe565b820191906000526020600020905b8154815290600101906020018083116107e157829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108d65780601f106108ab576101008083540402835291602001916108d6565b820191906000526020600020905b8154815290600101906020018083116108b957829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ea5780601f106109bf576101008083540402835291602001916109ea565b820191906000526020600020905b8154815290600101906020018083116109cd57829003601f168201915b505050505081565b8260019080519060200190610a08929190610a50565b508160029080519060200190610a1f929190610a50565b508060039080519060200190610a36929190610a50565b50505050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a9157805160ff1916838001178555610abf565b82800160010185558215610abf579182015b82811115610abe578251825591602001919060010190610aa3565b5b509050610acc9190610ad0565b5090565b610af291905b80821115610aee576000816000905550600101610ad6565b5090565b905600a165627a7a7230582007badf727c4e173cccacd3c3c3b310938a7614a8a765206b69a0f1cdc05a38750029', 
	     gas: '4700000'
	   }, function (e, contract){
	    console.log(e, contract);
	    if (typeof contract.address !== 'undefined') {
	         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
	    }
	})

	console.log(newscontract)      
}


/*createNewNewsBlock(String _storedData,String _authorName , String _Tag){
	var newscontractContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"returnNews","outputs":[{"name":"storedData_","type":"string"},{"name":"authorName_","type":"string"},{"name":"Tag_","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authorName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"voterAddress","type":"address"},{"name":"Voted","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Tag","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_storedData","type":"string"},{"name":"_authorName","type":"string"},{"name":"_Tag","type":"string"}],"name":"setNews","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_storedData","type":"string"},{"name":"_authorName","type":"string"},{"name":"_Tag","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
	var newscontract = newscontractContract.new(
	   _storedData,
	   _authorName,
	   _Tag,
	   {
	     from: web3.eth.accounts[1], 
	     data: '0x6060604052341561000f57600080fd5b604051610c9f380380610c9f83398101604052808051820191906020018051820191906020018051820191905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600190805190602001906100939291906100ca565b5081600290805190602001906100aa9291906100ca565b5080600390805190602001906100c19291906100ca565b5050505061016f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010b57805160ff1916838001178555610139565b82800160010185558215610139579182015b8281111561013857825182559160200191906001019061011d565b5b509050610146919061014a565b5090565b61016c91905b80821115610168576000816000905550600101610150565b5090565b90565b610b218061017e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b9f9ae8146100935780632a1afcd9146101f957806341c0e1b5146102875780636a64aabb1461029c5780638da5cb5b1461032a578063a3ec138d1461037f578063b07cedb014610403578063fcaef63a14610491575b600080fd5b341561009e57600080fd5b6100a6610574565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156100ee5780820151818401526020810190506100d3565b50505050905090810190601f16801561011b5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015610154578082015181840152602081019050610139565b50505050905090810190601f1680156101815780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101ba57808201518184015260208101905061019f565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b341561020457600080fd5b61020c610768565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024c578082015181840152602081019050610231565b50505050905090810190601f1680156102795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561029257600080fd5b61029a610806565b005b34156102a757600080fd5b6102af610840565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ef5780820151818401526020810190506102d4565b50505050905090810190601f16801561031c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561033557600080fd5b61033d6108de565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038a57600080fd5b6103b6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610903565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b341561040e57600080fd5b610416610954565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045657808201518184015260208101905061043b565b50505050905090810190601f1680156104835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049c57600080fd5b610572600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506109f2565b005b61057c610a3c565b610584610a3c565b61058c610a3c565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106225780601f106105f757610100808354040283529160200191610622565b820191906000526020600020905b81548152906001019060200180831161060557829003601f168201915b5050505050925060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b5050505050915060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561075c5780601f106107315761010080835404028352916020019161075c565b820191906000526020600020905b81548152906001019060200180831161073f57829003601f168201915b50505050509050909192565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107fe5780601f106107d3576101008083540402835291602001916107fe565b820191906000526020600020905b8154815290600101906020018083116107e157829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108d65780601f106108ab576101008083540402835291602001916108d6565b820191906000526020600020905b8154815290600101906020018083116108b957829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ea5780601f106109bf576101008083540402835291602001916109ea565b820191906000526020600020905b8154815290600101906020018083116109cd57829003601f168201915b505050505081565b8260019080519060200190610a08929190610a50565b508160029080519060200190610a1f929190610a50565b508060039080519060200190610a36929190610a50565b50505050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a9157805160ff1916838001178555610abf565b82800160010185558215610abf579182015b82811115610abe578251825591602001919060010190610aa3565b5b509050610acc9190610ad0565b5090565b610af291905b80821115610aee576000816000905550600101610ad6565b5090565b905600a165627a7a7230582007badf727c4e173cccacd3c3c3b310938a7614a8a765206b69a0f1cdc05a38750029', 
	     gas: '4700000'
	   }, function (e, contract){
	    console.log(e, contract);
	    if (typeof contract.address !== 'undefined') {
	         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
	    }
	})

	console.log(newscontract)
}*/