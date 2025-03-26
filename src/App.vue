<template>
  TEST
</template>

<script>
import liff from "@line/liff";

export default {
  name: 'App',
  components: {},
  async mounted() {
    console.log("mount")
    try {
      // * Config Line Liff
      await liff.init({liffId: "2006835556-jyGm1w0z", withLoginOnExternalBrowser: true})
      // ^ Check Line Liff Login ?
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile()
        console.log("profile => ", profile)
        if (this.$route.query.form === "success") {
          try {
            await liff.sendMessages([
              {
                type: "text",
                text: "Hello"
              }
            ])
            console.log("success sendMessages")
            liff.closeWindow()
          } catch (e) {
            console.log("error sendMessages => ", e)
          }
        }else{
           window.location = "https://docs.google.com/forms/d/e/1FAIpQLSeiZIf1x9WC7ZM_AGAsMz4T_vFXTACtdt2lWlGrYv7IcSItzA/viewform?usp=header"
        }
      } else {
        liff.login()
      }
    } catch (e) {
      console.log("error login => ", e)
    }
  },
}
</script>

