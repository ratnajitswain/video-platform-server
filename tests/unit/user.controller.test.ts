import request from "supertest";

import app from "../../src/app";

describe("User routes", () => {
  test("Get all users", async () => {
    const res = await request(app).get("/user");
    expect(res.body).toEqual({message:'Example method called successfully'});
  });
});