<template>
	<div>
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
						active: currentViewed.ID == tab.ID,
					}"
					><a href="#" @click="setCurrentViewedID(tab.ID)">Ticket #{{ tab.ID }}</a>
					<a href="#" @click="closeCurrentViewedID(tab.ID)" class="btn-close del">&times;</a></span
				>
			</li>
		</ul>
		<div v-if="currentViewed.ID == -1" style="height: 85vh" class="py-4 container" id="ticketList">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#ID</th>
						<th scope="col">Typ</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row"><a href="#">#1254</a></th>
						<td>Bug</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row"><a href="">#4897</a></th>
						<td>Anfrage</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</table>
		</div>
		<TicketView v-else />
	</div>
</template>
<script>
import TicketView from '@/components/TicketView.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: { TicketView },
	data() {
		return {};
	},
	computed: {
		...mapState('tm', ['openedTabs', 'currentViewed']),
	},
	methods: {
		...mapMutations('tm', ['setCurrentViewedID', 'closeCurrentViewedID']),
		changeView(view) {
			this.view = view;
		},
	},
};
</script>
<style lang="scss"></style>
