const Docker = require("dockerode");

const docker = new Docker({});

async function pullImage() {
  return new Promise((resolve, reject) => {
    docker.pull("prom/prom2json", (err, stream) => {
      if (err) {
        reject("Error pulling image");
        return;
      }
      docker.modem.followProgress(stream, (pullErr) => {
        if (pullErr) {
          reject("Error pulling image");
          return;
        }
        resolve();
      });
    });
  });
}

async function runContainer(url) {
  return new Promise((resolve, reject) => {
    let outputData = "";
    docker.run(
      "prom/prom2json",
      [url],
      process.stdout,
      { Tty: true, rm: true },
      (runErr, data, container) => {
        if (runErr) {
          console.error("Error running container:", runErr);
          reject("Error running container");
          return;
        }
        console.log("data", data);
        console.log("Container started successfully");
        container.logs(
          { follow: true, stdout: true, stderr: true },
          (err, stream) => {
            if (err) {
              console.error("Error capturing container output:", err);
              reject("Error capturing container output");
              return;
            }
            let outputData = "";
            stream.setEncoding("utf8");
            stream.on("data", (chunk) => {
              outputData += chunk;
            });
            stream.on("end", () => {
              console.log("Container output received:", outputData);
              resolve(outputData);
            });
          }
        );
        // container.attach(
        //   { stream: true, stdout: true, stderr: true },
        //   (attachErr, containerStream) => {
        //     if (attachErr) {
        //       console.error("Error capturing container output:", attachErr);
        //       reject("Error capturing container output");
        //       return;
        //     }
        //     containerStream.on("data", (chunk) => {
        //       outputData += chunk.toString("utf8");
        //     });
        //     containerStream.on("end", () => {
        //       console.log("Container output received:", outputData);
        //       resolve(outputData);
        //     });
        //   }
        // );
      }
    );
  });
}

module.exports = { pullImage, runContainer };
