// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/*
 * @create contract named certificate
 * @ more comment
 */
contract Emurgo {
    string name;
    uint level;
    
    event Certificate(
        string name,
        uint level
    );
    
    function setCertificate(string memory _name, uint _level) public {
        name = _name;
        level = _level;
        emit Certificate(_name, _level);
    }
    
    function getCertificate() public view returns (string memory, uint){
        return(name, level);
    }


}