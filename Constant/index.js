import { Dimensions } from "react-native";

const DimensionsScreen = {
    Height: Dimensions.get("screen").height,
    Width: Dimensions.get("screen").width,
    Scale: Dimensions.get("screen").scale,
    FontsScale: Dimensions.get("screen").fontScale,
};
const DimensionsWindow = {
    Height: Dimensions.get("window").height,
    Width: Dimensions.get("window").width,
    Scale: Dimensions.get("window").scale,
    FontsScale: Dimensions.get("window").fontScale,
}; ``

const Fonts = {
    GLG_Cusive_Black: 'GLG_Cusive_Black',
    GLG_Cusive_Bold: 'GLG_Cusive_Bold',
    GLG_Cusive_ExtraBold: 'GLG_Cusive_ExtraBold',
    GLG_Cusive_ExtraLight: 'GLG_Cusive_ExtraLight',
    GLG_Cusive_Light: 'GLG_Cusive_Light',
    GLG_Cusive_Medium: 'GLG_Cusive_Medium',
    GLG_Cusive_Regular: 'GLG_Cusive_Regular',
    GLG_Cusive_SemiBold: 'GLG_Cusive_SemiBold',
    GLG_Cusive_Thin: 'GLG_Cusive_Thin',
    GLG_Black: 'GLG_Black',
    GLG_Bold: 'GLG_Bold',
    GLG_ExtraBold: 'GLG_ExtraBold',
    GLG_ExtraLight: 'GLG_ExtraLight',
    GLG_Light: 'GLG_Light',
    GLG_Medium: 'GLG_Medium',
    GLG_Regular: 'GLG_Regular',
    GLG_SemiBold: 'GLG_SemiBold',
    GLG_Thin: 'GLG_Thin',
}
const MainCss = {
    shadowStyle_card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
}
const Api_version = {
    Url_LocalKey: 'http://192.168.10.53:8080',
    Url_Key: 'https://uat3.eyefleet.co/api',
    Api_Key: '/ev/app',
}

const SimpleAccount = {
    account_time_active: '',
    account_detail: {
        username: "0999999999",
        password: "1234",
        email: "eyefleetDevelopers@gmail.com",
        user_Fname: 'Titiwut',
        user_Lname: 'Omsin',
        user_Nname: 'Mai',
        car_defualt: {
            id: 'kkdOI668',
            name: 'Tesla Modal 3 ของฉัน'
        },
        user_coin: 5800
    },
    account_charging: {
        chargingState: false,
        chargingStartObj: null,
    },
    account_carList: [
        { id_ref: 'kkdOI668', name: 'Tesla Modal 3 ของฉัน' },
        { id_ref: 'IJAIJF64135', name: 'Tesla Modal y ของพ่อ' },
        { id_ref: 'OOLAFSF643', name: 'MG4 ของพ่อ' },
        { id_ref: 'MMVAJS98765', name: 'BMW iX3 ของน้อง' },
    ],
    account_Setting: {
        language: { id: 6161, name: 'English', type: 'En-en' },
        darkmode: false,
        notiSetting: false,
    },
}
const PhoneInput = {
    listPhone: [
        { "id": 1, "nameInput": 1, disableClick: false },
        { "id": 2, "nameInput": 2, disableClick: false },
        { "id": 3, "nameInput": 3, disableClick: false },
        { "id": 4, "nameInput": 4, disableClick: false },
        { "id": 5, "nameInput": 5, disableClick: false },
        { "id": 6, "nameInput": 6, disableClick: false },
        { "id": 7, "nameInput": 7, disableClick: false },
        { "id": 8, "nameInput": 8, disableClick: false },
        { "id": 9, "nameInput": 9, disableClick: false },
        { "id": 10, "nameInput": "", disableClick: true },
        { "id": 11, "nameInput": "0", disableClick: false },
        { "id": 12, "nameInput": "<", disableClick: false }]
}
const Post = [
    {
        name: "กากือ", message: "ทำยังไงดีคะ เพื่อนไม่ยอมคุยด้วย #หาเพื่อน", time: '10:00 pm', status: {
            status_liked: 3,
            status_dislike: 0,
            status_comment_count: 2,
            status_comment: [
                {
                    comment_name: "กากอย", comment_message: 'ชอบเลยค้าบบบบบเเว๊นๆๆๆๆๆ เเง๊นๆๆๆ', comment_status: {
                        comment_like: 2,
                        comment_dislike: 0
                    }
                },
                {
                    comment_name: "กาจือ", comment_message: 'พวกคุณทำตัวแบบนี้กันครับ มันไม่งาม', comment_status: {
                        comment_like: 2,
                        comment_dislike: 0
                    }
                }
            ]
        }
    },
    {
        name: "กาฟือ", message: "ม่ายน้าาาาา สอบตกคณิตศาสตร์ หาติวเต้อค่ะ ติดต่อมาที่098xxxxxxx หรือ มาที่ห้อง5/5ค่าา #สอบตก #ครูแมน #เมทริกซ์ #หาติวเต้อ", time: '10:00 pm', status: {
            status_liked: 3,
            status_dislike: 0,
            status_comment_count: 2,
            status_comment: [
                {
                    comment_name: "กากอย", comment_message: 'ติดต่อมาที่098xxxxxxx', comment_status: {
                        comment_like: 2,
                        comment_dislike: 0
                    }
                },
                {
                    comment_name: "กาจือ", comment_message: ' มาที่ห้อง5/5ค่าา', comment_status: {
                        comment_like: 2,
                        comment_dislike: 0
                    }
                }
            ]
        }
    }
]
export { DimensionsScreen, DimensionsWindow, Fonts, MainCss, Api_version, SimpleAccount, PhoneInput,Post }