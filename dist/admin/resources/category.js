"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResourceOptions = void 0;
exports.CategoryResourceOptions = {
    navigation: {
        name: "Categories",
        icon: "List"
    },
    properties: {
        id: {
            isVisible: {
                list: true,
                filter: true,
                show: true,
                edit: false
            },
        },
        name: {
            isVisible: {
                list: true,
                filter: true,
                show: true,
                edit: false
            }
        },
        position: {
            isVisible: {
                list: true,
                filter: true,
                show: true,
                edit: false
            }
        }
    },
    editProperties: ["name", "position"],
    filterProperties: ["id", "name", "position"],
    listProperties: ["id", "name", "position"],
    showProperties: ["id", "name", "position"]
};
//# sourceMappingURL=category.js.map