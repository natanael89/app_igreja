"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const models_1 = require("../models");
function filterLastVideosByDailyPost(videos) {
    const coursesOnList = [];
    const lastVideos = videos.reduce((currentList, video) => {
        if (!coursesOnList.includes(video.category_id)) {
            coursesOnList.push(video.category_id);
            currentList.push(video);
            return currentList;
        }
        const videoFromSameCourse = currentList.find(vi => vi.category_id === video.category_id);
        if (videoFromSameCourse.category_id > video.category_id)
            return currentList;
        const listWithoutVideoFromSameCourse = currentList.filter(ep => ep.category_id !== video.category_id);
        listWithoutVideoFromSameCourse.push(video);
        return listWithoutVideoFromSameCourse;
    }, []);
    return lastVideos;
}
exports.userService = {
    findByEmail: async (email) => {
        const user = await models_1.User.findOne({
            where: { email }
        });
        return user;
    },
    create: async (attributes) => {
        const user = await models_1.User.create(attributes);
        return user;
    },
    findById: async (id) => {
        const user = await models_1.User.findByPk(id);
        return user;
    },
    getKeepWatchingList: async (userId) => {
        const userWithWatchingEpisodes = await models_1.User.findByPk(userId, {
            include: [{
                    association: 'Videos',
                    attributes: [
                        'id',
                        'title',
                        'description',
                        'videoUrl',
                        'thumbnailUrl',
                        'category_id',
                        'order'
                    ],
                    through: {
                        attributes: ['updatedAt', 'seconds_watched', 'completed']
                    }
                }]
        });
        if (!userWithWatchingEpisodes)
            throw new Error('Usuário não encontrado.');
        const list = filterLastVideosByDailyPost(userWithWatchingEpisodes.watchedVideos || []);
        return list;
    },
    update: async (id, attributes) => {
        const [affectedRows, updatedUsers] = await models_1.User.update(attributes, {
            where: { id },
            returning: true,
            individualHooks: true
        });
        return updatedUsers[0];
    },
    updatePasseord: async (id, password) => {
        const [affectedRows, updatedUsers] = await models_1.User.update({
            password
        }, {
            where: { id },
            individualHooks: true,
            returning: true
        });
        return updatedUsers[0];
    }
};
//# sourceMappingURL=user.Service.js.map