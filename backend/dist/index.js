"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./configs/config");
const user_route_1 = __importDefault(require("./routes/user.route"));
const blog_route_1 = __importDefault(require("./routes/blog.route"));
const random_person_route_1 = __importDefault(require("./routes/random-person.route"));
const app = (0, express_1.default)();
const port = config_1.PORT || 8000;
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//end points
app.get("/api", (req, res, next) => {
    console.log("port");
    res.send({
        message: `server running on port ${port}`,
    });
});
app.use("/api/auth", user_route_1.default);
app.use("/api/blog", blog_route_1.default);
app.use("/api/randomperson", random_person_route_1.default);
app.use((err, req, res, next) => {
    console.error(err); // log detail error ke console
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        message,
    });
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
