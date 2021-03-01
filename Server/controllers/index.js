const db = require("../models");
const Notes = db.notes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("resss==>", req)

  if (!req.body.Name) {
    
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const note = {
    Name: req.body.Name,
    Password: req.body.Password,
    // published: req.body.published ? req.body.published : false,
  };

  Notes.create(note)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Notes",
      });
    });
};

exports.findAll = (req, res) => {
  const Name = req.query.Name;

  Notes.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Notes",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Notes.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Notes with id=" + id,
      });
    });
};

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Notes.update(req.body, {
//     where: { id: id },
//   }).then((data) => {
//     if (data) {
//       res.send({
//         message: "Note was updated successfully",
//       });
//     } else {
//       res.send({
//         message: `Cannot update Note with id=${id}`,
//       });
//     }
//   });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Notes.destroy({
//     where: { id: id },
//   }).then((data) => {
//     if (data) {
//       res.send({
//         message: "Note was delete successfully!",
//       });
//     } else {
//       res.send({
//         message: `Cannot delete Note with id=${id}`,
//       });
//     }
//   });
// };