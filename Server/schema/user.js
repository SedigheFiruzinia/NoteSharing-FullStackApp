const mongoose = require ('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new mongoose.Schema({
  name: String,
  passwordHash: String,  
  username: {
      type:String,
      unique:true,
      required :true,
      minlength: 3
    },
    
  notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notes'//name of exported model in ./schema/note.js
      }
    ],
  
  sharedNotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Notes'//name of exported model in ./schema/note.js
    }
  ]
  
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Users', userSchema)