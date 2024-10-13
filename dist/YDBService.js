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
exports.YDBService = void 0;
const ydb_sdk_1 = require("ydb-sdk");
const Config_1 = require("./Config");
class YDBService {
    constructor() {
        this.driver = new ydb_sdk_1.Driver({
            endpoint: Config_1.Config.YDB_ENDPOINT,
            database: Config_1.Config.YDB_DATABASE,
            authService: (0, ydb_sdk_1.getCredentialsFromEnv)(),
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.driver.ready(1); // Убедитесь, что драйвер готов
            }
            catch (error) {
                console.error('Ошибка при подключении к YDB:', error);
                throw new Error('Не удалось подключиться к YDB');
            }
        });
    }
    appendToTable(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
            INSERT INTO participants (name, email, phone)
            VALUES ('${userData.name}', '${userData.email}', '${userData.phone}');
        `;
            try {
                yield this.driver.tableClient.withSession((session) => __awaiter(this, void 0, void 0, function* () {
                    yield session.executeQuery(query); // Выполняем запрос через сессию
                }));
                console.log('Запись добавлена:', userData);
            }
            catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                throw new Error('Не удалось добавить данные в таблицу');
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.destroy(); // Закрываем драйвер
        });
    }
}
exports.YDBService = YDBService;
