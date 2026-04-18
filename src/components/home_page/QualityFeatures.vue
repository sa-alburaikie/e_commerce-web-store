<template>
  <div class="quality-features py-13 bg-grey-lighten-2">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="3" lg="" v-for="card in cards" :key="card.title" class="px-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering? 2: 0"
              class="text-center d-flex align-center justify-center px-4"
              height="300"
              v-bind="props"
              :color="isHovering? 'blue-lighten-4': 'white'"
              style="cursor:pointer;"
            >
              <div class="parent">
                <span v-html="card.svg"></span>
                <v-card-title style="font-weight: 700;text-transform: uppercase;font-size: 16px;">{{ card.title }}</v-card-title>
                <v-card-text>{{ card.desc }}</v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cards: [
        {
          title: 'quality and saving',
          desc: 'comprehensive quality control and affordable prices',
          svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#f00">
                     <g fill="none" stroke="#9B5DE5" stroke-linecap="round" stroke-width="1.5">
                     <path d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03c-.764-.12-1.361-.592-1.513-1.197c-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677c.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03c.764.12 1.361.592 1.514 1.197c.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678c-.152.604-.75 1.076-1.514 1.197c-.186.029-.41.029-.857.029Z"/>
                    <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/>
                      </g>
                    </svg>`,
        },
        {
          title: 'global warehouse',
          desc: '27 overseas warehouses',
          svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#9B5DE5" fill-rule="evenodd" d="M11.217 3.553a1.75 1.75 0 0 1 1.566 0l7 3.5c.592.296.967.902.967 1.565V20a.75.75 0 0 1-1.5 0V8.618a.25.25 0 0 0-.138-.224l-7-3.5a.25.25 0 0 0-.224 0l-7 3.5a.25.25 0 0 0-.138.224V20a.75.75 0 0 1-1.5 0V8.618c0-.663.375-1.269.967-1.565zM6.25 12c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v7A1.75 1.75 0 0 1 16 20.75H8A1.75 1.75 0 0 1 6.25 19zM8 11.75a.25.25 0 0 0-.25.25v1.25h8.5V12a.25.25 0 0 0-.25-.25zm8.25 3h-8.5v1.5h8.5zm0 3h-8.5V19c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25z" clip-rule="evenodd"/>
                    </svg>`,
        },
        {
          title: 'fast shipping',
          desc: 'fast and convenient door to door delivery',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                 <path fill="#9B5DE5" d="M18 8h-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10h2a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h2v-5l-4-4zM7 18.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 7 18.5zM4 14V7h10v7H4zm13 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17 18.5z"/>
                </svg>`,
        },
        {
          title: 'payment security',
          desc: 'More than 10 different secure payment methods',
          svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#000000">
                       <g fill="none" stroke="#9B5DE5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                        <path d="M2 4.5h6.757a3 3 0 0 1 2.122.879L14 8.5m-9 5H2m6.5-6l2 2a1.414 1.414 0 1 1-2 2L7 10c-.86.86-2.223.957-3.197.227L3.5 10"/>
                        <path d="M5 11v4.5c0 1.886 0 2.828.586 3.414S7.114 19.5 9 19.5h9c1.886 0 2.828 0 3.414-.586S22 17.386 22 15.5v-3c0-1.886 0-2.828-.586-3.414S19.886 8.5 18 8.5H9.5"/>
                        <path d="M15.25 14a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"/>
                       </g>
                    </svg>`,
        },
        {
          title: 'have questions?',
          desc: '24/7 Customer service - We are here and happy to help',
          svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 42 42">
                     <path fill="#9B5DE5" d="M17.737 30.521c0 .815.259 1.481.775 2.01c.528.517 1.185.785 1.971.785c.797 0 1.462-.27 1.99-.785c.536-.527.807-1.193.807-2.01c0-.808-.271-1.482-.807-2c-.527-.527-1.193-.787-1.99-.787c-.786 0-1.442.26-1.971.787c-.516.518-.775 1.194-.775 2zm.945-5.542h3.751c-.101-.766-.05-1.145.18-1.761a7.932 7.932 0 0 1 .936-1.75c.378-.549.814-1.075 1.305-1.583a18.86 18.86 0 0 0 1.353-1.571a9.394 9.394 0 0 0 1.056-1.731c.287-.618.428-1.294.428-2.06c0-.985-.17-1.84-.498-2.577a4.986 4.986 0 0 0-1.433-1.86c-.618-.508-1.354-.885-2.188-1.134a9.709 9.709 0 0 0-2.756-.379c-1.363 0-2.586.299-3.671.886a9.555 9.555 0 0 0-2.826 2.239l2.378 2.108a6.927 6.927 0 0 1 1.74-1.362a4.395 4.395 0 0 1 2.08-.498c.946 0 1.683.259 2.219.785c.527.528.797 1.215.797 2.08c0 .548-.141 1.055-.408 1.532c-.279.479-.618.965-1.025 1.453c-.408.486-.846.995-1.303 1.502a11.12 11.12 0 0 0-1.225 1.661a7.57 7.57 0 0 0-.815 1.971c-.194.716-.203 1.195-.075 2.049zM1.5 21c0 10.766 8.735 19.5 19.5 19.5c10.766 0 19.5-8.734 19.5-19.5S31.766 1.5 21 1.5C10.235 1.5 1.5 10.234 1.5 21zm3.592 0c0-8.785 7.123-15.909 15.908-15.909S36.909 12.215 36.909 21S29.785 36.909 21 36.909S5.092 29.785 5.092 21z"/>
                    </svg>`,
        },
      ],
    }
  },
}
</script>
