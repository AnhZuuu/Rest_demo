const Blackpink = require('../models/blackpink');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let nationData = [
    {"id": "1", "name":"Việt Nam"},
    {"id": "2", "name":"Korea"},
    {"id": "3", "name":"Thái Lan"},
    {"id": "4", "name":"Việt Nam"},

];
class blackpinkController {
    getAll(req, res) {
        Blackpink.find({})
        .then((blackpink) => {
            res.statusCode = 200;
            res.json(blackpink);
        })
    }
    addBlackpink(req, res) {
        Blackpink.create(req.body)
        .then((blackpink) => {
            res.json(blackpink);
        })
    }
    deleteBlackpink(req, res) {
        Blackpink.deleteOne({})
        .then(() => {
            res.statusCode = (200).json({message: 'delete oldest document'})
        })
    }
    updateBlackpink(req, res) {
        res.statusCode = (403).message('Not supported');
    }
    detailBlackpink(req, res) {
        Blackpink.findById(req.params.blackpinkID)
        .then((bl) => {
            res.json(bl);
        })
    }
    deleteMember(req, res) {
        Blackpink.findByIdAndDelete(req.params.blackpinkID)
        .then((res) => {
            res.statusCode = (200).json('Member coook');
        })
    }
    updateMember(req, res) {
        Blackpink.findByIdAndUpdate(req.params.blackpinkId, {
            $set: req.body
        }, {new: true})
        .then((bl)=> {
            res.json(bl);
        })
        
    }
    // 4 tháng 6 server-side
    getBlackpink(req, res) {
        Blackpink.find({})
            .then((blackpinks)=> {
                res.render('index', {
                    title: 'List of Blackpink',
                    blackpinkData : blackpinks
                })
            })
    }
    create(req, res) {
        const bl = new Blackpink(req.body);
        bl.save()
        .then(()=> res.redirect('/blackpink'));
    }
    deleteMember(req, res) {
        Blackpink.findByIdAndDelete(req.params.blackpinkId)
        .then(() => res.redirect('/blackpink'));
    }
    formEdit(req, res) {
        const blackpinkId = req.params.blackpinkId;
        let viewData = {};
        Blackpink.findById(blackpinkId)
        .then((blackpink) => {
            res.render('editBlackPink', {
                title: 'Detail BlackPink',
                bl: blackpink,
                nationList : nationData
            });
        });
    }
    edit(req, res) {
        Blackpink.updateOne({_id : req.params.blackpinkId}, req.body)
        .then(() => {
            res.redirect('/blackpink');
        })
    }

}

module.exports = new blackpinkController;

