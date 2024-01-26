const express = require('express');
const fs = require('fs');
const path = require('path');

// used for cross origin
const cors = require('cors');

app.use(cors());


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/data', (req, res) => {
    console.log('Received request:', req.query);
  const fileName = req.query.n;
  const lineNumber = req.query.m;
    

    res.setHeader('Cache-Control', 'no-store');

    // if file name is not given, it will run
  if (!fileName) {
    return res.status(400).json({ error: "'n' parameter is required" });
  }

    // finding the path of the existing file
  const filePath = path.join( 'data', `${fileName}.txt`);
//   const filePath = path.join(__dirname, 'data', `${fileName}.txt`);

    // if path is not valid, it will run
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: `File ${fileName}.txt not found` });
  }

    // if line number is given then the cursor reaches to that line using the string function
    if (lineNumber) {
    try {
      const lineNumberInt = parseInt(lineNumber);
      const fileContent = fs.readFileSync(filePath, 'utf-8').split('\n');

      if (lineNumberInt >= 1 && lineNumberInt <= fileContent.length) {
        return res.send(fileContent[lineNumberInt - 1]);
      } else {
        return res.status(400).json({ error: `Line number ${lineNumber} is out of range` });
      }
    } catch (err) {
      return res.status(400).json({ error: "'m' parameter must be a valid integer" });
    }
  } else {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
//       res.setHeader('Content-Type', 'application/json');
      //   return res.json({ data: fileContent });
      
      res.setHeader('Content-Type', 'text/plain');
  return res.send(fileContent);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
