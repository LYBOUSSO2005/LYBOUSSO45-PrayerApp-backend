const mongoose = require('mongoose');

const PrayerTimeSchema = new mongoose.Schema({
  city: { type: String, required: true },
  date: { type: String, required: true },
  fajr: String,
  dhuhr: String,
  asr: String,
  maghrib: String,
  isha: String
});

module.exports = mongoose.model('PrayerTime', PrayerTimeSchema);
