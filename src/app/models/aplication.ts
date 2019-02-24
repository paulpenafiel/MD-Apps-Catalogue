
export class Aplication {

    constructor(_id='', name='', category='', uploadDate=new Date(), description='', appType='', rating=0, imgPath='', status='',  opSystem='', register='', organization='', developer='', prerequisites='', accessPath='', lastUpdate='', currentVersion='', internetConnection='', keywords=''){
        this._id=_id;
        this.name=name;
        this.category=category;
        this.uploadDate=uploadDate;
        this.rating=rating;
        this.description=description;
        this.appType=appType;
        this.imgPath=imgPath;
        this.status=status;
        this.galery=[{galpath:''}];
        this.opSystem=opSystem;
        this.register=register;
        this.organization=organization;
        this.developer=developer;
        this.prerequisites=prerequisites;
        this.accessPath=accessPath;
        this.lastUpdate=lastUpdate;
        this.currentVersion=currentVersion;
        this.internetConnection=internetConnection;
        this.keywords=keywords;
    }

    _id: string;
    name: string;
    category: string;
    uploadDate: Date;
    description: string;
    appType: string;
    rating: Number;
    imgPath: string;
    status: string;
    galery: [{
        galpath: string
    }];
    opSystem: string;
    register: string;
    organization: string;
    developer: string;
    prerequisites: string;
    accessPath: string;
    lastUpdate: string;
    currentVersion: string;
    internetConnection: string;
    keywords: string;
}
