"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            url: 'https://picsum.photos/200/300'
        }
    },
    methods: {
        change(){
            console.log('ho cliccato');
            this.message = 'Ho cliccato il bottone!'
        }
    }
}).mount('#app');