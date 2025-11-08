// SegreTrack - Smart Waste Management App
// Built for Google Cloud Run Hackathon (Nov 2025)

const express = require('express');
const app = express();

// Configuration
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serves frontend files

// Health check endpoint (for Cloud Run)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'SegreTrack', version: '1.0.0' });
});

// Main API - classify waste item
app.post('/api/classify', (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ error: 'Please provide an item name (e.g., "plastic bottle")' });
  }

  // Simple classification logic
  const input = item.toLowerCase();
  let category = 'non-recyclable';

  if (input.includes('plastic') || input.includes('bottle') || input.includes('can')) {
    category = 'recyclable';
  } else if (input.includes('banana') || input.includes('food') || input.includes('peel')) {
    category = 'biodegradable';
  }

  res.json({ item, category });
});

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ SegreTrack server running on port ${PORT}`);
});
