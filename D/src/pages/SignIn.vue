<template>
  <q-page class="absolute-center">
    <div class="absolute-center">
      <img src="./img/RoshanLogo Color.svg" class="logo" alt />
      <q-input rounded outlined class="p-mt-md" label="password">
        <template v-slot:prepend>
          <q-avatar class="q-ml-sm">
            <img src="./img/PhoneIcon.svg" class alt />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>

      <q-input rounded outlined class="input q-mt-lg" label="PASSWORD">
        <template v-slot:prepend>
          <q-avatar>
            <img src="./img/PhoneIcon.svg" alt />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="column">
        <q-btn class="btn q-mt-lg" size="25px" rounded color="red" label="LOG IN" />
        <q-btn class="btn q-mt-lg btn-lg" size="25px" rounded color="red" label="SIGN Up" />
      </div>
      <p class="q-mt-lg text-center">RESEND CODE</p>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    console.log(this.text.phonenumber)
  },
  computed: {
    ...mapGetters(['text'])
  }
}
// <q-input rounded outlined class="p-mt-md" label="password">
//         <template v-slot:prepend>
//           <q-avatar class="q-ml-sm">
//             <img src="./img/PhoneIcon.svg" class alt />
//           </q-avatar>
//         </template>
//         <template v-slot:append>
//           <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
//         </template>
//       </q-input>

//       <q-input rounded outlined class="input q-mt-lg" label="PASSWORD">
//         <template v-slot:prepend>
//           <q-avatar>
//             <img src="./img/PhoneIcon.svg" alt />
//           </q-avatar>
//         </template>
//         <template v-slot:append>
//           <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
//         </template>
//       </q-input>
//       <div class="column">
//         <q-btn class="btn q-mt-lg" size="25px" rounded color="red" label="LOG IN" />
//         <q-btn class="btn q-mt-lg btn-lg" size="25px" rounded color="red" label="SIGN Up" />
//       </div>
//       <p class="q-mt-lg text-center"></p>
</script>

<style scoped>
.logo {
  width: 300px;
  height: 300px;
  position: relative;
  left: 150px;
}
.a {
  width: 35px;
  height: 35px;
  position: relative;
  top: -50px;
  left: 20px;
}
.input {
  width: 600px;
  font-size: 18px;
  color: #b1b1d9;
}
p {
  color: #b1b1d9;
  font-size: 20px;
  margin-top: 100px;
}
</style>
