import { User, Video } from "../models";
import { UserCreationAttributes } from "../models/User"

function filterLastVideosByDailyPost(videos: Video[]){
    const coursesOnList: number[] = []

    const lastVideos = videos.reduce((currentList, video) => {
        if (!coursesOnList.includes(video.category_id)){
            coursesOnList.push(video.category_id)
            currentList.push(video)
            return currentList
        }

        const videoFromSameCourse = currentList.find(vi => vi.category_id === video.category_id)

        if (videoFromSameCourse!.category_id > video.category_id) return currentList

        const listWithoutVideoFromSameCourse = currentList.filter(ep => ep.category_id !== video.category_id)
        listWithoutVideoFromSameCourse.push(video)

        return listWithoutVideoFromSameCourse
    }, [] as Video[])

    return lastVideos
}

export const userService = {
    findByEmail: async (email: string) => {
        const user = await User.findOne({
            where: { email }
        })
        return user
    },

    create: async (attributes: UserCreationAttributes) => {
        const user = await User.create(attributes)
        return user
    },

    findById: async (id: number) => {
        const user = await User.findByPk(id)
        return user
    },

    getKeepWatchingList: async (userId: number) => {
        const userWithWatchingEpisodes = await User.findByPk(userId, {
            include: [{
                association: 'Videos',
                attributes:[
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
        })

        if(!userWithWatchingEpisodes) throw new Error('Usuário não encontrado.')

        const list = filterLastVideosByDailyPost(userWithWatchingEpisodes.watchedVideos || [])

        return list
    },

    update: async (id: number, attributes: {
        firstName: string
        lastName: string
        phone: string
        birth: Date
        email: string
    }) => {
        const [affectedRows, updatedUsers] = await User.update(attributes, { 
            where: { id }, 
            returning: true,
            individualHooks: true
        })
        return updatedUsers[0]
    },

    updatePasseord: async (id: string | number, password: string) => {
        const [affectedRows, updatedUsers] = await User.update({
            password
        },{
            where: { id },
            individualHooks: true,
            returning: true
        })

        return updatedUsers[0]
    }
}