<template>
  <v-layout
    column
    align-center
    justify-center
  >
    <div
      class="corn"
      style="font-size: 500%"
    >
      App-A!
    </div>
    <div class="text-xs-center display-1 mb-5">
      Apa, tanuljak dolgozatra?
    </div>
    <div>
      <v-btn
        outline
        @click="$router.push('/doga')"
      >
        Start
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {};
</script>
