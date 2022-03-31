pragma solidity >=0.4.22 <0.9.0;

contract CrowdFunding
{
    string public name = "Crowd Funding smart contract";

    //working with ether only here

    event EtherSent(
    address from_account,
    uint amount,
    address to_account,
    uint balance_remaining

    
  );

    //transfers ether from sender to smart contract / liquidity pool
    function sendcoins(address payable _to) public payable 
    {
        uint EtherAmount = msg.value;
        // address payable sc_address = address(this);
        require(address(this).balance >= EtherAmount);

         emit EtherSent(msg.sender, EtherAmount,address(this),msg.sender.balance);//testing

        _to.transfer(EtherAmount);
        
        emit EtherSent(msg.sender, EtherAmount,address(this),msg.sender.balance);


    }

    function deposit() payable public {
        // nothing to do!
        emit EtherSent(msg.sender, msg.value, address(this),msg.sender.balance);
    }

    function contractBalance() public view returns(uint) {
      return address(this).balance;
}

// function random_address_Balance(address a) public view returns(uint) {
//       return (a).balance;

// function contractAddress() public view returns (uint) {
//     return address(this);
// }


    


}