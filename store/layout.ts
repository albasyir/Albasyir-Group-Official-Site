export const state = () => {
    menuDrawer: true
}

export const mutations = {
    toggleDrawer(state : any, forceToggle ?: Boolean) {
        state.menuDrawer = !state.menuDrawer 
    }
}
