<template>
  <div>
    <v-btn-toggle
      v-model="gender"
      color=""
      divided
      class="catalog__toggle"
      mandatory
    >
      <v-btn value="woman">Женщинам</v-btn>
      <v-btn value="man">Мужчинам</v-btn>
    </v-btn-toggle>
    <v-list>
      <v-list-group v-for="item in clothesMenu[gender]" :key="item.name" :value="item.name">
        <template v-slot:activator="{ props }">
          <v-list-item
            :prepend-icon="item.icon"
            color="var(--primary-color)"
            v-bind="props"
            :title="item.name"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="sub in item.subcategory"
          :key="sub.name"
          :title="sub.name"
          :to="`/catalog?gender=${gender}&category=${item.link}&subcategory=${sub.link}`"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: "ClothesMenu",
  };
</script>

<script setup>
import {ref} from 'vue';

const gender = ref("woman");
const clothesMenu = {
  woman: [
    {
      name: "Одежда",
      link: "clothes",
      icon: "mdi-hanger",
      subcategory: [
        {name: "Все товары", link: "all"},
        {name: "Блузы и рубашки", link: "blouse"},
        {name: "Платья", link: "dress"},
        {name: "Юбки",link: "skirt"},
        {name: "Брюки", link: "trousers"},
        {name: "Джинсы", link: "jeans"},
        {name: "Пиджаки и жакеты", link: "jacket"},
        {name: "Водолазки", link: "turtleneck"},
        {name: "Майки и футболки", link: "vest"},
        {name: "Костюмы", link: "suit"},
        {name: "Джемперы, свитеры, кардиганы", link: "sweater"},
      ],
    },
    {
      name: "Обувь",
      link: "shoes",
      icon: "mdi-shoe-heel",
      subcategory: [
        {name:"Все товары", link: "all"},
        {name:"Ботинки", link: "boots"},
        {name:"Казаки" , link: "cossacks"},
        {name:"Ботильоны", link: "ankle"},
        {name:"Вечерняя", link: "evening"}, 
        {name:"Кроссовки и кеды", link: "sneakers"},
        {name:"Сапоги", link: "shoes"},
        {name:"Туфли", link: "heel"},
        {name:"Лоферы", link: "loafers"},
      ],
    },
    {
      name: "Аксессуары",
      link: "accessories",
      icon: "mdi-glasses",
      subcategory: [
        {name:"Все товары", link: "all"},
        {name:"Головные уборы", link: "hat"},
        {name:"Очки", link: "glasses"},
        {name:"Украшения", link: "decor"},
        {name:"Сумки", link: "bag"},
      ],
    }
  ],
  man: [
    {
      name: "Одежда",
      link: "clothes",
      icon: "mdi-hanger",
      subcategory: [
        {name: "Все товары", link: "all"},
        {name: "Рубашки", link: "blouse"},
        {name: "Брюки", link: "trousers"},
        {name: "Джинсы", link: "jeans"},
        {name: "Пиджаки и жакеты", link: "jacket"},
        {name: "Водолазки", link: "turtleneck"},
        {name: "Майки и футболки", link: "vest"},
        {name: "Костюмы", link: "suit"},
        {name: "Джемперы, свитеры, кардиганы", link: "sweater"},
      ],
    },
    {
      name: "Обувь",
      link: "shoes",
      icon: "mdi-shoe-formal",
      subcategory: [
        {name:"Все товары", link: "all"},
        {name:"Ботинки", link: "boots"},
        {name:"Кроссовки и кеды", link: "sneakers"},
        {name:"Сапоги", link: "shoes"},
        {name:"Туфли", link: "heel"},
        {name:"Мокасины", link: "moccasins"},
      ],
    },
    {
      name: "Аксессуары",
      link: "accessories",
      icon: "mdi-glasses",
      subcategory: [
        {name:"Все товары", link: "all"},
        {name:"Головные уборы", link: "hat"},
        {name:"Очки", link: "glasses"},
        {name:"Украшения", link: "decor"},
        {name:"Сумки", link: "bag"},
      ],
    }
  ]
}

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateRandomArticles(num) {
//     //const categories = ["blouse", "dress", "skirt", "trousers", "jeans", "jacket", "turtleneck", "vest", "suit", "sweater"];
//     //const categories = ["boots", "cossacks", "ankle", "evening", "sneakers", "shoes", "heel", "loafers"];
//     const categories = ["hat", "glasses", "decor", "bag"];
//     const styles = ["classic", "minimalism", "artdeco", "oldmoney", "newmoney"];
//     const articles = [];

//     for (let i = 0; i < num; i++) {
//         const article = Math.floor(10000000 + Math.random() * 90000000); // Генерация восьмизначного числа
//         const category = categories[Math.floor(Math.random() * categories.length)];
//         const style = styles[Math.floor(Math.random() * styles.length)];
        
//         articles.push({
//           article: article,
//           image: `@/assets/images/woman/${category}.png`,
//           category: category,
//           style: style,
//           price: getRandomNumber(500, 6000),
//           description: `${category} Torino`,
//         });
//     }

//     return articles;
// }

// const articlesArray = generateRandomArticles(50);
// console.log(articlesArray);

</script>

<style lang="scss" scoped>
  .catalog__toggle {
    padding: 10px;
    display: flex;

    & > button {
      width: 50%;
    }
  }
</style>