let posts = [
    { id: 0, message: "Post 1", likesCount: 154 },
    { id: 1, message: "Post 2", likesCount: 124 },
    { id: 2, message: "Post 3", likesCount: 123 }
];

let dialogsData = [
    { id: 0, name: "Nadyr" },
    { id: 1, name: "Ajara" },
    { id: 2, name: "Jama" },
    { id: 3, name: "Edil"}
];

let messagesData = [
    { id: 0, message: "How are you?" },
    { id: 1, message: "Are you you?" },
    { id: 2, message: "Did watch match yesterday?" },
    { id: 3, message: "Yes, sure..."}
];

let state = {
    profilePage: {
        posts: posts
    },

    dialogPage: {
        dialogs: dialogsData,
        messages: messagesData
    }

};

export default state;