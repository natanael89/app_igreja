import AdminJS, { PageHandler} from "adminjs";
import { Category, DailyPost, Video, User } from "../models";
import Dashboard from "./components/Dashboard";
import { Components } from "./componentLoader";

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
    component: Components.Dashboard,
    handler: async (req, res, context) => {
        const dailypost = await DailyPost.count()
        const video = await Video.count()
        const category = await Category.count()
        const standarUsers = await User.count({ where: { role: 'user' } })
        const adminUsers = await User.count({ where: { role: 'admin' } })

        res.json({
            'DailyPost': dailypost,
            'Videos': video,
            'Categorias': category,
            'Usuários Padrão': standarUsers,
            'Usuários Admin': adminUsers
        })
    }
}