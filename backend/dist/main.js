"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: '../.env' });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const express = require("express");
const database_1 = require("./database/database");
async function bootstrap() {
    try {
        await (0, database_1.connectToDatabase)();
        console.log('Successfully connected to the database.');
    }
    catch (error) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1);
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express.static((0, path_1.join)(__dirname, '..', 'public')));
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.useLogger(['log', 'error', 'warn', 'debug']);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map