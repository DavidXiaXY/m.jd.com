import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
state: {
	},
	mutations: {
	},

	computed: {

		cartCount() {
			let localData = window.localStorage.getItem('cartCount')
			if(this.$store.state.cartCount === 0 && localData) {
				this.$store.commit('updateCartCount', localData) //同步操作
			}
			return this.$store.state.cartCount
		}
		
	},

	actions: {

	}
})