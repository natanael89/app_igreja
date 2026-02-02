"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryImageUploader = void 0;
const react_1 = __importStar(require("react"));
const design_system_1 = require("@adminjs/design-system");
const GalleryImageUploader = ({ onChange, value = [], }) => {
    const [files, setFiles] = (0, react_1.useState)(value);
    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files || []);
        const updatedFiles = [...files, ...newFiles];
        setFiles(updatedFiles);
        onChange(updatedFiles);
    };
    const handleRemoveFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        onChange(updatedFiles);
    };
    return (react_1.default.createElement(design_system_1.FormGroup, null,
        react_1.default.createElement(design_system_1.Label, null, "Carregar M\u00FAltiplas Imagens"),
        react_1.default.createElement(design_system_1.Box, { my: "lg" },
            react_1.default.createElement("input", { onChange: handleFileChange, multiple: true, accept: "image/*" })),
        files.length > 0 && (react_1.default.createElement(design_system_1.Box, { mt: "lg" },
            react_1.default.createElement(design_system_1.Label, null,
                "Imagens Selecionadas: ",
                files.length),
            react_1.default.createElement(design_system_1.Box, { mt: "md" }, files.map((file, index) => (react_1.default.createElement(design_system_1.Box, { key: index, display: "flex", justifyContent: "space-between", alignItems: "center", py: "sm", px: "md", mb: "xs", style: { backgroundColor: '#f5f5f5', borderRadius: '4px' } },
                react_1.default.createElement("span", null, file.name),
                react_1.default.createElement(design_system_1.Button, { size: "sm", kind: "danger", onClick: () => handleRemoveFile(index) }, "Remover")))))))));
};
exports.GalleryImageUploader = GalleryImageUploader;
exports.default = exports.GalleryImageUploader;
//# sourceMappingURL=GalleryImageUploader.js.map