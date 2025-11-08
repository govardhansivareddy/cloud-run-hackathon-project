const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static('public'));
app.get('/health', (req, res) => res.json({status:'ok', app:'SegreTrack'}));
app.post('/api/classify', (req,res)=>{
  const { item } = req.body;
  if(!item) return res.status(400).json({error:'Provide item: {"item":"plastic bottle"}'});
  const i = item.toLowerCase();
  let category = 'non-recyclable';
  if (i.includes('plastic')||i.includes('bottle')||i.includes('can')) category='recyclable';
  if (i.includes('banana')||i.includes('food')||i.includes('peel')) category='biodegradable';
  res.json({ item, category });
});
app.get('/', (req,res)=> res.sendFile(__dirname + '/public/index.html'));
app.listen(port, ()=> console.log(`SegreTrack listening on ${port}`));
