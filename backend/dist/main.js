"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const server = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    const configService = app.get(config_1.ConfigService);
    console.log('Connected to database:', configService.get('MONGODB_URI'));
    app.enableCors();
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://vercel.live; connect-src 'self' https://vercel.live;");
        next();
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.use('*', (req, res) => {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'index.html'));
    });
    app.use((req, res, next) => {
        console.log(`Request received: ${req.method} ${req.url}`);
        next();
    });
    await app.init();
    await app.listen(3000, '0.0.0.0');
}
bootstrap();
exports.default = server;
//# sourceMappingURL=main.js.map