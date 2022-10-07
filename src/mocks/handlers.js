import { rest } from "msw";

const data = ["먹기", "자기", "놀기"];

export const handlers = [
  // 할일 목록
  rest.get("/todos", (req, res, ctx) => res(ctx.status(200), ctx.json(data))),

  // 할일 추가
  // rest.post("/todos", (req, res, ctx) => {
  //   data.push(req.body);
  //   return res(ctx.status(201));
  // })
];