<template>
TEST
</template>

<script>
import liff from "@line/liff";
export default {
  name: 'App',
  components: {
  },
    async mounted() {
    console.log("mount")
    try {
      // * Config Line Liff
      await liff.init({ liffId: "2006835556-jyGm1w0z", withLoginOnExternalBrowser: true })
      // ^ Check Line Liff Login ?
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile()
        console.log("profile => ", profile)
        this.loading = false
      } else {
        liff.login()
      }
    } catch (e) {
      console.log("error login => ", e)
    }
  },
}
</script>

