const app = require("../app");
const request = require("supertest");


describe("app", () => {
    describe("/", () => {
      it("sends a welcome message", async () => {
        const response = await request(app).get("/");
  
        expect(response.text).toEqual("Hello, world!");
      });
    });
}
);