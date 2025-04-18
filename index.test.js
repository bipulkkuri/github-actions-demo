const request = require("supertest");
const app = require("./index.js"); // Assuming you export `app` from index.js

describe("GET /", () => {
  it("should return Hello, World!", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, World!");
  });
});
