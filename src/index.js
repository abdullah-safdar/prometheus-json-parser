const express = require("express");
const { pullImage, runContainer } = require("./utils");

const app = express();

app.get("/run-parser", async (req, res) => {
  try {
    await pullImage();
    const outputData = await runContainer();
    res.json({ data: JSON.parse(outputData) });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3003, () => {
  console.log("Express server is running on port 3000");
});
