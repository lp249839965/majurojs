var mongoose = require('mongoose'),
  mongoose_auth = require('mongoose-auth'),
  Schema = mongoose.Schema;

var CustomGeoSchema = new Schema({
  latlngs: Array,
  updated: Date
});
CustomGeoSchema.index({ updated: -1 });

var CustomGeo = mongoose.model('CustomGeo', CustomGeoSchema);

exports.CustomGeo = CustomGeo;
