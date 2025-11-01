const express = require('express');
const route = express.Router();
const conflictsCheckService = require('../service/conflictsCheckService');
route.post('/checkConflicts', (req, res) => {
    const response = conflictsCheckService(req);
    if (response){
        return res.status(200).json({message: "There is a Conflict between Proposed and Existing meeting"});
    } else {
        return res.status(200).json({message: "No Conflict, Meeting can be scheduled"});
    }
});

module.exports = route;