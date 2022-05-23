<template>
	<div>
		<TicketTabs />
		<div v-if="currentViewed.ID == -1" style="height: 85vh" class="py-4 container" id="ticketList">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#ID</th>
						<th scope="col">Category</th>
						<th scope="col">Titel</th>
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
						<td>{{ ticket.title }}</td>
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
import TicketView from '@/components/ticketView/TicketView.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import TicketTabs from '@/components/ticketView/TicketTabs.vue';
export default {
	components: { TicketView, TicketTabs },
	data() {
		return {};
	},
	computed: {
		...mapState('tm', ['currentViewed', 'loadedTickets']),
	},
	methods: {
		...mapActions('tm', ['openTicket']),
	},
};
</script>
<style lang="scss"></style>
