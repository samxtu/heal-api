import { MyContext } from 'src/types';
import { MiddlewareFn } from 'type-graphql';

export const isAllowed = (allowedRoles: string[]): MiddlewareFn<MyContext> => {
  return async ({ context }: { context: MyContext }, next) => {
    const userRole = context.req.session.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      return context.res.status(401).json({
        status: false,
        error: { target: 'general', message: 'You are not authorized to access this resource.' }
      });
    }
    return next();
  };
};
