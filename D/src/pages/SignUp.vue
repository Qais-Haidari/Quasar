<template>
  <q-page class="absolute-center">
    <div class="absolute-center">
      <q-input rounded outlined class="q-mt-lg" label="PHONE NUMBER">
        <template v-slot:prepend>
          <q-avatar>
            <img src="./img/LockIcon.svg" alt />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>

      <q-input rounded outlined class="q-mt-lg" label="FULL NAME">
        <template v-slot:prepend>
          <q-avatar>
            <img src="./img/UserIcon.svg" alt />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>

      <q-input rounded outlined class="q-mt-lg" label="EMAIL ( OPTIONAL )">
        <template v-slot:prepend>
          <q-avatar>
            <img src="./img/EmailIcon.svg" alt />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>

      <q-input rounded outlined class="q-mt-lg" label="PHONE NUMBER">
        <template v-slot:append>
          <q-icon name="visibility_off" class="cursor-pointer" />
        </template>

        <template v-slot:prepend>
          <q-avatar>
            <img src="./img/LockIcon.svg" alt />
          </q-avatar>
        </template>
      </q-input>

      <q-input rounded outlined class="input q-mt-lg" label="PASSWORD">
        <template v-slot:prepend>
          <q-avatar>
            <img src="./img/LockIcon.svg" alt />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="visibility_off" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="column">
        <q-btn class="btn q-mt-lg btn-lg" size="25px" rounded color="red" label="CONTINUE" />
      </div>
      <p class="q-mt-lg text-center">FORGOT PASSWORD?</p>
    </div>
  </q-page>
</template>

<script>
export default {}
</script>

<style scoped>
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
