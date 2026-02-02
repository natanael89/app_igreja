"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const ensureUploadDir_1 = require("./utils/ensureUploadDir");
const admin_1 = require("./admin");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('uploads'));
app.use("/uploads", express_1.default.static(path_1.default.resolve("/daily-posts")));
app.use(express_1.default.json());
(0, ensureUploadDir_1.ensureUploadDir)();
app.use(admin_1.adminJs.options.rootPath, admin_1.adminJsRouter);
app.use(routes_1.router);
const PORT = 4000;
app.listen(PORT, () => {
    database_1.database.authenticate().then(() => {
        console.log('DB connection successfull.');
    });
    console.log(`Server started successfuly at port http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map