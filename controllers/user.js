const user = require('../models/user')

  module.exports = {
    index: async (req, res) => {
      try {
        const users = await user.find()
        if(users.length >0){
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
          })
          
        }else{
          res.json({
            status: false,
            messege: "Data masih kosong"
          })
        }
      } catch (error) {
        res.status(400).json({sucess: false
        })
      }
      
      },
      show: async (req, res) => {
        try {
          const users = await user.findById(req.params.id)
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Detail berhasil di ambil"
          })
        } catch (error) {
          res.status(404).json({
            success: false
          });
        }
      },
      store: async(req, res) => {
        try {
          const users = await user.create(req.body)
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil di tambahkan"
          })
        } catch (error) {
          res.status(404).json({
            success: false
          });
        }
        // users.push(req.body)
        
      },
      update: async (req, res) => {
        try {
          const users = await user.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            rinValidators: true
          })
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil di ubah"
          })
        } catch (error) {
          res.status(404).json({
            success: false
          });
        }
        
      },
      delete: async (req, res) => {
        try {
          const users = await user.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil di hapus"
        })
        } catch (error) {
          res.status(404).json({
            success: false
          });
        }
    }
  }