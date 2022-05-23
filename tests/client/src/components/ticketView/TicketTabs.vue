<template lang="">
	<ul class="nav nav-tabs" id="tab-list">
		<li class="nav-item">
			<a
				:class="{
					'nav-link': true,
					active: currentViewed.ID == -1,
				}"
				@click="setCurrentViewedID(-1)"
				href="#"
				>Liste</a
			>
		</li>
		<li v-for="tab in openedTabs" class="nav-item">
			<span
				:class="{
					'nav-link': true,
					active: currentViewed.ID == tab,
				}"
				><a href="#" @click="setCurrentViewedID(tab)">Ticket #{{ tab }}</a>
				<a href="#" @click="closeCurrentViewedID(tab)" class="btn-close del">&times;</a></span
			>
		</li>
	</ul>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	computed: {
		...mapState('tm', ['openedTabs', 'currentViewed']),
	},
	methods: {
		...mapMutations('tm', ['setCurrentViewedID', 'closeCurrentViewedID']),
	},
};
</script>
<style lang=""></style>
