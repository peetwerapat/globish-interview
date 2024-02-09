<template>
  <div class="flex flex-col justify-center items-center my-3 h-screen">
    <div class="flex flex-row gap-1">
      <button
        v-for="(answers, index) in questions"
        :key="index"
        class="rounded-3xl shadow-md border border-black w-14 px-3 py-2 bg-[#FFFAF5]"
        :class="{ 'bg-black': currentQuestionValue === index }"
        @click="setCurrentQuestionValue(index)"
      ></button>
    </div>
    <div
      class="w-1/2 h-1/2 flex justify-center bg-white rounded-3xl shadow-md border border-black my-6 max-[720px]:w-1/4"
    >
      <div
        v-if="
          currentQuestionValue !== null &&
          currentQuestionValue < questions.length
        "
        class="flex flex-col justify-around"
      >
        <h2 class="font-gloria text-4xl text-gray-400">
          Q{{ currentQuestionValue + 1 }}
        </h2>
        <p class="font-black text-2xl">
          {{ questions[currentQuestionValue].question }}
        </p>
        <div class="flex flex-col gap-3">
          <label
            v-for="(answers, index) in questions[currentQuestionValue].answers"
            :key="index"
            class="text-black font-extrabold rounded-3xl shadow-md border border-black px-8 py-6 text-sm hover:bg-orange-400 focus:outline-none"
            :class="{
              'bg-[#F57C4A]': selectedscores[currentQuestionValue] === index,
            }"
          >
            <input
              type="radio"
              :value="index"
              v-model="selectedscores[currentQuestionValue]"
              class="hidden"
            />

            <input
              v-if="currentQuestionValue === 6 && index === 2"
              type="text"
              v-model="additionalAnswers"
              class="border-b border-black outline-none"
              placeholder="กรอกคำตอบ"
            />
            {{ answers.answer }}
          </label>
        </div>
      </div>
    </div>
    <div class="flex justify-between gap-9 items-center">
      <div
        v-if="currentQuestionValue === 0"
        class="rounded-3xl shadow-md border border-black px-3 py-2 bg-[#FFFAF5] hover:bg-orange-400 focus:outline-none"
      >
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">ย้อนกลับ</button>
        </router-link>
      </div>
      <div v-else>
        <button
          @click="backQuestion"
          class="rounded-3xl shadow-md border border-black px-3 py-2 bg-[#FFFAF5] hover:bg-orange-400 focus:outline-none"
        >
          ย้อนกลับ
        </button>
      </div>

      <div>
        <button
          @click="nextQuestion"
          class="rounded-3xl shadow-md border border-black px-24 py-2 bg-[#F7C116] hover:bg-yellow-600 focus:outline-none"
        >
          ถัดไป
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { question } from "../components/useQuestion";

export default defineComponent({
  name: "Question",
  data() {
    return {
      currentQuestionValue: 0,
      questions: question,
      selectedscores: new Array<number | null>(7).fill(null),
      additionalAnswers: "",
    };
  },
  computed: {
    currentScore(): number | null {
      if (this.currentQuestionValue !== null) {
        let lastScore = 0;
        for (let i = 0; i <= this.currentQuestionValue; i++) {
          const scoreIndex = this.selectedscores[i];
          if (scoreIndex !== null) {
            const scoreChoice = this.questions[i].answers[i].score;
            lastScore += scoreChoice;
          }
        }
        return lastScore;
      }
      return null;
    },
  },
  methods: {
    setCurrentQuestionValue(val: number) {
      this.currentQuestionValue = val;
    },
    backQuestion() {
      if (this.currentQuestionValue > 0) {
        this.currentQuestionValue--;
      }
    },
    nextQuestion() {
      if (
        this.currentQuestionValue < this.questions.length - 1 &&
        this.selectedscores[this.currentQuestionValue] !== null
      ) {
        this.currentQuestionValue++;
      }
    },
    submit() {
      if (
        this.selectedscores[6] !== null ||
        this.additionalAnswers.trim() !== ""
      ) {
        this.$router.push({
          path: "/result",
          query: {
            currentScore: this.currentScore,
            additionalAnswers: this.additionalAnswers,
            answersQ7: this.selectedscores[7],
          },
        });
      }
    },
  },
});
</script>
<style lang=""></style>
