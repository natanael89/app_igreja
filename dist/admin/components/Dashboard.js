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
const react_1 = __importStar(require("react"));
const design_system_1 = require("@adminjs/design-system");
const adminjs_1 = require("adminjs");
const Dashboard = () => {
    const [currentAdmin] = (0, adminjs_1.useCurrentAdmin)();
    const [resources, setResources] = (0, react_1.useState)();
    const apiClient = new adminjs_1.ApiClient();
    (0, react_1.useEffect)(() => {
        fetchDashboardData();
    }, []);
    async function fetchDashboardData() {
        const response = await apiClient.getDashboard();
        console.log(response.data);
        setResources(response.data);
    }
    return (react_1.default.createElement("section", { style: { textAlign: 'center' } },
        react_1.default.createElement(design_system_1.Box, { variant: "grey", px: "xl", bg: "white" },
            react_1.default.createElement(design_system_1.H2, { color: "success" }, "Seja bem-vindo ao Painel de Administra\u00E7\u00E3o"),
            react_1.default.createElement(design_system_1.H2, null, currentAdmin === null || currentAdmin === void 0 ? void 0 : currentAdmin.first_name),
            react_1.default.createElement(design_system_1.Text, null, "Use o menu de navega\u00E7\u00E3o para gerenciar recursos.")),
        react_1.default.createElement(design_system_1.Table, { style: { backgroundColor: '#FFF', padding: '1.5rem' } },
            react_1.default.createElement(design_system_1.TableHead, null,
                react_1.default.createElement(design_system_1.TableRow, { style: { backgroundColor: '#1e8449' } },
                    react_1.default.createElement(design_system_1.TableCell, { style: { color: "#FFF" } }, "Recurso"),
                    react_1.default.createElement(design_system_1.TableCell, { style: { color: "#FFF" } }, "Registros"))),
            react_1.default.createElement(design_system_1.TableBody, null, resources ?
                Object.entries(resources).map(([resource, count]) => (react_1.default.createElement(design_system_1.TableRow, { key: resource },
                    react_1.default.createElement(design_system_1.TableCell, null, resource),
                    react_1.default.createElement(design_system_1.TableCell, null, count))))
                :
                    react_1.default.createElement(react_1.default.Fragment, null)))));
};
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map