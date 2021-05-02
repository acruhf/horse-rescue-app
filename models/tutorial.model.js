<<<<<<< HEAD
// module.exports = mongoose => {
//     var schema = mongoose.Schema(
//       {
//         name: String,
//       },
      
//     );
=======
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    );
>>>>>>> parent of fd1e5f4... added horselist
  
//     schema.method("toJSON", function() {
//       const { __v, _id, ...object } = this.toObject();
//       object.id = _id;
//       return object;
//     });
  
//     const Tutorial = mongoose.model("tutorial", schema);
//     return Tutorial;
//   };