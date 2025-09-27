const PrayerTime = require('../models/PrayerTime');
const axios = require('axios');

const fetchAndSavePrayerTimes = async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get('http://api.aladhan.com/v1/timingsByCity', {
      params: {
        city,
        country: 'Senegal',
        method: 2
      }
    });

    const timings = response.data.data.timings;
    const today = new Date().toISOString().split('T')[0];

    const prayerDoc = new PrayerTime({
      city,
      date: today,
      fajr: timings.Fajr,
      dhuhr: timings.Dhuhr,
      asr: timings.Asr,
      maghrib: timings.Maghrib,
      isha: timings.Isha
    });

    await prayerDoc.save();
    res.status(200).json(prayerDoc);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des horaires' });
  }
};

module.exports = { fetchAndSavePrayerTimes };
