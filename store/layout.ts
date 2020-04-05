export const state = () => {
    menuDrawer: true
}

export const mutations = {
    toggleDrawerMenu(state : any, forceToggle ?: Boolean) {
        state.menuDrawer = !state.menuDrawer 
    }
}
