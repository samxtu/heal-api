import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAllowed = (roles: string[]): MiddlewareFn<MyContext> => {
  return async ({ context }, next) => {
    if (!roles.includes(context.req.session.role)) {
      throw new Error("You are not allowed to perform this action!");
    }
    return next();
  };
};
