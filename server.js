// 📦 Import des modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 🚀 Initialisation de l'app
const app = express();
app.use(cors());
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.send(res.send('API du Backend LY BOUSSO 45 est en ligne et fonctionnelle !'););
});


// 🌐 Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => console.error('❌ Erreur MongoDB :', err));

// 🛣️ Import des routes
const prayerRoutes = require('./routes/prayerRoutes');
app.use('/api/prayers', prayerRoutes);

// 🏁 Lancement du serveur
const PORT = process.env.PORT || 5000;
// On spécifie l'hôte '0.0.0.0' pour s'assurer que l'app écoute sur toutes les interfaces
app.listen(PORT, '0.0.0.0', () => { 
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});