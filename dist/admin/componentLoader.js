"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = exports.componentLoader = void 0;
const adminjs_1 = require("adminjs");
const componentLoader = new adminjs_1.ComponentLoader();
exports.componentLoader = componentLoader;
const Components = {
    Dashboard: componentLoader.add('Dashboard', './components/Dashboard'),
    GalleryImageUploader: componentLoader.add('GalleryImageUploader', './components/GalleryImageUploader'),
};
exports.Components = Components;
//# sourceMappingURL=componentLoader.js.map