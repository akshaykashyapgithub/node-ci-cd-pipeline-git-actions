const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.status(200).send("Hello from Node.js CI/CD Pipeline!"));

describe("GET /", () => {
  it("responds with hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from Node.js CI/CD Pipeline!");
  });
});
