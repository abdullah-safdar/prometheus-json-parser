const express = require("express");
const cors = require("cors");
const { pullImage, runContainer } = require("./utils");
const {
  DATA_URL_NODE_1,
  DATA_URL_NODE_2,
  DATA_URL_NODE_3,
  DATA_URL_NODE_4,
  DATA_URL_NODE_5,
  DATA_URL_NODE_6,
} = require("./config");
const { MATRICS_KEYS, NODE_KEYS } = require("./constants");

const app = express();
app.use(cors());

app.get("/run-parser-node-1", async (req, res) => {
  try {
    console.log("hi parser");
    await pullImage();
    const outputData = await runContainer(DATA_URL_NODE_1);
    const data = JSON.parse(outputData);

    let bucketData = {};
    data.map((d) => {
      if (NODE_KEYS[d.name]) {
        bucketData[MATRICS_KEYS["+Inf"]] = bucketData[MATRICS_KEYS["+Inf"]]
          ? bucketData[MATRICS_KEYS["+Inf"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]]);

        bucketData[MATRICS_KEYS[10]] = bucketData[MATRICS_KEYS[10]]
          ? bucketData[MATRICS_KEYS[10]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[10]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[10]]);

        bucketData[MATRICS_KEYS[5]] = bucketData[MATRICS_KEYS[5]]
          ? bucketData[MATRICS_KEYS[5]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[5]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[5]]);

        bucketData[MATRICS_KEYS["2.5"]] = bucketData[MATRICS_KEYS["2.5"]]
          ? bucketData[MATRICS_KEYS["2.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]]);

        bucketData[MATRICS_KEYS[1]] = bucketData[MATRICS_KEYS[1]]
          ? bucketData[MATRICS_KEYS[1]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[1]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[1]]);

        bucketData[MATRICS_KEYS["0.5"]] = bucketData[MATRICS_KEYS["0.5"]]
          ? bucketData[MATRICS_KEYS["0.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]]);

        bucketData[MATRICS_KEYS["0.25"]] = bucketData[MATRICS_KEYS["0.25"]]
          ? bucketData[MATRICS_KEYS["0.25"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]]);

        bucketData[MATRICS_KEYS["0.1"]] = bucketData[MATRICS_KEYS["0.1"]]
          ? bucketData[MATRICS_KEYS["0.1"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]]);

        bucketData[MATRICS_KEYS["0.05"]] = bucketData[MATRICS_KEYS["0.05"]]
          ? bucketData[MATRICS_KEYS["0.05"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]]);

        bucketData[MATRICS_KEYS["0.025"]] = bucketData[MATRICS_KEYS["0.025"]]
          ? bucketData[MATRICS_KEYS["0.025"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]]);

        bucketData[MATRICS_KEYS["0.01"]] = bucketData[MATRICS_KEYS["0.01"]]
          ? bucketData[MATRICS_KEYS["0.01"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]]);

        bucketData[MATRICS_KEYS["0.005"]] = bucketData[MATRICS_KEYS["0.005"]]
          ? bucketData[MATRICS_KEYS["0.005"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]]);
      }
    });

    // const sortedBuckets = Object.keys(bucketData)
    //   .sort((a, b) => parseFloat(a) - parseFloat(b) || (a === "+Inf" ? 1 : -1))
    //   .reduce((acc, key) => {
    //     acc[key] = data.buckets[key];
    //     return acc;
    //   }, {});

    res.json({ data: { name: "node-1", buckets: bucketData } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/run-parser-node-2", async (req, res) => {
  try {
    console.log("hi parser");
    await pullImage();
    const outputData = await runContainer(DATA_URL_NODE_2);

    const data = JSON.parse(outputData);

    let bucketData = {};
    data.map((d) => {
      if (NODE_KEYS[d.name]) {
        bucketData[MATRICS_KEYS["+Inf"]] = bucketData[MATRICS_KEYS["+Inf"]]
          ? bucketData[MATRICS_KEYS["+Inf"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]]);

        bucketData[MATRICS_KEYS[10]] = bucketData[MATRICS_KEYS[10]]
          ? bucketData[MATRICS_KEYS[10]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[10]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[10]]);

        bucketData[MATRICS_KEYS[5]] = bucketData[MATRICS_KEYS[5]]
          ? bucketData[MATRICS_KEYS[5]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[5]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[5]]);

        bucketData[MATRICS_KEYS["2.5"]] = bucketData[MATRICS_KEYS["2.5"]]
          ? bucketData[MATRICS_KEYS["2.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]]);

        bucketData[MATRICS_KEYS[1]] = bucketData[MATRICS_KEYS[1]]
          ? bucketData[MATRICS_KEYS[1]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[1]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[1]]);

        bucketData[MATRICS_KEYS["0.5"]] = bucketData[MATRICS_KEYS["0.5"]]
          ? bucketData[MATRICS_KEYS["0.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]]);

        bucketData[MATRICS_KEYS["0.25"]] = bucketData[MATRICS_KEYS["0.25"]]
          ? bucketData[MATRICS_KEYS["0.25"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]]);

        bucketData[MATRICS_KEYS["0.1"]] = bucketData[MATRICS_KEYS["0.1"]]
          ? bucketData[MATRICS_KEYS["0.1"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]]);

        bucketData[MATRICS_KEYS["0.05"]] = bucketData[MATRICS_KEYS["0.05"]]
          ? bucketData[MATRICS_KEYS["0.05"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]]);

        bucketData[MATRICS_KEYS["0.025"]] = bucketData[MATRICS_KEYS["0.025"]]
          ? bucketData[MATRICS_KEYS["0.025"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]]);

        bucketData[MATRICS_KEYS["0.01"]] = bucketData[MATRICS_KEYS["0.01"]]
          ? bucketData[MATRICS_KEYS["0.01"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]]);

        bucketData[MATRICS_KEYS["0.005"]] = bucketData[MATRICS_KEYS["0.005"]]
          ? bucketData[MATRICS_KEYS["0.005"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]]);
      }
    });

    // const sortedBuckets = Object.keys(bucketData)
    //   .sort((a, b) => parseFloat(a) - parseFloat(b) || (a === "+Inf" ? 1 : -1))
    //   .reduce((acc, key) => {
    //     acc[key] = data.buckets[key];
    //     return acc;
    //   }, {});

    res.json({ data: { name: "node-2", buckets: bucketData } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/run-parser-node-3", async (req, res) => {
  try {
    console.log("hi parser");
    await pullImage();
    const outputData = await runContainer(DATA_URL_NODE_3);
    const data = JSON.parse(outputData);

    let bucketData = {};
    data.map((d) => {
      if (NODE_KEYS[d.name]) {
        bucketData[MATRICS_KEYS["+Inf"]] = bucketData[MATRICS_KEYS["+Inf"]]
          ? bucketData[MATRICS_KEYS["+Inf"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]]);

        bucketData[MATRICS_KEYS[10]] = bucketData[MATRICS_KEYS[10]]
          ? bucketData[MATRICS_KEYS[10]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[10]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[10]]);

        bucketData[MATRICS_KEYS[5]] = bucketData[MATRICS_KEYS[5]]
          ? bucketData[MATRICS_KEYS[5]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[5]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[5]]);

        bucketData[MATRICS_KEYS["2.5"]] = bucketData[MATRICS_KEYS["2.5"]]
          ? bucketData[MATRICS_KEYS["2.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]]);

        bucketData[MATRICS_KEYS[1]] = bucketData[MATRICS_KEYS[1]]
          ? bucketData[MATRICS_KEYS[1]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[1]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[1]]);

        bucketData[MATRICS_KEYS["0.5"]] = bucketData[MATRICS_KEYS["0.5"]]
          ? bucketData[MATRICS_KEYS["0.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]]);

        bucketData[MATRICS_KEYS["0.25"]] = bucketData[MATRICS_KEYS["0.25"]]
          ? bucketData[MATRICS_KEYS["0.25"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]]);

        bucketData[MATRICS_KEYS["0.1"]] = bucketData[MATRICS_KEYS["0.1"]]
          ? bucketData[MATRICS_KEYS["0.1"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]]);

        bucketData[MATRICS_KEYS["0.05"]] = bucketData[MATRICS_KEYS["0.05"]]
          ? bucketData[MATRICS_KEYS["0.05"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]]);

        bucketData[MATRICS_KEYS["0.025"]] = bucketData[MATRICS_KEYS["0.025"]]
          ? bucketData[MATRICS_KEYS["0.025"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]]);

        bucketData[MATRICS_KEYS["0.01"]] = bucketData[MATRICS_KEYS["0.01"]]
          ? bucketData[MATRICS_KEYS["0.01"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]]);

        bucketData[MATRICS_KEYS["0.005"]] = bucketData[MATRICS_KEYS["0.005"]]
          ? bucketData[MATRICS_KEYS["0.005"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]]);
      }
    });

    // const sortedBuckets = Object.keys(bucketData)
    //   .sort((a, b) => parseFloat(a) - parseFloat(b) || (a === "+Inf" ? 1 : -1))
    //   .reduce((acc, key) => {
    //     acc[key] = data.buckets[key];
    //     return acc;
    //   }, {});
    res.json({ data: { name: "node-3", buckets: bucketData } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/run-parser-node-4", async (req, res) => {
  try {
    console.log("hi parser");
    await pullImage();
    const outputData = await runContainer(DATA_URL_NODE_4);
    const data = JSON.parse(outputData);

    let bucketData = {};
    data.map((d) => {
      if (NODE_KEYS[d.name]) {
        bucketData[MATRICS_KEYS["+Inf"]] = bucketData[MATRICS_KEYS["+Inf"]]
          ? bucketData[MATRICS_KEYS["+Inf"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]]);

        bucketData[MATRICS_KEYS[10]] = bucketData[MATRICS_KEYS[10]]
          ? bucketData[MATRICS_KEYS[10]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[10]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[10]]);

        bucketData[MATRICS_KEYS[5]] = bucketData[MATRICS_KEYS[5]]
          ? bucketData[MATRICS_KEYS[5]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[5]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[5]]);

        bucketData[MATRICS_KEYS["2.5"]] = bucketData[MATRICS_KEYS["2.5"]]
          ? bucketData[MATRICS_KEYS["2.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]]);

        bucketData[MATRICS_KEYS[1]] = bucketData[MATRICS_KEYS[1]]
          ? bucketData[MATRICS_KEYS[1]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[1]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[1]]);

        bucketData[MATRICS_KEYS["0.5"]] = bucketData[MATRICS_KEYS["0.5"]]
          ? bucketData[MATRICS_KEYS["0.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]]);

        bucketData[MATRICS_KEYS["0.25"]] = bucketData[MATRICS_KEYS["0.25"]]
          ? bucketData[MATRICS_KEYS["0.25"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]]);

        bucketData[MATRICS_KEYS["0.1"]] = bucketData[MATRICS_KEYS["0.1"]]
          ? bucketData[MATRICS_KEYS["0.1"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]]);

        bucketData[MATRICS_KEYS["0.05"]] = bucketData[MATRICS_KEYS["0.05"]]
          ? bucketData[MATRICS_KEYS["0.05"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]]);

        bucketData[MATRICS_KEYS["0.025"]] = bucketData[MATRICS_KEYS["0.025"]]
          ? bucketData[MATRICS_KEYS["0.025"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]]);

        bucketData[MATRICS_KEYS["0.01"]] = bucketData[MATRICS_KEYS["0.01"]]
          ? bucketData[MATRICS_KEYS["0.01"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]]);

        bucketData[MATRICS_KEYS["0.005"]] = bucketData[MATRICS_KEYS["0.005"]]
          ? bucketData[MATRICS_KEYS["0.005"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]]);
      }
    });

    // const sortedBuckets = Object.keys(bucketData)
    //   .sort((a, b) => parseFloat(a) - parseFloat(b) || (a === "+Inf" ? 1 : -1))
    //   .reduce((acc, key) => {
    //     acc[key] = data.buckets[key];
    //     return acc;
    //   }, {});

    res.json({ data: { name: "node-4", buckets: bucketData } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/run-parser-node-5", async (req, res) => {
  try {
    console.log("hi parser");
    await pullImage();
    const outputData = await runContainer(DATA_URL_NODE_5);
    const data = JSON.parse(outputData);

    let bucketData = {};
    data.map((d) => {
      if (NODE_KEYS[d.name]) {
        bucketData[MATRICS_KEYS["+Inf"]] = bucketData[MATRICS_KEYS["+Inf"]]
          ? bucketData[MATRICS_KEYS["+Inf"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]]);

        bucketData[MATRICS_KEYS[10]] = bucketData[MATRICS_KEYS[10]]
          ? bucketData[MATRICS_KEYS[10]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[10]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[10]]);

        bucketData[MATRICS_KEYS[5]] = bucketData[MATRICS_KEYS[5]]
          ? bucketData[MATRICS_KEYS[5]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[5]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[5]]);

        bucketData[MATRICS_KEYS["2.5"]] = bucketData[MATRICS_KEYS["2.5"]]
          ? bucketData[MATRICS_KEYS["2.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]]);

        bucketData[MATRICS_KEYS[1]] = bucketData[MATRICS_KEYS[1]]
          ? bucketData[MATRICS_KEYS[1]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[1]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[1]]);

        bucketData[MATRICS_KEYS["0.5"]] = bucketData[MATRICS_KEYS["0.5"]]
          ? bucketData[MATRICS_KEYS["0.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]]);

        bucketData[MATRICS_KEYS["0.25"]] = bucketData[MATRICS_KEYS["0.25"]]
          ? bucketData[MATRICS_KEYS["0.25"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]]);

        bucketData[MATRICS_KEYS["0.1"]] = bucketData[MATRICS_KEYS["0.1"]]
          ? bucketData[MATRICS_KEYS["0.1"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]]);

        bucketData[MATRICS_KEYS["0.05"]] = bucketData[MATRICS_KEYS["0.05"]]
          ? bucketData[MATRICS_KEYS["0.05"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]]);

        bucketData[MATRICS_KEYS["0.025"]] = bucketData[MATRICS_KEYS["0.025"]]
          ? bucketData[MATRICS_KEYS["0.025"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]]);

        bucketData[MATRICS_KEYS["0.01"]] = bucketData[MATRICS_KEYS["0.01"]]
          ? bucketData[MATRICS_KEYS["0.01"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]]);

        bucketData[MATRICS_KEYS["0.005"]] = bucketData[MATRICS_KEYS["0.005"]]
          ? bucketData[MATRICS_KEYS["0.005"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]]);
      }
    });

    // const sortedBuckets = Object.keys(bucketData)
    //   .sort((a, b) => parseFloat(a) - parseFloat(b) || (a === "+Inf" ? 1 : -1))
    //   .reduce((acc, key) => {
    //     acc[key] = data.buckets[key];
    //     return acc;
    //   }, {});
    res.json({ data: { name: "node-5", buckets: bucketData } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/run-parser-node-6", async (req, res) => {
  try {
    console.log("hi parser");
    await pullImage();
    const outputData = await runContainer(DATA_URL_NODE_6);
    const data = JSON.parse(outputData);

    let bucketData = {};
    data.map((d) => {
      if (NODE_KEYS[d.name]) {
        bucketData[MATRICS_KEYS["+Inf"]] = bucketData[MATRICS_KEYS["+Inf"]]
          ? bucketData[MATRICS_KEYS["+Inf"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["+Inf"]]);

        bucketData[MATRICS_KEYS[10]] = bucketData[MATRICS_KEYS[10]]
          ? bucketData[MATRICS_KEYS[10]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[10]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[10]]);

        bucketData[MATRICS_KEYS[5]] = bucketData[MATRICS_KEYS[5]]
          ? bucketData[MATRICS_KEYS[5]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[5]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[5]]);

        bucketData[MATRICS_KEYS["2.5"]] = bucketData[MATRICS_KEYS["2.5"]]
          ? bucketData[MATRICS_KEYS["2.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["2.5"]]);

        bucketData[MATRICS_KEYS[1]] = bucketData[MATRICS_KEYS[1]]
          ? bucketData[MATRICS_KEYS[1]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS[1]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS[1]]);

        bucketData[MATRICS_KEYS["0.5"]] = bucketData[MATRICS_KEYS["0.5"]]
          ? bucketData[MATRICS_KEYS["0.5"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.5"]]);

        bucketData[MATRICS_KEYS["0.25"]] = bucketData[MATRICS_KEYS["0.25"]]
          ? bucketData[MATRICS_KEYS["0.25"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.25"]]);

        bucketData[MATRICS_KEYS["0.1"]] = bucketData[MATRICS_KEYS["0.1"]]
          ? bucketData[MATRICS_KEYS["0.1"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.1"]]);

        bucketData[MATRICS_KEYS["0.05"]] = bucketData[MATRICS_KEYS["0.05"]]
          ? bucketData[MATRICS_KEYS["0.05"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.05"]]);

        bucketData[MATRICS_KEYS["0.025"]] = bucketData[MATRICS_KEYS["0.025"]]
          ? bucketData[MATRICS_KEYS["0.025"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.025"]]);

        bucketData[MATRICS_KEYS["0.01"]] = bucketData[MATRICS_KEYS["0.01"]]
          ? bucketData[MATRICS_KEYS["0.01"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.01"]]);

        bucketData[MATRICS_KEYS["0.005"]] = bucketData[MATRICS_KEYS["0.005"]]
          ? bucketData[MATRICS_KEYS["0.005"]] +
            Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]])
          : Number(d.metrics[0].buckets[MATRICS_KEYS["0.005"]]);
      }
    });

    // const sortedBuckets = Object.entries(bucketData) // Convert to an array of [key, value] pairs
    //   .sort((a, b) => {
    //     // Parse keys to floats for numerical comparison
    //     const keyA = a[0] === "+Inf" ? Infinity : parseFloat(a[0]);
    //     const keyB = b[0] === "+Inf" ? Infinity : parseFloat(b[0]);
    //     return keyA - keyB; // Sort numerically
    //   })
    //   .reduce((acc, [key, value]) => {
    //     acc[key] = value; // Rebuild the object with sorted key-value pairs
    //     return acc;
    //   }, {});

    res.json({ data: { name: "node-6", buckets: bucketData } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3003, () => {
  console.log("Express server is running on port 3000");
});
