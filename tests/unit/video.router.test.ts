import request from "supertest";

import app from "../../src/app";

describe("Video routes", () => {
  it("check video success route", async () => {
    const res = await request(app).get("/video/stream/video001");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toBe('video/mp4')
  });
  it("check if video not available",async ()=>{
        const res = await request(app).get("/video/stream/videoNotAvailable");
        expect(res.status).toBe(404);
  })
});