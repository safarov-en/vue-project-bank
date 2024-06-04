<template>
  <app-loader v-if="loading"/>
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import AppModal from '@/components/ui/AppModal.vue';
import RequestModal from '../components/request/RequestModal.vue'
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import AppLoader from '../components/ui/AppLoader'
import RequestFilter from '@/components/request/RequestFilter.vue';
export default {
  components: {AppPage, RequestTable, AppModal, RequestModal, AppLoader, RequestFilter},
  setup() {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})
    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    const requests = computed(() => store.getters['request/requests']
      .filter(request => {
        if(filter.value.name) {
          return request.fio.includes(filter.value.name)
        }
        return request
      })
      .filter(request => {
        if(filter.value.status) {
          return filter.value.status === request.status
        }
        return request
      })
    )
    return {
      modal,
      requests,
      loading,
      filter
    }
  }
}
</script>
