<template>
  <h3>กำลังโหลด...</h3>
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
          console.log("this.$route => ", this.$route)
        if (this.$route && this.$route.query && this.$route.query.form === "success") {
          try {
            await liff.sendMessages([
              {
                type: "text",
                text: "ได้มีการส่งเอกสารเบิกสินค้า"
              }
            ])
            console.log("success sendMessages")
            liff.closeWindow()
          } catch (e) {
            console.log("error sendMessages => ", e)
          }
        }else{
           window.location = "https://docs.google.com/forms/d/e/1FAIpQLSe1EI-gQ012sEN4tZRwgozWboiizLBp1Hff-pFF4IsB6UspZg/viewform?usp=sf_link"
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

<style>
body{
  margin: 0;
}

h3 {
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
}
</style>
