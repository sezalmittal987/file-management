import { Folder } from "./folders";

export interface User {
    id ?: string;
    username ?: string;
    password ?: string;
    folders : Folder[];
}

export const users : User[] = [
    {
        id : '12345',
        username : 'sezal',
        password : 'sezalmittal',
        folders : [
            {
                id :7,
                parentId : 1,
                folderName : "WordDoc.pdf"
            },
            {
                id :3,
                parentId : 1,
                folderName : "Timetable.xlxx"
            },
        ],
    },
]