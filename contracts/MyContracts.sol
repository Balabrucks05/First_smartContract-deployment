// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

contract FCDT{
    struct Todo{
        string work;
        bool status;
    }
    Todo todo;

    function addWork(string memory _work,bool _status)public{
        todo = Todo({work:_work, status:_status});
    }
    function getWork()public view returns(bool){
        return todo.status;
    }
}