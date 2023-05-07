export interface Folder {
    id: number;
    parentId: number;
    folderName: string;
}

export const folders = [
    {
        id : 1,
        parentId : 0,
        folderName : "Documents"
    },
    {
        id :2,
        parentId : 0,
        folderName : "Downloads"
    },
    {
        id : 3,
        parentId : 0,
        folderName : "Music"
    },
    {
        id : 4,
        parentId : 0,
        folderName : "Videos"
    },
    {
        id : 5,
        parentId : 1,
        folderName : "workDoc.docx"
    },
    {
        id : 6,
        parentId : 1,
        folderName : "image1.png"
    }

];