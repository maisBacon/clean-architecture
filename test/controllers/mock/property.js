"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertySpy = void 0;
class PropertySpy {
    constructor() {
        this.result = 'R$10.000,00';
    }
    async calculation(request) {
        return this.result;
    }
}
exports.PropertySpy = PropertySpy;
//# sourceMappingURL=property.js.map