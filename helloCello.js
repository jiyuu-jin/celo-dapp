// add package imports and setup up here
const Kit = require('@celo/contractkit')
const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')

async function awaitWrapper(){
    // add async/await code in this function
    let goldtoken = await kit.contracts.getGoldToken()
    let balance = await goldtoken.balanceOf(anAddress)

    console.log(account.address)
    console.log(balance.toString())
}

awaitWrapper()