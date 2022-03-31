const { assert } = require('chai');


const CrowdFunding = artifacts.require('CrowdFunding')

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}



contract ('CrowdFunding', (accounts) => {

    let cf

    before(async () => {
        cf = await CrowdFunding.new();
      })
    

      describe('Crowd Funding deployment', async () => {
        it('contract has a name', async () => {
          const name = await cf.name()
          assert.equal(name, 'Crowd Funding smart contract')
        })
    })

   

    describe("check deposit of coins to smart contract",async() =>{
      it("should have balnce of 2", async() =>{

        const sc_address = await cf.address

        cf.deposit({from:accounts[0],value:tokens("2")})
       
        const sc_balance = await cf.contractBalance()//smart contract balance
      
        assert.equal(sc_balance.toString(), tokens("2") );

      })
    })

    describe("check sending of coins from smart contract to first account",async() =>{
      it("should have balance of 2", async() =>{

        const sc_address = await cf.address
        // let acc_bal = await web3.eth.getBalance(accounts[0])
        // cf.deposit({from:accounts[0],value:tokens("2")})//empty accounts[0]
        // acc_bal = await web3.eth.getBalance(accounts[0])
        // console.log(acc_bal.toString())
        // assert.equal(acc_bal.toString(), tokens("0") );//check if empty

        cf.sendcoins({from:sc_address,value:tokens("2")})//send 2 eth to accounts[0]
       
        const sc_balance = await cf.contractBalance()//smart contract balance
        const acc_bal_new = await web3.eth.getBalance(accounts[0])
        console.log(acc_bal_new.toString())
        
        assert.equal(acc_bal_new.toString(), tokens("2") );

      })
    })
    

})