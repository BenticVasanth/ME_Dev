import { defineStore } from 'pinia'
export const useCommonStore = defineStore("commonstore", {
    state: () => ({
        tokenId: '',
        secureToken: '',
        sessionId: '',
        dataValues: {
            secureToken: '',
            tokenId: '',
            userSesId: '',
            data: '',
            mailSmsToken: '',
            loginID: '',
            userId: ''
        },
        Commondata: ''
    }),
    persist: {
        storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
    }
})