// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    address public owner;
    bool public votingOpen;

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint public candidatesCount;

    event VoteCast(uint indexed candidateId, address indexed voter);

    constructor() {
        owner = msg.sender;
        votingOpen = true;
        addCandidate("Pikachu");
        addCandidate("Charizard");
        addCandidate("Squirtle");
        addCandidate("Bulbasaur");
    }

    function addCandidate(string memory name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    function vote(uint candidateId) public {
        require(votingOpen, "Voting is closed.");
        require(!hasVoted[msg.sender], "You have already voted.");
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate.");

        hasVoted[msg.sender] = true;
        candidates[candidateId].voteCount++;

        emit VoteCast(candidateId, msg.sender);
    }

    function closeVoting() public {
        require(msg.sender == owner, "Only owner can close voting.");
        votingOpen = false;
    }
}
