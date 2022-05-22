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
						active: currentViewed.ID == tab,
					}"
					><a href="#" @click="setCurrentViewedID(tab)">Ticket #{{ tab }}</a>
					<a href="#" @click="closeCurrentViewedID(tab)" class="btn-close del">&times;</a></span
				>
			</li>
		</ul>
		<div v-if="currentViewed.ID == -1" style="height: 85vh" class="py-4 container" id="ticketList">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#ID</th>
						<th scope="col">Category</th>
						<th scope="col">User</th>
						<th scope="col">Created At</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="ticket in loadedTickets">
						<th scope="row">
							<a href="#" @click.prevent="(event) => openTicket({ event, ID: ticket.ID })"
								>#{{ ticket.ID }}</a
							>
						</th>
						<td>{{ ticket.category }}</td>
						<td>{{ ticket.user.username }}</td>
						<td>{{ new Date(ticket.created_at).toLocaleString() }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<TicketView v-else />
	</div>
</template>
<script>
import TicketView from '@/components/TicketView.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	components: { TicketView },
	data() {
		return {};
	},
	computed: {
		...mapState('tm', ['openedTabs', 'currentViewed', 'loadedTickets']),
	},
	methods: {
		...mapMutations('tm', ['setCurrentViewedID', 'closeCurrentViewedID', 'openTicket']),
		...mapActions('tm', ['openTicket']),
	},
};
</script>
<style lang="scss"></style>
