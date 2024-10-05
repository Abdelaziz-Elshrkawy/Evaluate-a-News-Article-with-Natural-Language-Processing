"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api_Id = exports.Api_Key = exports.port = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.port = _a.port, exports.Api_Key = _a.Api_Key, exports.Api_Id = _a.Api_Id;
