export class Comment {
    _id: string;
    date: Date;
    body: string;
    appId: string;
    userId: string;
    appName: string;
    userName: string;
    imgPath: string;
    status: string;
    response: [
        {
            date: string;
            body: string;
            userId: string;
            userName: string;
            imgPath: string;
        }
    ]
}