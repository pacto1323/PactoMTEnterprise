// ======================
// Puerto
// ======================

process.env.PORT = process.env.PORT || 3000;

// ======================
// Entorno
// ======================

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// ======================
// Vencimiento del token
// ======================

process.env.CADUCIDAD_TOKEN = "7d";

// ======================
// SEED de autenticación
// ======================

process.env.SEED = "ESTE_ES_LA_SEED_SUPER_SEGURA" || "seed-desarrollo";

// ======================
// Twilio
// ======================
process.env.TWILIO_ACCOUNT_SID = "";
process.env.TWILIO_AUTH_TOKEN = "";

// ======================
// Base de datos
// ======================

let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/pacto";
} else {
  urlDB = 'mongodb+srv://pacto_master:NLzavoC7jMCTaHqP@cluster0.6pqv0.mongodb.net/pacto';
}

process.env.URLDB = urlDB;
