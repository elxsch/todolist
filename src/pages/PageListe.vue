<template>
    <p>Listes : {{currentItem}}</p>
</template>

<script>
export default {
    computed: {
        currentItem () {
            return this.$route.params.id
        }
    },
}