import { ResourceOptions } from "adminjs";

export const UserResourceOptions: ResourceOptions = {
    navigation: {
        name: 'Administração',
        icon: 'User'
    },
    properties: {
        birth: {
            type: 'date'
        },
        password: {
            type: 'password'
        },
        role: {
            availableValues: [
                { value: 'admin', label: 'Admin' },
                { value: 'user', label: 'User'}
            ]
        }
    },
    editProperties:[
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'password',
        'role'
    ],
    filterProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
    listProperties: [
        'id',
        'firstName',
        'email',
        'role'
    ],
    showProperties: [
        'id',
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ]

}