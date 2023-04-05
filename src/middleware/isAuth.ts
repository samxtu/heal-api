import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.session.userId) {
    return context.res.status(401).json({
      status: false,
      error: {
        target: "general",
        message: "You are not authenticated.",
      },
    });
  }
  return next();
};
