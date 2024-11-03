"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    console.log('Connected to database:', configService.get('MONGODB_URI'));
    app.enableCors();
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.use((req, res, next) => {
        console.log(`Request received: ${req.method} ${req.url}`);
        next();
    });
    app.use('*', (req, res) => {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'index.html'));
    });
    await app.init();
}
bootstrap();
//# sourceMappingURL=main.js.map