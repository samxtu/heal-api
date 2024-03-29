"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllowed = void 0;
const isAllowed = (allowedRoles) => {
    return ({ context }, next) => __awaiter(void 0, void 0, void 0, function* () {
        const userRole = context.req.session.role;
        if (!userRole || !allowedRoles.includes(userRole)) {
            return context.res.status(401).json({
                status: false,
                error: { target: 'general', message: 'You are not authorized to access this resource.' }
            });
        }
        return next();
    });
};
exports.isAllowed = isAllowed;
//# sourceMappingURL=isAllowed.js.map