<template>
  <div class="user-car">
    <h1>Нэ бачу по инглиш</h1>
    <img src="../assets/1-1.jpg" alt="Vue" width="100" />
    <div class="main-info">
      <div class="info">
        <h2>
          {{ getName }}
        </h2>
        <strong>Цэж я ихмо</strong>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, ea.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, ea.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, ea.
          </li>
        </ul>
      </div>
    </div>
    <p>Юзерс {{ users.length }}</p>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ `${index + 1} ${getStudentName(user)}` }}
      </li>
      <!-- <li v-for="(value, key, index) in users[0]" :key="index">
        {{ key }}
      </li> -->
    </ul>
    <button type="button" @click="currentPage--">Пред.</button>
    <button
      v-for="page in pages"
      :key="page"
      type="button"
      @click="currentPage = page"
    >
      {{ page }}
    </button>

    <button type="button" @click="currentPage++">След.</button>
    <p>Страница {{ currentPage }} из {{ pages }}</p>
  </div>
</template>

<script>
export default {
  name: "Trening",
  data() {
    return {
      firstName: "Коуч",
      secondName: "Паныч",
      lastName: "Батя",
      users: [
        { firstName: "eee", secondName: "rrr", lastName: "ttt" },
        { firstName: "bb", secondName: "sss", lastName: "22lllll" },
        { firstName: "qqq", secondName: "aa", lastName: "yt6" },
      ],
      pages: 3,
      currentPage: 1,
    };
  },
  computed: {
    getName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase();
    },
  },
  methods: {
    getStudentName(user) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`;
    },
    loadUsers(page) {
      console.log(`Загрузка юзеров со стр. ${page}`);
    },
  },
  watch: {
    currentPage(page) {
      //newValue, oldValue
      this.loadUsers(page);
    },
  },
};
</script>

<style>
</style>