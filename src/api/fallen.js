const express = require('express');

const Joi = require('@hapi/joi');
const { id } = require('monk');

const schema = Joi.object({
  Name: Joi.string().trim().required(),
  DOB: Joi.string().trim().required(),
  handle: Joi.string().uri(),
});

const url = 'localhost:27017/fallen';

const db = require('monk')(url);

const fallen = db.get('fallen');
const router = express.Router();

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await fallen.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
  // res.json({

  //   message: 'Hello Read All',

  // });
});

// READ one
router.get('/:id' , async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await fallen.findOne({
      _id: id,
    });
    res.json(items);
  } catch (error) {
    next(error);
  }

  // res.json({

  //   message: 'Hello Read One',

  // });
});

// Create one
router.post('/' , async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const item = await fallen.findOne(req.body);
    if (item) return res.json({ 
      message: 'ERROR',
      'Document Exists': 'Yes' });
    const inserted = await fallen.insert(value);
    res.json(value);
  } catch (error) {
    next(error);
  }
  // res.json({

  //   message: 'Hello create one',
  // });
});

// Update one

router.put('/:id' , async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await fallen.findOne({
      _id: id,
    });
    const value = await schema.validateAsync(req.body);
    const item = await fallen.findOne(req.body);
    if (!item) return res.json({ 
      message: 'ERROR',
      'Document Doesn\'t Exists': 'Yes' });
    const updated = await fallen.update({
      _id: id, },
    {
      $set: value
    });
    res.json(value);
  } catch (error) {
    next(error);
  }


  // res.json({
    
  //   message: 'Hello Update one'
  // });
});

// Delete one

router.delete('/:id' , async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await fallen.findOne({
      _id: id,
    });
    const deleted = await fallen.remove({_id: id });
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }

  // res.json({
  //   message: 'Hello Delete One'
  // });
});

module.exports = router;
