const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk baca data form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API test drive (opsional)
app.post('/api/test-drive', (req, res) => {
  const { name, phone, model, date } = req.body;
  console.log(`Test drive: ${name} - ${model} on ${date}`);
  res.json({ message: 'Permintaan test drive diterima. Terima kasih!' });
});

// Jalankan server (ini yang bikin proses tetap hidup)
app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});