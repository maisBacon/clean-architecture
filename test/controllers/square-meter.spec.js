"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const square_meters_1 = require("../../src/presentation/controllers/square-meters");
const http_1 = require("../../src/presentation/helpers/http");
const errors_1 = require("../../src/presentation/errors");
const mock_1 = require("./mock");
const makeSut = () => {
    const propertySpy = new mock_1.PropertySpy();
    const sut = new square_meters_1.SquareMeters(propertySpy);
    return {
        sut,
        propertySpy
    };
};
describe('Controller', () => {
    test('Should return 400 if meters not provided', async () => {
        const { sut } = makeSut();
        const httpRequest = { body: { value: '2' } };
        const res = await sut.handle(httpRequest);
        expect(res.statusCode).toBe(400);
        expect(res).toEqual(http_1.badRequest(new errors_1.MissingParamError('meters')));
    });
    test('Should return 400 if value not provided', async () => {
        const { sut } = makeSut();
        const httpRequest = { body: { meters: '2' } };
        const res = await sut.handle(httpRequest);
        expect(res.statusCode).toBe(400);
        expect(res).toEqual(http_1.badRequest(new errors_1.MissingParamError('value')));
    });
    test('Should return 500 if consulting database trows error', async () => {
        const { sut, propertySpy } = makeSut();
        const httpRequest = { body: { meters: '2', value: '2' } };
        jest.spyOn(propertySpy, 'calculation').mockImplementationOnce(mock_1.throwError);
        const res = await sut.handle(httpRequest);
        expect(res.statusCode).toBe(500);
        expect(res).toEqual(http_1.serverError(new Error()));
    });
    test('Should return 200', async () => {
        const { sut } = makeSut();
        const httpRequest = { body: { meters: '2', value: '2' } };
        const res = await sut.handle(httpRequest);
        expect(res.statusCode).toBe(200);
        expect(res).toEqual(http_1.ok('R$10.000,00'));
    });
});
//# sourceMappingURL=square-meter.spec.js.map